// FSA compliant actions
import { create as createAction } from '../helpers/action'
import * as NETWORKS from '../constants/networks'

export const getFromStorage = () => createAction(
  NETWORKS.GET,
)

// Rename currentNetworkIndex to index
export const setCurrentNetwork = (currentNetworkIndex) => createAction(
  NETWORKS.SET_CURRENT,
  { currentNetworkIndex }
)

// What means "value"?
export const setCustomNetworkValue = (customNetworkRpc = '') => createAction(
  NETWORKS.SET_CUSTOM_NETWORK_VALUE,
  { customNetworkRpc }
)

// Remove callbacks from action, and move it in middleware (or saga)
export const saveCustomNetwork = (customNetworkRpc, onSuccess, onError) => createAction(
  NETWORKS.SAVE_CUSTOM_NETWORK, {
    customNetworkRpc,
    onSuccess,
    onError,
  }
)

// Rename networkIndex to index
export const removeCustomNetwork = (networkIndex) => createAction(
  NETWORKS.REMOVE_CUSTOM_NETWORK,
  { networkIndex }
)