import { COLLECT_DESCRIPTION} from '../actions'

export default function collectDescription (state = 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!', action) {
  switch (action.type) {
    case COLLECT_DESCRIPTION:
      return action.description
    default:
      return state
  }
}
