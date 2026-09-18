import styles from './App.module.css';
import CitySelector from './components/CitySelector';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <main className={styles.app}>
      <h1>Norwegian Weather</h1>
      <CitySelector />
      <WeatherDisplay />
    </main>
  );
}

export default App;
