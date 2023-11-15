import {Link} from "react-router-dom";

const NotFound = () => {
    return(
        <div style={styles.all}>
            <h1>NIE ZNALEZIONO STRONY O PODANYM ADRESIE.</h1>
            <p style={styles.p}>
                Przepraszamy. Strona, której szukasz nie została odnaleziona.
                <br />
                Sprawdź poprawność adresu lub zajrzyj na stronę <Link to="/" style={styles.link}>startową naszego serwisu.</Link>
            </p>
        </div>
    )
}
const styles = {
    all: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center'
    },
    p : {
        textAlign: 'center'
    },
    link : {
        color: '#4682b4',
        textDecoration: 'none'
    }
}
export default NotFound