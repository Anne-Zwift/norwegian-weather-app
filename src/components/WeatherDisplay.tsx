import styles from './WeatherDisplay.module.css';
import WeatherCard from "./WeatherCard";
import type { WeatherData } from '../data/weatherData';


interface WeatherDisplayProps {
  weather: WeatherData;
}


function WeatherDisplay({ weather }: WeatherDisplayProps) {

  return (
    <div className={styles.display}>
      <h2>{weather.city}</h2>
      <WeatherCard weather={weather} />
    </div>
  );
}

export default WeatherDisplay;