
const MovieTitles = (props) => {
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <p style={{fontSize: '26px', margin: 0}}>{props.title}</p>
            </div>
        </>
    )
}
export default MovieTitles
