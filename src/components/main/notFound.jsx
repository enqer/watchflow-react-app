import {Link} from "react-router-dom";
import notFound from '../../img/nothing.png'

const NotFound = () => {
    return(
        <div style={styles.container}>
            <img style={styles.img} src={notFound} alt="not found site"/>
            <h1>NIE ZNALEZIONO STRONY O PODANYM ADRESIE.</h1>
            <p style={styles.text}>
                Przepraszamy. Strona, której szukasz nie została odnaleziona.
                <br />
                Sprawdź poprawność adresu lub zajrzyj na stronę <Link to="/" style={styles.link}>startową naszego serwisu.</Link>
            </p>
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        minHeight: 'calc(100vh - (110px + 70px))'
    },
    text : {
        textAlign: 'center'
    },
    link : {
        color: '#4682b4',
        // textDecoration: 'none'
    },
    img : {
        width: '200px'
    }

}
export default NotFound
