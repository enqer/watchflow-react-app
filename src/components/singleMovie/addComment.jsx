import styles from './addComment.module.css'
import {useState} from "react";
import axios from "axios";
import { config} from "../../config/authConfig";
import {baseUrl} from "../../config/shared";

const AddComment = (props) => {
    const [commentText, setCommentText] = useState('');
    const [error, setError] = useState(false)
    const handleClear = () => {
        document.getElementById("area").value=''
        setCommentText('')
    }


    const data = {
        content: commentText,
        movieId: parseInt(props.movieId),
        userId: parseInt(props.userId)
    }
    const handleSubmit = () => {
        if (!(commentText.trim() === '')){
            axios
                .post(baseUrl + 'api/movie/comment',
                    data,
                    config
                )
                .then((response) => setError(false))
                .catch((error) => setError(true))
        }
        window.location.reload()
    }

    return(
        <div>
            <h3 className={styles.addCommenText}>Dodaj komentarz:</h3>
            <textarea
                className={styles.textarea}
                name="area"
                id="area"
                spellCheck="false"
                placeholder="Napisz coś..."
                onChange={(event) => setCommentText(event.target.value)}
            />
            <div className={styles.btnWrapper}>
                <button
                    className={styles.btn}
                    onClick={handleClear}
                >
                    Wyczyść
                </button>
                <button
                    className={styles.btn}
                    onClick={handleSubmit}
                >
                    Dodaj
                </button>
            </div>
            {error && (
                <p className={styles.error}>Problem z dodaniem komentarza</p>
            )}
        </div>
    )
}
export default AddComment
