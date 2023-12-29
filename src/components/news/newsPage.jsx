import styles from './newsPage.module.css'
import img from "../../img/background.jpg";
import loki from "../../img/loki.jpg";
import {useEffect, useState} from "react";
import BackPage from "../common/backPage";
import {useParams} from "react-router-dom";
import axios from "axios";

const NewsPage = (props) => {

    const [newsData, setNewsData] = useState({})
    const newsId = useParams()


    const getNews = () => {
        axios
            .get(`http://localhost:8080/api/news/${newsId.id}`)
            .then((response) => {
                setNewsData(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getNews()
    }, []);

    return(
        <div className={styles.newsContainerFluid}>
            <BackPage backTo={"/news"} title={"Powrót"} />
            <div className={styles.container}>
                <div className={styles.titleWrap}>
                    <p>{newsData.title}</p>
                </div>
                <div className={styles.authorInfo}>
                    <p><span className={styles.spanColor}>Autor: </span>{`${newsData.author?.firstName} ${newsData.author?.lastName}`}<span className={styles.spanColor}> / </span>{newsData.publishedAt}</p>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={newsData.image} alt=""/>
                </div>
                <div className={styles.descriptionWrapper}>
                    <h3>{newsData.content?.substring(0, newsData.content.indexOf('.')+1)}</h3>
                    <p>{newsData.content?.substring(newsData.content.indexOf('.')+1)}</p>
                    {/*    <img src={img} alt=""/>*/}
                    {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequatur fugiat incidunt, inventore molestias nihil nulla omnis repellendus tempore vel voluptas, voluptatem voluptatum. Ad eveniet sit veritatis! Ab accusantium aspernatur corporis distinctio dolorem eaque esse officia quaerat repellat. Amet debitis, distinctio dolorem doloremque doloribus dolorum ducimus eveniet impedit ipsum, laudantium magnam maxime modi molestias, nihil quis rem saepe tempora voluptates. Distinctio est in quasi voluptas! Blanditiis deserunt hic libero maiores maxime nostrum possimus sunt temporibus tenetur ullam! A accusamus amet consequatur consequuntur dolor, eligendi error esse eum fuga fugiat illum, impedit incidunt laborum magni neque nihil pariatur quaerat quibusdam sed tempora! Aperiam minima nam ullam velit! Animi dolore explicabo fuga nemo quidem. Architecto at doloribus mollitia nihil, reprehenderit repudiandae sunt vero! Ab ad adipisci alias aliquid, architecto, assumenda atque cupiditate dolor, dolorem ea earum fugit ipsum laboriosam laborum maiores numquam obcaecati odio praesentium quae quaerat quasi qui quidem quis recusandae rem repellat repudiandae soluta veniam veritatis voluptas! Ad aliquid assumenda cupiditate eum facilis harum id incidunt molestias nobis odit quidem quis recusandae, saepe! Atque dolore dolores ea fugiat neque nihil quae reiciendis unde voluptatem! Alias architecto assumenda cupiditate dolor dolorem doloremque dolores eos esse excepturi exercitationem illum inventore ipsam maiores nobis pariatur perspiciatis ratione rem, repellat repudiandae rerum, similique ut voluptatem. Ab aperiam debitis deleniti esse id, ipsum iure minima minus nesciunt officiis optio quidem tempora voluptate. Cumque deserunt distinctio labore natus officiis quod temporibus ullam unde! A, ea earum enim iusto maxime mollitia necessitatibus officiis porro veritatis? Architecto, eveniet!</p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default NewsPage
