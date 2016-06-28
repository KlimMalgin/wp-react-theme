import { 
    SHOW_MODAL,
    HIDE_MODAL
} from '../constants/modal'

const initialState = {
  show: false
}

export default function modal(state = initialState, action) {
  
  switch (action.type) {
    case SHOW_MODAL:
    case HIDE_MODAL:  
      return { ...state, show: action.payload }

    default:
      return state;
  }

}
