/* eslint-disable arrow-parens, max-len, no-shadow, function-paren-newline */
import { is, curry, assoc, assocPath, compose, map, call, always } from 'ramda'
import * as helpers from '.'

/** Apply action payload item to the same field in store */
export const applyPayload = curry((item, action) =>
  call(is(Array, item) ? assocPath : assoc, item, helpers.action.getPayload(item, action))
)

/** Apply action payload item to the field in store */
export const applyPayloadTo = curry((item, field, action) =>
  call(is(Array, item) ? assocPath : assoc, field, helpers.action.getPayload(item, action))
)

/** Sequentially applying set of modifiers to store */
export const seqModify = (...fns) => (action) => compose(...map((fn) => call(fn, action), fns))

/** Set store field to the value */
export const setField = (name, value) => always(
  call(is(Array, name) ? assocPath : assoc, name, value)
)
