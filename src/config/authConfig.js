import {decodeToken, isExpired} from "react-jwt";

export const tokenKey = 'token-watchflow'
export const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem(tokenKey)}`
    }
}
export const isLogged = !isExpired(localStorage.getItem(tokenKey))
export const user = decodeToken(localStorage.getItem(tokenKey))

