import styles from './WeatherIcon.module.css';
import type { WeatherCondition } from "../data/weatherData";

interface WeatherIconProps {
  condition: WeatherCondition;
}

const ICONS: Record<WeatherCondition, string> = {
  sunny: '☀️',
  cloudy: '☁️',
  rainy: '🌧️',
  snowy: '❄️',
  'partly-cloudy': '⛅',
};

function WeatherIcon({ condition }: WeatherIconProps) {
  console.log('WeatherIcon received', condition);
  return <span className={styles.icon}>{ICONS[condition]}</span>;
}


export default WeatherIcon;