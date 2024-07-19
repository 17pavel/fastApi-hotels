import style from './InfoPanel.module.css'

const InfoPanel = () => {
    return (
        <>
            <div className={style.text_}>
                <h2 className={style.text}>Интересные факты</h2>
            </div>
            <div className={style.a_picture} >
                <div className={style.img}><a href="#"><img src='./../../../../rentapp/static/pages/home/174453_original.jpg' alt="Интересное о Минске"/></a></div>

                <div className={style.img}><img src="./../../../../rentapp/static/pages/home/dostoprimechatelnosti-gomelya-5.jpeg" alt="Интересное о Минске"/></div>

                <div className={style.img}><img src="./image/ned8.jpg" alt="Интересное о пляжах"/></div>
            </div>
        </>
    )
}

export default InfoPanel