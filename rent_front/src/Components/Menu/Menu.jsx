import React from "react";
import style from "./Menu.module.css"
import LogInSignIn from "./Pages/LogInSignIn";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import MyRealEstate from './Pages/MyRealEstate'
import {Routes, Route, Link} from "react-router-dom";


export default function MyMenu() {
    return (
        <>
        <div className={style.myMenu}>
            <nav>
                <Link to="/">Главная страница</Link>
                <Link to="/LogInSignIn">Войти/Зарегистрироваться</Link>
                <Link to="/MyRealEstate">Страница арендодателя</Link>
                <Link to="/About">О нас</Link>
                {/*<Link to="/Contacts">Контакты</Link>*/}
            </nav>
        </div>
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/LogInSignIn' element={<LogInSignIn />}/>
                <Route path='/MyRealEstate' element={<MyRealEstate />}/>
                <Route path='/about' element={<About />}/>
                {/*<Route path='/contacts' element={<Contacts />}/>*/}

            </Routes>
        </div>
        </>
    )
}