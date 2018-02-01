export const GET = '@currencies/Set' // Need description
export const SET = '@currencies/Get' // Need description
export const SET_CURRENT = '@currencies/Set current'
export const GET_BALANCES = '@currencies/Get balances'
export const SET_BALANCES = '@currencies/Set balances'

// Rename to TOGGLE_ACTIVE_CURRENCY, maybe use "set" instead of "toggle"?
export const TOGGLE_ACTIVE = '@currencies/Toggle active'

// We have separate namespace for modal constants
// maybe move this this constants to modals/currencies ?

export const OPEN_MODAL = '@currencies/Open modal'
export const CLOSE_MODAL = '@currencies/Close modal'

// Relates to modal constants?
// then wee need add some context in action (like "MODAL_SORT")
// to separate them from another constants or move it in another folder

export const SORT = '@currencies/Sort'
export const SEARCH = '@currencies/Search'
export const SET_ACTIVE_ALL = '@currencies/Set active all'
export const SET_SORT_OPTIONS = '@currencies/Set sort options'
export const SET_SEARCH_OPTIONS = '@currencies/Set search options'

// Relates to modal constants?
export const ADD_CUSTOM = '@currencies/Add custom'
