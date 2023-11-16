import Carousel from "@itseasy21/react-elastic-carousel";
const CarouselSlider = () => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 1},
        {width: 768, itemsToShow: 1},
        {width: 1200, itemsToShow: 1},
    ];

    const styles = {
        carosuel: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px',
            width: '100%',
            backgroundColor: '#00008B',
            color: '#fff',
            margin: '0 15px',
            fontSize: '4em',
        }
    }
    return (

        <div>

            <Carousel breakPoints={breakPoints}>
                <div style={styles.carosuel}>One</div>
                <div style={styles.carosuel}>One</div>
                <div style={styles.carosuel}>One</div>
                <div style={styles.carosuel}>One</div>
                <div style={styles.carosuel}>One</div>
            </Carousel>
        </div>
    )

}
export default CarouselSlider
