import styles from './CitySelector.module.css';
import type { WeatherData } from '../data/weatherData';

interface CitySelectorProps {
  cities: WeatherData[];
  selectedCityId: string | null;
  onSelect: (id: string) => void;
}

function CitySelector({ cities, selectedCityId, onSelect }: CitySelectorProps) {
  return (
    <section>
      <h2>City Selector Component</h2>
      <ul className={styles.cityList}>{cities.map((city) => (
        <li key={city.id}> 
          <button type='button' onClick={() => onSelect(city.id)} className={city.id === selectedCityId ? styles.selected : undefined}>
            {city.city}
          </button>
        </li>
      ))}
      </ul>
    </section>
  );
}

export default CitySelector;