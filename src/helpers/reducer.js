/* eslint-disable arrow-parens, max-len, no-shadow, function-paren-newline */
import { identity, prop, propOr, always } from 'ramda'

export const create = (initialState, actionsHandlers) => (state = initialState, action) =>
  propOr( // get handler from actions handlers
    always(identity),
    prop('type', action),
    actionsHandlers,
  )(
    action // apply action to handler
  )(
    state // apply state to handler
  )
