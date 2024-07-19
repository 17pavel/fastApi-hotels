import SearchField from "./../../SearchField/SearchField";
import InfoPanel from "../../InfoPanel/InfoPanel";
import style from './Home.module.css'
const Home = () => {
    return (
        <>
        <div className={style.inviteHomePageTitle}>
            <center>
                <h1>Добро пожаловать! </h1>
            </center>
        </div>
        <div className={style.wrap}>
            <center>
                <div className={style.typing_demo}>Подберем идеальные апартаменты для вашей командировки, отпуска или коротких путешествий.</div>
            </center>
        </div>
        <hr/>
        <div className={style.wrapper}>
        <br/><br/>
            <center>
                <SearchField/>
            </center>
        <br/><br/>
        </div>
        <hr/>
        <div className="container header-info">
            <center>
            <div className="row">
                <div className="col-sm">
                    <div className="alert alert-dismissible">
                        <strong>Прямой контакт с хозяевами</strong>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="alert alert-dismissible">
                        <strong>Апартаменты на любой вкус и кошелёк: квартиры, отели, бунгало и многое другое</strong>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="alert alert-dismissible">
                        <strong>Мы на связи с Вами круглосуточно</strong>
                    </div>
                </div>
            </div>
            </center>
        </div>
        <hr/>
        <div className={style.wrapper}>
            <center>
                <InfoPanel/>
            </center>
        </div>
        </>
    )
}

export default Home