import { is, path, curry, concat } from 'ramda'

/** Create FSA */
export const create = (type, payload, meta) => ({ type, payload, meta })

/** Get some item from action payload */
export const getPayload = curry((item, action) =>
  path(is(Array, item) ? concat(['payload'], item) : ['payload', item], action)
)
