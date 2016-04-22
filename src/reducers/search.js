import { 
//    GET_GENRES,
    GET_GENRES_SUCCESS,
    UNSELECT_GENRE,
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
    alphabet: {},
    genres: []
}

export default function search(state = initialState, action) {
  switch (action.type) {

    //case GET_GENRES:
    //case GET_GENRES_FAIL:
 
    case GET_GENRES_SUCCESS:
        return createStateAndSortByAlphabet(state, action, alphabetAsObject())
        //return { ...state, genres: action.payload }

    case SELECT_GENRE:
        return setSelected(state, action, true)
    
    case UNSELECT_GENRE:
        return setSelected(state, action, false)
    
    default:
        return state;
  }
}

/**
 * Установить свойство selected для жанра в action.payload
 * @param {Object} state Состояние для search
 * @param {Object} action Объект текущего действия
 * @param {Boolean} value Новое значение для жанра
 */
function setSelected (state, action, value) {
    return { ...state, 
            genres: state.genres.map(
                (genre) => genre === action.payload 
                            ? { ...action.payload, selected: value } 
                            : genre ) 
    }
}

/**
 * Добавляем в стейт жанры и сортируем их по алфавиту. Ожидаем, что в action.payload - массив жанров
 */
function createStateAndSortByAlphabet (state, action, alphabet) {
    action.payload.map((item) => alphabet[item.name[0].toUpperCase()].push(item))
    return { ...state, genres: action.payload, alphabet: alphabet }
}


/*function alphabetAsArray () {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
}*/

function alphabetAsObject () {
    return {
        'A': [], 
        'B': [], 
        'C': [], 
        'D': [], 
        'E': [], 
        'F': [], 
        'G': [], 
        'H': [], 
        'I': [], 
        'J': [], 
        'K': [], 
        'L': [], 
        'M': [], 
        'N': [], 
        'O': [], 
        'P': [], 
        'Q': [], 
        'R': [], 
        'S': [], 
        'T': [], 
        'U': [], 
        'V': [], 
        'W': [], 
        'X': [], 
        'Y': [], 
        'Z': []
    };
}