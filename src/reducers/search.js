import { 
//    GET_GENRES,
    GET_GENRES_SUCCESS,
    SELECT_GENRE
//    GET_GENRES_FAIL
    } from '../constants/Search'

const initialState = {
    /**
     * Как сортировать теги при выводе:
     * all - все подряд (но в алфавитном порядке)
     * alphabet - по алфавиту (Буквы алфавита как заголовки разделов с тегами)
     */
    sortType: 'alphabet', 
    alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K'],   /* Тут надо английский алфавит */
    genres: [
        /*{
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
        }*/
    ]
}

export default function search(state = initialState, action) {
  switch (action.type) {

    //case GET_GENRES:
    //case GET_GENRES_FAIL:
 
    case GET_GENRES_SUCCESS:
        return { ...state, genres: action.payload }

    case SELECT_GENRE:
        return { ...state, genres: state.genres.map((genre) => genre === action.payload ? { ...action.payload, selected: true } : genre ) }
    
    default:
        return state;
  }
}
