import { useState } from "react";

function Edit(props) {
  const [city, setCity] = useState('');

  const addNewCity = (value) => {
    if (value != '') {
      setCity(value)
    }
  }

  const changeCity = () => {
    props.updateNewCity(props.currentCity, city)
  }

  return (<form className='city-form'>
    <input onChange={e => addNewCity(e.target.value.trim())} placeholder='Новый город' />
    <button onClick={changeCity} type='button'>Обновить</button>
  </form>);
}

export default Edit;