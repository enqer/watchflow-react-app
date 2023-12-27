import styles from './addComment.module.css'
import {useState} from "react";
import axios from "axios";
const AddComment = (props) => {
    const [commentText, setCommentText] = useState('');
    const handleClear = () => {
        document.getElementById("area").value=''
        setCommentText('')
    }

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
    const data = {
        content: commentText,
        movieId: parseInt(props.movieId),
        userId: parseInt(props.userId)
    }
    const handleSubmit = () => {
        if (!(commentText.trim() === '')){
            axios
                .post('http://localhost:8080/api/movie/comment',
                    data,
                    config
                )
                .then((response) => console.log(response))
                .catch((error) => console.error(error))
        }
        window.location.reload()
    }

    return(
        <div>
            <h3>Dodaj komentarz:</h3>
            <textarea className={styles.textarea}
                      name="area" id="area" spellCheck="false" placeholder="Napisz coś..."
                      onChange={(event) => setCommentText(event.target.value)}
            ></textarea>
            <div className={styles.btnWrapper}>
                <button className={styles.btn} onClick={handleClear} >Wyczyść</button>
                <button className={styles.btn} onClick={handleSubmit}>Dodaj</button>
            </div>
        </div>
    )
}
export default AddComment
