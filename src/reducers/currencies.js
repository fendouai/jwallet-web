/* eslint-disable max-len */

import { identity, always } from 'ramda'
import * as CURRENCIES from '../constants/currencies'
import * as helpers from '../helpers'

const {
  setField,
  seqModify,
  applyPayload,
} = helpers.store

const initialState = {
  items: [],
  isOpen: false, // Maybe isModalOpen?
  onClose: null, // This is callback? We need to remove it
  balances: {},
  sortField: '',
  isLoading: true, // Need to define when it can be isLoading
  searchQuery: '',
  isActiveAll: false, // isAllActive?
  sortDirection: 'ASC',
  currentAddress: '', // All currencies current address?
  foundItemsSymbols: [], // ?
}

const actionsHandlers = {
  [CURRENCIES.GET]:
    always(identity), // returns state

  [CURRENCIES.SET]:
    applyPayload('items'),

  [CURRENCIES.SET_CURRENT]:
    seqModify(
      setField('isLoading', false),
      applyPayload('currentAddress'),
    ),

  [CURRENCIES.SET_ACTIVE_ALL]:
    applyPayload('isActiveAll'),

  [CURRENCIES.OPEN_MODAL]:
    seqModify(
      setField('isOpen', true),
      applyPayload('onClose'),
    ),

  [CURRENCIES.CLOSE_MODAL]:
    setField('isOpen', false),

  [CURRENCIES.SET_SEARCH_OPTIONS]:
    seqModify(
      applyPayload('searchQuery'),
      applyPayload('foundItemsSymbols'),
    ),

  [CURRENCIES.SET_SORT_OPTIONS]:
    seqModify(
      applyPayload('sortField'),
      applyPayload('sortDirection')
    ),

  [CURRENCIES.SET_BALANCES]:
    applyPayload('balances'),
}

export default helpers.reducer.create(initialState, actionsHandlers)

