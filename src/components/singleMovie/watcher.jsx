import styles from "./movie.module.css";
import {useEffect, useState} from "react";
import {config, isLogged, user} from "../../config/authConfig";
import {toast} from "react-hot-toast";
import axios from "axios";

import {BASE_URL} from "../../config/appConfig";

const Watcher = (props) => {
    const [watched, setWatched] = useState(false)

    useEffect(() => {
        const getWatcherInfo = () => {
            axios
                .get(`${BASE_URL}/api/movies/${props.movieId}/watchers/${user.userId}`)
                .then((response) => {
                    if (response.data.isWatcher){
                        setWatched(true)
                    }
                })
                .catch((error) => {
                    console.log("brak obejrzenia")
                })
        }
        isLogged && getWatcherInfo()
    }, []);

    const handleIsWatched = () => {
        if (!isLogged){
            toast("Aby zapisać film do obejrzanych, musisz się zalogować!")
            return
        }
        if (watched)
            deleteWatcher()
        else
            addWatcher()
    }
    const deleteWatcher = () => {
        axios
            .delete(`${BASE_URL}/api/movies/${props.movieId}/watchers/${user.userId}`,
                config)
            .then((response) => {
                setWatched(false)
                toast('Usunięto obejrzenie!')
            })
            .catch((error) => {
                toast('Problem z usunięciem objerzenia filmu')
                setWatched(true)
            })
    }

    const addWatcher = () => {
        axios
            .post(`${BASE_URL}/api/movies/${props.movieId}/watchers/${user.userId}`,
                {},
                config)
            .then((response) => {
                setWatched(true)
                toast("Dodano obejrzenie!")
            })
            .catch((error) => {
                setWatched(false)
                toast("Problem z dodaniem obejrzenia")
            })
    }

    return(
        <div className={styles.selectWatched}>
            <p>Już obejrzane?</p>
            <input
                type="checkbox"
                checked={watched}
                onChange={(event) => handleIsWatched()}
            />
        </div>
    )
}
export default Watcher
