import { COLLECT_TITLE } from '../actions'

export default function collectTitle (state = 'Meta Data Checker | Preview and Edit Your Tags Here', action) {
  switch (action.type) {
    case COLLECT_TITLE:
      return action.title
    default:
      return state
  }
}
