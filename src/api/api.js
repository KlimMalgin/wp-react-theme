
import transport from './transport'
import { endpoints } from '../config'

/**
 * Вернет список жанров
 */
export function genres () {
    return transport(endpoints.genre);
}

/**
 * Вернет дынные пользователя по userId
 */
export function user (userId) {
    return transport(endpoints.user, { userId: userId });
}
