import City from './City';

function Weather(props) {
  const data = props.cities.length == 0 ? (<p>
    Пока еще нет городов
  </p>) : (<>{
    props.cities.map(el => (
      <City key={el.name} city={el} deleteWeather={props.deleteWeather} updateNewCity={props.updateNewCity}/>
    ))
  }</>)

  return (<div>
    <h2>Все города</h2>
    {data}
  </div>);
}

export default Weather;