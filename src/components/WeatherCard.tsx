import styles from './WeatherCard.module.css';
import WeatherIcon from "./WeatherIcon";
import type { WeatherData } from '../data/weatherData';

interface WeatherCardProps {
  weather: WeatherData;
}

function WeatherCard({ weather }: WeatherCardProps) {

  return (
    <article className={styles.card}>
      <WeatherIcon condition={weather.condition} />
      <p>Temperature: {weather.temperature}℃</p>
      <p>Weather Condition: {weather.condition}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed}km/h</p>
      <p>Description: {weather.description}</p>
      <p>Last Updated: {new Date(weather.lastUpdated).toLocaleDateString(`nb-NO`)}</p>    
    </article>
  );
}

export default WeatherCard;