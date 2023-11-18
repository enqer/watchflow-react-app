
const MovieTitles = (props) => {
    return (
        <>
            <div>
                <p style={{fontSize: '20px'}}>{props.title}</p>
                <p style={{padding: '0'}}>{props.titleEng}</p>
            </div>
        </>
    )
}
export default MovieTitles
