
import styles from './addMovie.module.css'
import {useState} from "react";

import upload from '../../img/upload.png'
import BackPage from "../common/backPage";

import { imageDb} from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'


const AddMovie = () => {

    //Date
    const now = new Date().getUTCFullYear();
    const years = Array(now - (now - (now - 1899))).fill('').map((v, idx) => now - idx);

    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState(options[0]);
    const [year, setYear] = useState(now);
    const [description, setDescription] = useState('');

    // Design clicking
    const [isClickedName, setIsClickedName] = useState(false)
    const [isClickedDirector, setIsClickedDirector] = useState(false)
    const changePositionName = () => {document.getElementsByName("name")[0].value === "" ? setIsClickedName(!isClickedName) : setIsClickedName(true)}
    const changePositionDirector = () => {document.getElementsByName("director")[0].value === "" ? setIsClickedDirector(!isClickedDirector) : setIsClickedDirector(true)}




    const handlerSubmit = (event) => {
        event.preventDefault()

        console.log(name)
        console.log(director)
        console.log(genre)
        console.log(year)
        console.log(description)
        console.log(selectedImage)
        const imgRef = ref(imageDb, `images/${v4()}`);
        uploadBytes(imgRef, selectedImage)
            .then(res => {
                return getDownloadURL(res.ref)
            })
            .then(url => {
                console.log("url: " + url)
            })

        // console.log(mountainsRef)
    }

    // tODO do poprawy img picker resizing!!
    return(
        <div className={styles.container}>
            <div style={{width: '100%', margin: '0 auto'}}>

                <BackPage backTo={"/movies"} title={"Powrót"}  />
                <header className={styles.header}><p>Dodaj nowy film</p></header>
                <div>
                    <form
                        className={styles.form}
                        onSubmit={handlerSubmit}
                        autoComplete="off"
                    >
                        <div className={styles.imgContainer}>
                            <div className={styles.upLoadedImgWrapper}>
                                <img className={styles.upLoadedImg}
                                     alt="Twoje wybrane zdjęcie"
                                     width={selectedImage ? '100%' : "25px"}
                                     src={selectedImage ? URL.createObjectURL(selectedImage) : upload}
                                />
                                <br />


                            </div>
                            <div className={styles.upLoadBtnWrapper}>
                                <button className={styles.upLoadBtn} onClick={() => setSelectedImage(null)}>Remove</button>
                                <input className={styles.upLoadBtn}
                                       type="file"
                                       name="myImage"
                                       accept="image/png, image/jpeg"
                                       onChange={(event) => {
                                           console.log(event.target.files[0]);
                                           setSelectedImage(event.target.files[0]);
                                       }}
                                />
                            </div>

                        </div>
                        <div className={styles.dataWrapper}>
                            <div className={styles.mainData}>
                                <div className={styles.wrapper}>
                                    <input onFocus={() => changePositionName()} onBlur={() => changePositionName()}
                                           onChange={(event) => setName(event.target.value)}
                                           className={styles.input} type="text" name="name"  required />
                                    <div className={isClickedName ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>Nazwa</div>
                                </div>
                                <div className={styles.wrapper}>
                                    <input onFocus={() => changePositionDirector()} onBlur={() => changePositionDirector()}
                                           onChange={(event) => setDirector(event.target.value)}
                                           className={styles.input} type="text" name="director"  required />
                                    <div className={isClickedDirector ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>Reżyser</div>
                                </div>
                                <div className={styles.selectGenre}>
                                    <p>Wybierz gatunek:</p>
                                    <select
                                        defaultValue={options[0]}
                                        className={styles.select}
                                        onChange={(event) => setGenre(event.target.value)}
                                    >
                                        {options.map((option, index) =>(
                                            <option
                                                className={styles.option}
                                                value={option}
                                                selected={index === 0}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.selectDate}>
                                    <p>Wybierz rok:</p>
                                    <select className={styles.select} onChange={(event) => setYear(event.target.value)} >
                                        {years.map((option) =>(
                                            <option className={styles.option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className={styles.wrapColumn}>
                                <div className={styles.description}>
                                    <p>Opis filmu:</p>
                                    <textarea spellCheck="false" placeholder="Napisz coś..." onChange={(event) => setDescription(event.target.value)}></textarea>

                                </div>
                                <div className={styles.wrapSubmit}>
                                    <input className={styles.submit} type="submit" value="Dodaj film"/>
                                    <p>Wprowadź dobre dane</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const options = ["Akcja", "Komedia", "Dokumentalny", "Dramat", "Komedia romantyczna","Science fiction", "Thriller", "Dla dzieci"];
export default AddMovie
