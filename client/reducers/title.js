import { COLLECT_TITLE } from '../actions'

export default function collectTitle (state = null, action) {
  switch (action.type) {
    case COLLECT_TITLE:
      return action.title
    default:
      return state
  }
}
