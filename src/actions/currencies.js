// FSA compliant actions
import { create as createAction } from '../helpers/action'
import * as CURRENCIES from '../constants/currencies'

export const get = () => createAction(CURRENCIES.GET)

// Maybe rename items to currencies?
export const set = (items) => createAction(
  CURRENCIES.SET,
  { items },
)

// Maybe rename currentAddress items to address?
export const setDigitalAssetAddress = (currentAddress) => createAction(
  CURRENCIES.SET_CURRENT, // Set current what? Rename to ADDRESS
  { currentAddress },
)

// We have three names for one thing - token, currency, digitalAsset
export const toggleDigitalAsset = (address) => createAction(
  CURRENCIES.TOGGLE_ACTIVE,
  { address },
)

// Remove callback onClose ad move it in middleware
export const openModal = (onClose) => createAction(
  CURRENCIES.OPEN_MODAL,
  { onClose },
)

export const closeModal = () => createAction(
  CURRENCIES.CLOSE_MODAL
)

// Maybe rename searchQuery to query?
export const search = (searchQuery) => createAction(
  CURRENCIES.SEARCH,
  { searchQuery },
)

// What is sort field? Maybe it sort condition?
export const sort = (sortField) => createAction(
  CURRENCIES.SORT,
  { sortField },
)

// Need to define foundItemsSymbols
export const setSearchOptions = (foundItemsSymbols, searchQuery) => createAction(
  CURRENCIES.SET_SEARCH_OPTIONS, {
    searchQuery,
    foundItemsSymbols,
  }
)

// Maybe replace sortField, sortDirection to object with options?
// like options = { query, direction }
// or define sortField purpose
export const setSortOptions = (sortField, sortDirection) => createAction(
  CURRENCIES.SET_SORT_OPTIONS, {
    sortField,
    sortDirection,
  }
)

// We can simplify naming of argument, because action name
// contains context (customToken) and argument applies to this
// context and we can read it like customToken.data

// Rename addCustomToken to addCustom
export const addCustomToken = (customTokenData) => createAction(
  CURRENCIES.ADD_CUSTOM,
  { customTokenData },
)

