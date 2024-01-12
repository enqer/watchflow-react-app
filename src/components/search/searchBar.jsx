import styles from './searchBar.module.css'
import { IoSearch } from "react-icons/io5";
import {useState} from "react";
const SearchBar = ({handleSearch}) => {
    const [searchedText, setSearchedText] = useState('')

    return(
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                placeholder="Wyszukaj"
                onChange={(event) => setSearchedText(event.target.value)}
            />
            <span
                className={styles.search}
                onClick={() =>handleSearch(searchedText)}
            >
                <IoSearch  />
            </span>
        </div>
    )
}
export default SearchBar
