export const GET = '@transactions/Get' // Async? Then GET_REQUEST
export const SET = '@transactions/Set'
export const SORT = '@transactions/Sort'
export const SEARCH = '@transactions/Search' // Async? Then SEARCH_REQUEST
export const FILTER = '@transactions/Filter'
export const SET_SORT_OPTIONS = '@transactions/Set sort options'
export const SET_SEARCH_OPTIONS = '@transactions/Set search options'

// Maybe like in sort and search, through options - SET_FILTER_OPTIONS?
export const SET_END_FILTER_TIME = '@transactions/Set end filter time'
export const SET_START_FILTER_TIME = '@transactions/Set start filter time'

// Maybe it must be SEARCH_REQUEST_ERROR?
export const SET_BLOCK_EXPLORER_ERROR = '@transactions/Set block explorer error'
