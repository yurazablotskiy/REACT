import React, { useState } from 'react';
import axios from 'axios';

import Form from './components/Form';
import Weather from './components/Weather';

import sun from './img/sun.svg';

function App() {
  const [cities, setCities] = useState([]);

  const getWeather = (city) => {
    const API = '3e092af62bc80823e1c41868945d32e1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
    if (city === "") return;


    axios.get(url)
      .then(res => {
        setCities(cities => [{
          name: city,
          temp: res.data.main.temp,
          feels: res.data.main.feels_like
        }, ...cities])
      })
      .catch(error => console.log(error))
  }

  const deleteWeather = (city) => {
    const newCities = cities.filter(el => el.name !== city
    )
    setCities(newCities)
  }

  const updateNewCity = (currentCity, updateCity) => {
    if (currentCity === '') return

    // Выполяем такой же запрос на получение погоды, но уже для нового города
    const API = '3d9de74844d28377e81415151cbe6a66'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${updateCity}&appid=${API}&units=metric`

    axios.get(url)
      .then(res => {
        // Перебираем массив со всеми городами
        const newCities = cities.map(el => {
          // Для города который был ранее меняяем содержимое
          // По сути вместо прошлого города будет подставлен новый: название, температура, ощущение
          if (el.name == currentCity)
            return {
              name: updateCity,
              temp: res.data.main.temp,
              feels: res.data.main.feels_like
            }
          else // Все остальные города не трогаем, а просто возвращаем
            return el
        })
        // Полученный массив newCities будет содержать все города и + изменный город
        // Подставляем его в состояние
        setCities(newCities)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="main">
      <img src={sun} className='sun' />
      <Form getWeather={getWeather} />
      <Weather cities={cities} deleteWeather={deleteWeather} updateNewCity={updateNewCity} />
    </div>
  );
}

export default App;

