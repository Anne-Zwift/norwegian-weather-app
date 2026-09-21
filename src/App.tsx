import { useState } from 'react';
import styles from './App.module.css';
import CitySelector from './components/CitySelector';
import WeatherDisplay from './components/WeatherDisplay';
import { weatherData } from './data/weatherData';

function App() {
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const selectedCity = weatherData.find((city) => city.id === selectedCityId);


  return (
    <main className={styles.app}>
      <h1>Norwegian Weather</h1>
      <CitySelector
        cities={weatherData}
        selectedCityId={selectedCityId}
        onSelect={setSelectedCityId}
      />
      {selectedCity ? (
      <WeatherDisplay 
      weather={selectedCity}
       />
      ) : (
        <p>Select a City to see its weather</p>
      )}
    </main>
  );
}

export default App;
