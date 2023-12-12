import styles from "./infoText.module.css";

const InfoText = (props) => {

    return (
        <div className={styles.singleInfoWrap}>
            <p className={styles.preInfoText}>{props.infoName}</p>
            <p className={styles.infoText}>{props.info}</p>
        </div>
    )
}

export default InfoText
