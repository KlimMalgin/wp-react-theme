import { 
//    GET_GENRES,
    GET_GENRES_SUCCESS,
    UNSELECT_GENRE,
    SELECT_GENRE/*,
    ENABLE_PANEL,
    DISABLE_PANEL*/
//    GET_GENRES_FAIL
    } from '../constants/Search'

import { 
    ENABLE_SHADOW,
    DISABLE_SHADOW
} from '../constants/Shadow'

import compose from 'compose-function'

const initialState = {
    /**
     * @depricated Не используется
     * Как сортировать теги при выводе:
     * all - все подряд (но в алфавитном порядке)
     * alphabet - по алфавиту (Буквы алфавита как заголовки разделов с тегами)
     */
    sortType: 'alphabet', 
    
    /**
     * Жанры отсортированные по алфавиту
     */
    alphabet: {},
    
    /**
     * Полный список загруженных жанров
     */
    genres: [],
    
    /**
     * Количество выбранных тегов
     */
    selectedCount: 0,
    
    /**
     * Активна строка поиска или нет
     */
    active: false
    
    /**
     * Активна searchPanel или нет
     */
    //activePanel: false
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
    
    case ENABLE_SHADOW:
    case DISABLE_SHADOW:
        return { ...state, active: action.payload }
    
    /*case ENABLE_PANEL:
    case DISABLE_PANEL:
        return { ...state, activePanel: action.payload }*/
    
    default:
        return state;
  }
}

/**
 * Установить свойство selected для жанра из action.payload
 * @param {Object} state Состояние для search
 * @param {Object} action Объект текущего действия
 * @param {Boolean} value Новое состояние жанра
 */
function setSelected (state, action, value) {
    let selectedCounter = state.selectedCount;
    let genreChanger = (genre) => genre.id == action.payload.id 
                            ? { ...action.payload, selected: value } 
                            : genre;
    let selectedIterator = (genre) => {
                                if (genre.id == action.payload.id) {
                                    genre.selected ? selectedCounter++ : selectedCounter--;     
                                }
                                return genre;
                            };
    let composeChanger = compose(selectedIterator, genreChanger);
    let symbol = action.payload.name[0].toUpperCase(),
        genresByKey = state.alphabet[symbol].map(composeChanger),
        alphabet = { ...state.alphabet };
    alphabet[symbol] = genresByKey;
    
    return { ...state, 
            genres: state.genres.map(genreChanger),
            selectedCount: selectedCounter,
            alphabet: alphabet
    };
}

/**
 * Добавляем в стейт жанры и сортируем их по алфавиту. Ожидаем, что в action.payload - массив жанров
 */
function createStateAndSortByAlphabet (state, action, alphabet) {
    action.payload.map((item) => alphabet[item.name[0].toUpperCase()].push(item));
    return { ...state, genres: action.payload, alphabet: alphabet };
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