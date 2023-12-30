
const NotFoundText = (props) => {

    const styles = {
        wrapper : {
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        text: {
            fontSize: '32px',
            color: 'grey',
            fontWeight: 'bold'
        }

    }

    return(
        <div style={styles.wrapper}>
            <p style={styles.text}>{props.text}</p>
        </div>
    )
}
export default NotFoundText
