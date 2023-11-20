import { useState } from 'react';
import Edit from './Edit';

import sun from '../img/only-sun.svg';
import clouds from '../img/clouds.svg';

function City(props) {
  const [isEdit, setIsEdit] = useState(false);

  const changeEdit = () => {
    setIsEdit(isEdit => !isEdit)
  }

  return (<div className="city">
    <h3>{props.city.name}</h3>
    <p>Температура {props.city.temp}</p>
    <p>Ощущается {props.city.feels}</p>
    {props.city.temp >= 10 && <img src={sun} />}
    {props.city.temp < 10 && <img src={clouds} />}
    <button onClick={() => props.deleteWeather(props.city.name)}>Удалить</button>
    <button onClick={changeEdit}>Редактировать</button>
    {isEdit && <Edit updateNewCity={props.updateNewCity} currentCity={props.city.name}/>}
  </div>);
}

export default City;