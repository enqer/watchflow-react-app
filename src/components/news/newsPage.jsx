import styles from './newsPage.module.css'
import img from "../../img/background.jpg";
import loki from "../../img/loki.jpg";
import {useState} from "react";
import BackPage from "../main/backPage";

const NewsPage = (props) => {

    const [arrowMove, setArrowMove]=useState(false)
    const handlerArrow = () => {
        setArrowMove(!arrowMove)
    }

    return(
        <div className={styles.newsContainerFluid}>
            <BackPage backTo={"/news"} title={"Powrót"} />
            <div className={styles.container}>
                <div className={styles.titleWrap}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ipsum labore quibusdam rerum sapiente similique.</p>
                </div>
                <div className={styles.authorInfo}>
                    <p><span className={styles.spanColor}>Autor: </span>Jakub Popielecki<span className={styles.spanColor}> / </span>12-12-2023</p>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={loki} alt=""/>
                </div>
                <div className={styles.descriptionWrapper}>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus consequuntur dolor eaque explicabo fugit nesciunt! Aspernatur explicabo fugiat illum, labore perspiciatis provident sed sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis earum minima nisi recusandae, velit voluptas voluptatum. Cupiditate ducimus excepturi ipsum magni nostrum quidem sed veritatis.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusantium ad amet animi aspernatur assumenda at autem consequuntur corporis deserunt eaque, exercitationem harum itaque iusto tempore. A aliquid at corporis deleniti eius et facilis hic iure, magnam nesciunt nulla officia, optio perferendis provident quidem reiciendis, sequi ut veritatis. Adipisci aperiam aut eligendi excepturi explicabo fugiat minus non officiis. Accusamus corporis debitis deleniti eos ipsam mollitia numquam quam sequi voluptate voluptatibus! Ab ad alias dolore harum non sequi. Accusamus accusantium atque commodi culpa cum debitis dolor, dolore doloremque enim eveniet facere facilis fuga, ipsum iure labore laboriosam minus, natus necessitatibus nihil nostrum nulla odio perspiciatis porro possimus quae quod rerum sapiente tempore voluptates voluptatibus. Accusamus, ducimus eum explicabo iure molestias natus temporibus totam. Enim, laboriosam voluptate? Aliquam amet animi consectetur cum debitis dolor, dolore doloremque eligendi incidunt ipsam labore odio odit porro quaerat quasi, quidem, quod saepe similique sint soluta suscipit?</p>
                    <div className={styles.horizontalDisplay}>
                        <img src={img} alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequatur fugiat incidunt, inventore molestias nihil nulla omnis repellendus tempore vel voluptas, voluptatem voluptatum. Ad eveniet sit veritatis! Ab accusantium aspernatur corporis distinctio dolorem eaque esse officia quaerat repellat. Amet debitis, distinctio dolorem doloremque doloribus dolorum ducimus eveniet impedit ipsum, laudantium magnam maxime modi molestias, nihil quis rem saepe tempora voluptates. Distinctio est in quasi voluptas! Blanditiis deserunt hic libero maiores maxime nostrum possimus sunt temporibus tenetur ullam! A accusamus amet consequatur consequuntur dolor, eligendi error esse eum fuga fugiat illum, impedit incidunt laborum magni neque nihil pariatur quaerat quibusdam sed tempora! Aperiam minima nam ullam velit! Animi dolore explicabo fuga nemo quidem. Architecto at doloribus mollitia nihil, reprehenderit repudiandae sunt vero! Ab ad adipisci alias aliquid, architecto, assumenda atque cupiditate dolor, dolorem ea earum fugit ipsum laboriosam laborum maiores numquam obcaecati odio praesentium quae quaerat quasi qui quidem quis recusandae rem repellat repudiandae soluta veniam veritatis voluptas! Ad aliquid assumenda cupiditate eum facilis harum id incidunt molestias nobis odit quidem quis recusandae, saepe! Atque dolore dolores ea fugiat neque nihil quae reiciendis unde voluptatem! Alias architecto assumenda cupiditate dolor dolorem doloremque dolores eos esse excepturi exercitationem illum inventore ipsam maiores nobis pariatur perspiciatis ratione rem, repellat repudiandae rerum, similique ut voluptatem. Ab aperiam debitis deleniti esse id, ipsum iure minima minus nesciunt officiis optio quidem tempora voluptate. Cumque deserunt distinctio labore natus officiis quod temporibus ullam unde! A, ea earum enim iusto maxime mollitia necessitatibus officiis porro veritatis? Architecto, eveniet!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPage
