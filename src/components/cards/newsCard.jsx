
const NewsCard = (props) => {

    const styles = {
        news : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '25%',
            justifyContent: 'space-between'
        },
        img : {
            width: '100%',
            borderRadius: '5px'
        },
        title :{
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'black'
        }
    }

    return (
        <div style={styles.news} >

            <img style={styles.img} src={props.img}/>
            <p style={styles.title}>{props.headline}</p>

        </div>
    )
}
export default NewsCard
