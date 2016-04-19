import { GET_GENRES } from '../constants/Search'

const initialState = {
    /**
     * Как сортировать теги при выводе:
     * all - все подряд (но в алфавитном порядке)
     * alphabet - по алфавиту (Буквы алфавита как заголовки разделов с тегами)
     */
    sortType: 'alphabet', 
    alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K'],   /* Тут надо английский алфавит */
    tags: [
        {
            name: 'Rock'
        },
        {
            name: 'Drum\'n\'Base'
        },
        {
            name: 'Relax'
        },
        {
            name: 'Classic'
        },
        {
            name: 'Electronic'
        },
        {
            name: 'Rock opera'
        }
    ]
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case GET_GENRES:
      return { ...state, year: action.payload }

    default:
      return state;
  }
}
