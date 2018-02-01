import { identity, always } from 'ramda'
import * as NETWORKS from '../constants/networks'
import * as helpers from '../helpers'

const {
  setField,
  seqModify,
  applyPayload,
} = helpers.store

const initialState = {
  items: [],
  isLoading: true,
  customNetworkRpc: '',
  currentNetworkIndex: 0,
}

const actionsHandlers = {
  [NETWORKS.GET]: // What for?
    always(identity),

  [NETWORKS.SET]:
    seqModify(
      setField('isLoading'),
      applyPayload('items'),
      applyPayload('currentNetworkIndex')
    ),

  [NETWORKS.SET_CURRENT]:
    applyPayload('currentNetworkIndex'),

  [NETWORKS.SET_CUSTOM_NETWORK_VALUE]:
    applyPayload('customNetworkRpc'),
}

export default helpers.reducer.create(initialState, actionsHandlers)