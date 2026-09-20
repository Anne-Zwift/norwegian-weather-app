import styles from './App.module.css';
import CitySelector from './components/CitySelector';
import WeatherDisplay from './components/WeatherDisplay';
import { useState } from 'react';
import { weatherData } from './data/weatherData';



function App() {
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);

  return (
    <main className={styles.app}>
      <h1>Norwegian Weather</h1>
      <CitySelector
        cities={weatherData}
        selectedCityId={selectedCityId}
        onSelect={setSelectedCityId}
      />
      <WeatherDisplay />
    </main>
  );
}

export default App;
