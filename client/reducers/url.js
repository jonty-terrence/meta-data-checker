import { COLLECT_URL } from '../actions'

export default function collectUrl (state = 'http://localhost:3000/', action) {
  switch (action.type) {
    case COLLECT_URL:
      return action.url
    default:
      return state
  }
}
