import styles from './comment.module.css'
import { MdDelete } from "react-icons/md";
import {decodeToken} from "react-jwt";
const Comment = (props) => {

    const user = decodeToken(localStorage.getItem('token'))

    return(
        <div className={styles.container}>
            <div className={styles.commentWrapper}>
                <div>
                    <span className={styles.textPreInfo}>Użytkownik: </span>
                    <span className={styles.textInfo}>{props.userLogin}</span>
                    <span className={styles.textPreInfo}> / </span>
                    <span className={styles.textInfo}>{props.publishedAt}</span>
                </div>
                <div>
                    <p className={styles.content}>{props.content}</p>
                </div>
            </div>
            <div className={styles.deleteWrapper}>
                {user.userId === props.userId.toString() ? <MdDelete/> : null}
            </div>

        </div>
    )
}
export default Comment
