
const MovieTitles = (props) => {
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <p style={{fontSize: '30px', margin: 0}}>{props.title}</p>
                <p style={{padding: '0', fontSize: '16px', margin: 0}}>{props.titleEng}</p>
            </div>
        </>
    )
}
export default MovieTitles
