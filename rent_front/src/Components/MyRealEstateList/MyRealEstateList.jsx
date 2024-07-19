import React, {Fragment, useState, useEffect} from "react";
import style from './MyRealEstateList.module.css'
import MyRealEstateDetails from "../MyRealEstateDetails/MyRealEstateDetails";
import api from './../Api/api'


export default function MyApartments() {
    const [apartament, setApartmentList] = useState([])

    useEffect(() => {
        getApartments();
    }, []);

    //Показать детали
    useEffect(() => {

    })
    const getApartments = () => {
        api
            .get(`api/apartmentsList/`)
            .then((res) => res.data)
            .then((data) => {

                setApartmentList(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <>
            {console.log(apartament[0].)}
            {apartament ? true: 'ничего'}



            {apartament.map(apart => (
                <div key={apart.id} className={style.appCurrent}>
                    <div className={style.applist}>
                        <div className={style.main_photo}>
                            Основное фото апартаментов
                        </div>
                        <div className={style.empty_div}>

                        </div>
                        <div className={style.short_description}>
                        <h3>{apart.appStreetName}</h3>
                        <p>{apart.appShortDiscription}</p>
                        <p>Количество спальных мест: {apart.appMaxGuests}</p>
                        </div>

                    </div>
                    <button >Посмотреть детали</button>
                    <div id='viewDeatails'>
                        Детальная информация о конкретных апартаментах
                    </div>
                </div>
            ))}
        </>
    )
}
