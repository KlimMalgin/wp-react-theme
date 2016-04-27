import { 
    ENABLE_SHADOW,
    DISABLE_SHADOW
} from '../constants/Shadow'

const initialState = {
  active: false
}

export default function shadow(state = initialState, action) {

  switch (action.type) {
    case ENABLE_SHADOW:
      return { ...state, active: action.payload }

    case DISABLE_SHADOW:
      return { ...state, active: action.payload }

    default:
      return state;
  }

}
