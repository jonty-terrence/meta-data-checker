import { COLLECT_DESCRIPTION} from '../actions'

export default function collectDescription (state = 'Write your meta titles and descriptions here so you can preview how it might look when users see your website in Search Result Pages. ', action) {
  switch (action.type) {
    case COLLECT_DESCRIPTION:
      return action.description
    default:
      return state
  }
}
