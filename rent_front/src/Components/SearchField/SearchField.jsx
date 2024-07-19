import React, {useEffect, useState} from "react";
import style from './SearchField.module.css'


const SearchField = () => {
    const [userCity, setUserCity] = useState()
    const [dateArrive, setDateArrive] = useState()
    const [dateDeparture, setDateDeparture] = useState()
    const [mens, setMens] = useState()

    useEffect(() => {
        // console.log('Сработало именно после нажатия мыши')

        /*fetch('https://sutochno.ru/api/json/search/shortObjectsOffers?ids=%D0%9C%D0%B8%D0%BD%D0%BA%D1%81&dateBegin=2023-07-02&dateEnd=2023-07-02&guests=1')
            .then(res => {
                if (!res.success) {
                    throw Error ('000')
                }
                return res.json()
            })
            .then((data) => {
                console.log(data)
                console.log(data.offers)
                console.log(data.offers[0].id)
                console.log(data.offers[0].name)
                console.log(data.offers[0].description)
                console.log(data.offers[0].price)
                console.log(data.offers[0].images[0].url)
                console.log(data.offers[0].images[1].url)
                console.log(data.offers[0].images[2].url)
                console.log(data.offers[0].images[3].url)
                console.log(data.offers[0].images[4].url)
                console.log(data.offers[0].images[5].url)
                console.log(data.offers[0].images[6].url)
            })*/
    })
    return (
            <div className={style.back}>
                <form>
                    <label>Выберите город поездки: </label>
                    <input type='' onChange={e => {
                        setUserCity({userCity: e.target.value})
                    }}/>
                    {/*<input*/}
                    {/*    name="userCity"*/}
                    {/*    type="text"*/}
                    {/*    placeholder="Куда едем"*/}
                    {/*    onChange={e => {*/}
                    {/*        setUserCity({userCity: e.target.value})*/}
                    {/*        }*/}
                    {/*    }*/}
                    {/*/>*/}
                    <br/>
                    <label>Выберите дату заезда: </label>
                    <input type="date" onInput={e => {
                        setDateArrive({dateArrive: e.target.value})
                    }}/>



                    <br/>
                    <label>Выберите дату выезда: </label>
                    <input type="date" onInput={e => setDateDeparture({dateDeparture: e.target.value})}/>
                    <br/>
                    <label>Укажите количество гостей: </label>
                    <input type="text" size="3" onChange={e => setMens({mens: e.target.value})}/>

                    <br/>

                    <button onClick={e => {
                        console.log(userCity)
                        console.log(dateArrive)
                        console.log(dateDeparture)
                        console.log(mens)
                        e.preventDefault()
                        }
                    }>Подобрать варианты</button>
                </form>
            </div>
        )
}

/*Создаем запрос на получение данных - зависит от api*/
const MakeRequest = ({userCity, dateArrive, dateDeparture, mens}) => {
    console.log(userCity)
    console.log(dateArrive)
    console.log(dateDeparture)
    console.log(mens)

/*    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch('http://localhost:8080/api/v1/flights')
                const json = await response.json()
                setData(json)
            } catch (e) {
                setError(e)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    if (loading) {
        return <p>Загрузка...</p>
    }

    if (error) {
        return <p>Ошибка: {error.message}</p>
    }

    if (!data) {
        return null
    }*/
}
export default SearchField