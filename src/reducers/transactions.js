import * as TRANSACTIONS from '../constants/transactions'
import * as helpers from '../helpers'

const {
  setField,
  seqModify,
  applyPayload,
  applyPayloadTo,
} = helpers.store

const initialState = {
  filterData: {
    isOpen: false, // Is filter data open?
    endTime: 0, // Maybe timeIntervalStart?
    startTime: 0, // Maybe timeIntervalEnd?
  },
  items: [],
  sortField: 'timestamp', // Maybe sortFieldType?
  isLoading: true, // What is loading?
  searchQuery: '',
  sortDirection: 'DESC',
  foundItemsHashes: [], // Need to define
  isBlockExplorerError: false, // Maybe hasError?
  // Sorting options example:
  //
  // sort: {
  //   type: 'timestamp',
  //   direction: 'DESC',
  // }
}

const actionsHandlers = {
  [TRANSACTIONS.GET]: (state) => () => ({ // What is it for?
    ...state,
    items: initialState.items,
    searchQuery: initialState.searchQuery,
    isLoading: initialState.isLoading,
    isBlockExplorerError: initialState.isBlockExplorerError,
  }),

  [TRANSACTIONS.SET]:
    seqModify(
      applyPayload('items'),
      setField('isLoading', false)
    ),

  [TRANSACTIONS.SET_SEARCH_OPTIONS]:
    seqModify(
      applyPayload('searchQuery'),
      applyPayload('foundItemsHashes'),
    ),

  [TRANSACTIONS.SET_SORT_OPTIONS]:
    seqModify(
      applyPayload('searchQuery'),
      applyPayload('foundItemsHashes'),
    ),

  [TRANSACTIONS.SET_START_FILTER_TIME]:
    applyPayloadTo('startTime', ['filterData', 'startTime']),

  [TRANSACTIONS.SET_END_FILTER_TIME]:
    applyPayloadTo('endTime', ['filterData', 'endTime']),

  [TRANSACTIONS.FILTER]:
    setField(['filterData', 'isLoading'], false),

  [TRANSACTIONS.SET_BLOCK_EXPLORER_ERROR]:
    setField('isBlockExplorerError', true),
}

export default helpers.reducer.create(initialState, actionsHandlers)
