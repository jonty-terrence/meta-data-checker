import { COLLECT_DESCRIPTION} from '../actions'

export default function collectDescription (state = null, action) {
  switch (action.type) {
    case COLLECT_DESCRIPTION:
      return action.description
    default:
      return state
  }
}
