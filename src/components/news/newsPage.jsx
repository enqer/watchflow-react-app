import './newsPage.css'
import img from "../../img/background.jpg";
import NewsCard from "./newsCard";
import img2 from "../../img/news.jpg";

const NewsPage = (props) => {
    // TODO ugliest view i have ever seen, please change it
    return(
        <div className={"newsPageBackground"}>
            <div className="newsPageContainer">
                    <p className={"newsPageHeadline"}>Lorem ipsum dolor.</p>
                    <img src={img} />
                <div className="newsPageInfo">
                    <p>Autor:</p>
                    <p className={"newsPageAuthor"} style={{fontWeight: 'bold'}}>Alek Koszmarek</p>
                    <p>Data:</p>
                    <p style={{fontWeight: 'bold'}}>24.11.2023</p>
                </div>
                <div className={"newsPageText"}>
                    <p style={{fontWeight: 'bold'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae blanditiis commodi consequatur consequuntur cum dicta dolorem doloremque dolores eos, excepturi explicabo facere fuga, harum impedit iste laboriosam magni maxime modi obcaecati odio odit officia omnis porro provident quae quas recusandae reiciendis repellat saepe sed sint sit temporibus vel veniam voluptas voluptatum! A accusamus ad atque blanditiis consequatur eaque, eligendi facilis incidunt, magnam minima molestias non unde vero voluptate voluptates. Adipisci, amet animi asperiores, cupiditate deleniti dolor doloremque eius error illum impedit ipsum itaque iure minima nobis, nostrum odit provident quo recusandae repudiandae sapiente sequi totam ut. Beatae debitis, excepturi expedita magnam maxime natus nihil non odio odit, ratione repellat soluta tempora voluptatum. A ad alias asperiores blanditiis consequuntur corporis cum doloremque, enim ipsa iste laboriosam laborum minima nobis placeat quaerat quo ratione repellat rerum saepe sapiente sequi sit tempore vero. A alias beatae eveniet harum illo illum non quo!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae blanditiis commodi consequatur consequuntur cum dicta dolorem doloremque dolores eos, excepturi explicabo facere fuga, harum impedit iste laboriosam magni maxime modi obcaecati odio odit officia omnis porro provident quae quas recusandae reiciendis repellat saepe sed sint sit temporibus vel veniam voluptas voluptatum! A accusamus ad atque blanditiis consequatur eaque, eligendi facilis incidunt, magnam minima molestias non unde vero voluptate voluptates. Adipisci, amet animi asperiores, cupiditate deleniti dolor doloremque eius error illum impedit ipsum itaque iure minima nobis, nostrum odit provident quo recusandae repudiandae sapiente sequi totam ut. Beatae debitis, excepturi expedita magnam maxime natus nihil non odio odit, ratione repellat soluta tempora voluptatum. A ad alias asperiores blanditiis consequuntur corporis cum doloremque, enim ipsa iste laboriosam laborum minima nobis placeat quaerat quo ratione repellat rerum saepe sapiente sequi sit tempore vero. A alias beatae eveniet harum illo illum non quo!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae blanditiis commodi consequatur consequuntur cum dicta dolorem doloremque dolores eos, excepturi explicabo facere fuga, harum impedit iste laboriosam magni maxime modi obcaecati odio odit officia omnis porro provident quae quas recusandae reiciendis repellat saepe sed sint sit temporibus vel veniam voluptas voluptatum! A accusamus ad atque blanditiis consequatur eaque, eligendi facilis incidunt, magnam minima molestias non unde vero voluptate voluptates. Adipisci, amet animi asperiores, cupiditate deleniti dolor doloremque eius error illum impedit ipsum itaque iure minima nobis, nostrum odit provident quo recusandae repudiandae sapiente sequi totam ut. Beatae debitis, excepturi expedita magnam maxime natus nihil non odio odit, ratione repellat soluta tempora voluptatum. A ad alias asperiores blanditiis consequuntur corporis cum doloremque, enim ipsa iste laboriosam laborum minima nobis placeat quaerat quo ratione repellat rerum saepe sapiente sequi sit tempore vero. A alias beatae eveniet harum illo illum non quo!</p>
                </div>
                <div className="newsPageMore">
                    <p>Zobacz więcej newsów</p>
                    <div className="newsPageMoreNews">
                    {[1,2].map(a => (
                        <NewsCard id={Math.floor(Math.random() * 10)} img={img2} headline={"Marvel nie skasuje Kanga. Jonathan Majors to co innego"} />
                    ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsPage
