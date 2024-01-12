
import styles from './addMovie.module.css'
import {useState} from "react";

import upload from '../../img/upload.png'
import BackPage from "../common/backPage";

import { imageDb} from "../../config/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import { config } from "../../config/authConfig";
import axios from "axios";
import {useNavigate} from "react-router";
import TextInput from "../common/textInput";
import {baseUrl, movieGenres} from "../../config/shared";


const AddMovie = () => {
    let navigate = useNavigate()
    //Date
    const now = new Date().getUTCFullYear();
    const years = Array(now - (now - (now - 1899))).fill('').map((v, idx) => now - idx);

    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState(movieGenres[0]);
    const [year, setYear] = useState(now);
    const [description, setDescription] = useState('');
    const [validText, setValidText] = useState('')

    const validate = () => {
        if (description.trim().length < 100){
            setValidText('Wprowadź dłuższy opis')
            return false
        }
        if (selectedImage === null){
            setValidText('Wybierz zdjęcie')
            return false
        }
        setDescription(description.replace(/"/g, ''))
        return true
    }


    const handlerSubmit = (event) => {
        event.preventDefault()
        if (!validate()) return

        const imgRef = ref(imageDb, `images/${v4()}`);
        uploadBytes(imgRef, selectedImage)
            .then(res => {
                return getDownloadURL(res.ref)
            })
            .then(url => {
                addMovie(url)
            })
            .catch(error => {
                setValidText("Dodanie filmu nie powiodło się")
            })
    }

    const addMovie = (url) => {
        axios
            .post(baseUrl + `api/movie`,
                {
                    title: name,
                    image: url,
                    content: description,
                    genre: genre,
                    productionYear: year,
                    director: director
                },
                config
            )
            .then((response) => {
                    switchRoute(response.data.id)
            })
            .catch(error => setValidText("Dodanie filmu nie powiodło się"))
    }

    const switchRoute = (id) => {
        navigate(`/movie/${id}`)
        window.location.reload()
    }

    return(
        <div className={styles.containerFluid}>
            <div className={styles.container}>
                <BackPage
                    backTo={"/movies"}
                    title={"Powrót"}
                />
                <header className={styles.header}>
                    <p>Dodaj nowy film</p>
                </header>
                <div>
                    <form
                        className={styles.form}
                        onSubmit={handlerSubmit}
                        autoComplete="off"
                    >
                        <div className={styles.imgContainer}>
                            <p className={styles.metaInfo}>Zdjęcie</p>
                            <div className={styles.upLoadedImgWrapper}>
                                <img
                                    className={styles.upLoadedImg}
                                    alt="Twoje wybrane zdjęcie"
                                    width={selectedImage ? '100%' : "25px"}
                                    src={selectedImage ? URL.createObjectURL(selectedImage) : upload}
                                />
                                <br />
                            </div>
                            <div className={styles.upLoadBtnWrapper}>
                                <button
                                    className={styles.upLoadBtn}
                                    onClick={() => setSelectedImage(null)}
                                >
                                    Remove
                                </button>
                                <input
                                    className={styles.upLoadBtn}
                                    type="file"
                                    name="myImage"
                                    accept="image/png, image/jpeg"
                                    onChange={(event) => {
                                           setSelectedImage(event.target.files[0]);
                                    }}
                                />
                            </div>
                        </div>
                        <div className={styles.dataWrapper}>
                            <div className={styles.mainData}>
                                <p className={styles.metaInfo}>Informacje</p>
                                <div className={styles.inputWrapper}>
                                    <TextInput
                                        state={setName}
                                        name={"tytuł"}
                                        type={"text"}
                                    />
                                    <TextInput
                                        state={setDirector}
                                        name={"Reżyser"}
                                        type={"text"}
                                    />
                                </div>
                                <div className={styles.selectGenre}>
                                    <p>Wybierz gatunek:</p>
                                    <select
                                        defaultValue={movieGenres[0]}
                                        className={styles.select}
                                        onChange={(event) => setGenre(event.target.value)}
                                    >
                                        {movieGenres.map((option, index) => (
                                            <option
                                                className={styles.option}
                                                value={option}
                                                selected={index === 0}
                                                key={index}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.selectDate}>
                                    <p>Wybierz rok:</p>
                                    <select
                                        className={styles.select}
                                        onChange={(event) => setYear(event.target.value)}
                                    >
                                        {years.map((option, index) => (
                                            <option
                                                className={styles.option}
                                                key={index}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className={styles.wrapColumn}>
                                <div className={styles.description}>
                                    <p className={styles.metaInfo}>Opis filmu</p>
                                    <textarea
                                        spellCheck="false"
                                        placeholder="Napisz coś..."
                                        onChange={(event) => setDescription(event.target.value)}
                                    />

                                </div>
                                <div className={styles.wrapSubmit}>
                                    <input
                                        className={styles.submit}
                                        type="submit"
                                        value="Dodaj film"
                                    />
                                    <p>{validText}</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AddMovie
