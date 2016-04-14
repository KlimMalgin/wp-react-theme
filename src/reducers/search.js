//import { SET_YEAR } from '../constants/Page'

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
            name: 'tag1'
        },
        {
            name: 'tag2'
        },
        {
            name: 'tag3'
        },
        {
            name: 'tag4'
        }
    ]
}

export default function search(state = initialState) {
    return state;
}
