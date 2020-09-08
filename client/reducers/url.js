import { COLLECT_URL } from '../actions'

export default function collectUrl (state = null, action) {
  switch (action.type) {
    case COLLECT_URL:
      return action.url
    default:
      return state
  }
}
