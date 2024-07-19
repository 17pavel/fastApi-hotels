import React, {useEffect, useState} from "react";
import style from './MyRealEstateDetails.module.css'
import api from './../Api/api'

const MyRealEstateDetails = (idApart) => {
    const [apartDetail, setApartDetail] = useState()

    useEffect( () => {

    })

    const getApart = () => {
        api
            .get(`api/apartmentsList/${idApart}`)
        .then((res) => res.data)
            .then((data) => {
                setApartDetail(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>

        </>
    )
}

export default MyRealEstateDetails