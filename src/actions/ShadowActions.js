import { 
    ENABLE_SHADOW,
    DISABLE_SHADOW
} from '../constants/Shadow'

export function enableShadow() {
  return {
    type: ENABLE_SHADOW,
    payload: true
  }
}

export function disableShadow() {
  return {
    type: DISABLE_SHADOW,
    payload: false
  }
}
