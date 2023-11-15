import {Link} from "react-router-dom";

const NotFound = () => {
    return(
        <>
            <h1>NIE ZNALEZIONO STRONY O PODANYM ADRESIE.</h1>
            <p>
                Przepraszamy. Strona, której szukasz nie została odnaleziona.
            </p>
            <p>
                Sprawdź poprawność adresu lub zajrzyj na stronę <Link to="/">startową naszego serwisu.</Link>
            </p>
        </>
    )
}
export default NotFound
