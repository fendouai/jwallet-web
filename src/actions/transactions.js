// FSA compliant actions
import { create as createAction } from '../helpers/action'
import * as TRANSACTIONS from '../constants/transactions'

export const get = () => createAction(
  TRANSACTIONS.GET,
)

// Rename searchQuery to query
export const search = (searchQuery) => createAction(
  TRANSACTIONS.SEARCH,
  { searchQuery }
)

// What is foundItemsHashes?
// Rename searchQuery to query
export const setSearchOptions = (foundItemsHashes, searchQuery) => createAction(
  TRANSACTIONS.SET_SEARCH_OPTIONS, {
    foundItemsHashes,
    searchQuery,
  }
)

// What is sortField?
export const sort = (sortField) => createAction(
  TRANSACTIONS.SORT,
  { sortField }
)

export const setSortOptions = (sortField, sortDirection) => createAction(
  TRANSACTIONS.SET_SORT_OPTIONS, {
    sortField,
    sortDirection,
  }
)

export const setStartFilterTime = (startTime) => createAction(
  TRANSACTIONS.SET_START_FILTER_TIME,
  { startTime }
)

export const setEndFilterTime = (endTime) => createAction(
  TRANSACTIONS.SET_END_FILTER_TIME,
  { endTime }
)

// What isOpen means?
export const filter = (isOpen) => createAction(
  TRANSACTIONS.FILTER,
  { isOpen }
)
