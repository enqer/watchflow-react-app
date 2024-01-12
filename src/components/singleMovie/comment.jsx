import styles from './comment.module.css'
import { MdDelete } from "react-icons/md";
import axios from "axios";
import {BASE_URL} from "../../config/shared";
import {config, isLogged, user} from "../../config/authConfig";
const Comment = (props) => {

    const handleDeleteComment = () => {
      axios
          .delete(`${BASE_URL}/api/movies/comments/${props.id}`,
              config)
          .then((response)=> {
              console.log('Deleted')
              window.location.reload()
          })
          .catch((error) => console.error(error))
    }

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
                {isLogged
                    && (user.userId === props.userId.toString() || user.isAdmin)
                    && (
                        <MdDelete onClick={handleDeleteComment}/>
                    )
                }
            </div>

        </div>
    )
}
export default Comment
