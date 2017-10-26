import { put, select, takeEvery } from 'redux-saga/effects'

import config from 'config'
import { storage, storageKeys } from 'utils'

import {
  NETWORKS_GET,
  NETWORKS_SET,
  NETWORKS_SET_CURRENT,
  NETWORKS_SAVE_CUSTOM_NETWORK,
  NETWORKS_REMOVE_CUSTOM_NETWORK,
} from '../modules/networks'

import { CURRENCIES_GET } from '../modules/currencies'

const defaultProps = { isCustom: false, ssl: false }
const defaultNetworks = [
  { title: 'Main Ethereum Network', rpcaddr: '37.59.55.6', rpcport: '10001', ...defaultProps },
  { title: 'Ropsten Test Network', rpcaddr: '37.59.55.6', rpcport: '10004', ...defaultProps },
  { title: 'Kovan Test Network', rpcaddr: '37.59.55.6', rpcport: '10002', ...defaultProps },
  { title: 'Rinkeby Test Network', rpcaddr: '37.59.55.6', rpcport: '10003', ...defaultProps },
  { title: 'Localhost 8545', rpcaddr: 'localhost', rpcport: '8545', ...defaultProps },
]

function getStateNetworks(state) {
  return state.networks
}

function setNetworksToStorage(action) {
  const { items, currentActiveIndex } = action

  storage.setItem(storageKeys.NETWORKS, JSON.stringify(items || defaultNetworks))
  storage.setItem(storageKeys.NETWORKS_CURRENT, currentActiveIndex || 0)
}

function setCurrentNetworkToStorage(action) {
  storage.setItem(storageKeys.NETWORKS_CURRENT, action.currentActiveIndex || 0)
}

function* setNetworks(items, currentActiveIndex) {
  yield put({ type: NETWORKS_SET, items, currentActiveIndex })
}

function* getNetworksFromStorage() {
  let items = defaultNetworks
  let currentActiveIndex = 0

  try {
    const networksFromStorage = storage.getItem(storageKeys.NETWORKS)
    const networkIndexFromStorage = storage.getItem(storageKeys.NETWORKS_CURRENT)

    items = networksFromStorage ? JSON.parse(networksFromStorage) : defaultNetworks
    currentActiveIndex = parseInt(networkIndexFromStorage, 10) || 0
  } catch (e) {
    // console.error(e)
  }

  yield setNetworks(items, currentActiveIndex)
}

function* saveCustomNetwork(action) {
  const { customNetworkRpc, onSuccess, onError } = action
  const { items } = yield select(getStateNetworks)

  try {
    checkCustomNetworkRpc(items, customNetworkRpc)

    const newCustomNetwork = parseCustomNetworkRpc(customNetworkRpc)
    const newItems = [...items, newCustomNetwork]
    const newCurrentActiveIndex = (newItems.length - 1)

    yield setNetworks(newItems, newCurrentActiveIndex)

    return onSuccess ? onSuccess() : null
  } catch (e) {
    return onError ? onError(e) : null
  }
}

function checkCustomNetworkRpc(items, customNetworkRpc) {
  // check validity
  if (!config.urlRe.test(customNetworkRpc)) {
    throw (new Error('Invalid RPC address'))
  }

  // check uniqueness
  items.forEach(({ title }) => {
    if (title === customNetworkRpc) {
      throw (new Error('This RPC address already exists'))
    }
  })
}

function parseCustomNetworkRpc(customNetworkRpc) {
  const ssl = /^https:\/\//i.test(customNetworkRpc)
  const withoutProtocol = customNetworkRpc.replace(/^http(s?):\/\//i, '')
  const [rpcaddr, rpcport = ssl ? '443' : '80'] = withoutProtocol.split(':')

  return { title: customNetworkRpc, rpcaddr, rpcport, ssl, isCustom: true }
}

function* removeCustomNetwork(action) {
  const { networkIndex } = action
  const { items, currentActiveIndex } = yield select(getStateNetworks)

  const newItems = [...items]
  newItems.splice(networkIndex, 1)

  let newCurrentActiveIndex = currentActiveIndex

  if (currentActiveIndex === networkIndex) {
    newCurrentActiveIndex = 0
  } else if (currentActiveIndex > networkIndex) {
    newCurrentActiveIndex = currentActiveIndex - 1
  }

  yield setNetworks(newItems, newCurrentActiveIndex)
}

export function* watchGetNetworksFromStorage() {
  yield takeEvery(NETWORKS_GET, getNetworksFromStorage)
}

export function* watchSetNetworks() {
  yield takeEvery(NETWORKS_SET, setNetworksToStorage)
}

export function* watchSetCurrentNetwork() {
  yield takeEvery(NETWORKS_SET_CURRENT, setCurrentNetworkToStorage)
}

export function* watchSaveCustomNetwork() {
  yield takeEvery(NETWORKS_SAVE_CUSTOM_NETWORK, saveCustomNetwork)
}

export function* watchRemoveCustomNetwork() {
  yield takeEvery(NETWORKS_REMOVE_CUSTOM_NETWORK, removeCustomNetwork)
}
