import {decodeToken, isExpired} from "react-jwt";

export const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token-watchflow')}`
    }
}
export const isLogged = !isExpired(localStorage.getItem('token-watchflow'))
export const user = decodeToken(localStorage.getItem('token-watchflow'))

