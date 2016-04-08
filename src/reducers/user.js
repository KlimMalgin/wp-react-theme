const initialState = {
  avatar: {
    urls: {
      min: 'http://placehold.it/32x32',
      medium: 'http://placehold.it/96x96'
    }
  },
  name: 'User Name'
}

export default function user(state = initialState) {
  return state
}
