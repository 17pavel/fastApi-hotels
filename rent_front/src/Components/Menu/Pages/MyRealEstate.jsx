import React from "react";
import './../../bootstrap.min.css'
import style from './MyRealEstate.module.css'
import MyRealEstateDetails from "../../MyRealEstateDetails/MyRealEstateDetails";
import MyRealEstateList from "../../MyRealEstateList/MyRealEstateList";


const MyRealEstate = () => {
    /*Здесь получаем данные для наполнения СПИСКА собственности конкретного собственника, зарегистрированной на сайте*/
/*    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = {'email': 'b@gmail.com'};

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: "5@5.com",
        redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/api/apartmentsList/")
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));*/



    return (
        /*const [] =*/
        <>
            <nav className={style.myMenuOwner}>
                <center><span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-4">Добро пожаловать, Owner</span>
                </span></center>
                <a href="#" className="nav-link text-white">
                    <abbr datatitle="Список зарегистрированных на сайте моих квартир">Моя недвижимость</abbr>

                </a>
                <a href="#" className="nav-link text-white">
                    <abbr datatitle="Бронирование моих квартир">Имеющиеся бронирования</abbr>
                </a>
                <a href="#" className="nav-link text-white">
                    <abbr datatitle="История моих личных бронирований">Мои бронирования</abbr>
                </a>
                <a href="#" className="nav-link text-white">
                    <abbr datatitle="Просмотр, изменение, удаление моих данных">Мои данные</abbr>
                </a>
                <a href="#" className="nav-link text-white">
                    <abbr datatitle="Выйти из системы">Выход</abbr>
                </a>
            </nav>
            <div>
                <MyRealEstateList />
            </div>
        </>
    )
}

export default MyRealEstate