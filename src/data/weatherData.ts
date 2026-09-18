export type WeatherCondition = 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'partly-cloudy';

export interface WeatherData {
  id: string;
  city: string;
  temperature: number; // Celsius
  condition: WeatherCondition; 
  humidity: number; // percentage 0-100
  windSpeed: number; // km/h
  description: string;
  lastUpdated: string; // ISO 8601 timestamp
}

export const weatherData: WeatherData[] = [
  {
    id: '1',
    city: 'Oslo',
    temperature: 12,
    condition: 'cloudy',
    humidity: 79,
    windSpeed: 14,
    description: 'Overcast skies',
    lastUpdated: '2026-09-18T12:00:00Z',
  },
  {
    id: '2',
    city: 'Bergen',
    temperature: 10,
    condition: 'rainy',
    humidity: 85,
    windSpeed: 18,
    description: 'Light rain',
    lastUpdated: '2026-09-18T12:00:00Z',
  },
    {
    id: '3',
    city: 'Trondheim',
    temperature: 8,
    condition: 'partly-cloudy',
    humidity: 75,
    windSpeed: 5,
    description: 'Scattered clouds with sunny intervals.',
    lastUpdated: '2026-09-18T12:00:00Z',
  },
      {
    id: '4',
    city: 'Stavanger',
    temperature: 22,
    condition: 'sunny',
    humidity: 45,
    windSpeed: 4,
    description: 'Clear skies with plenty of sunshine and a gentle breeze.',
    lastUpdated: '2026-09-18T12:00:00Z',
  },
    {
    id: '5',
    city: 'Tromsø',
    temperature: -2,
    condition: 'snowy',
    humidity: 88,
    windSpeed: 7,
    description: 'Overcast skies with continuous light to moderate snowfall.',
    lastUpdated: '2026-09-18T12:00:00Z',
  },
    {
    id: '6',
    city: 'Ålesund',
    temperature: 8,
    condition: 'rainy',
    humidity: 73,
    windSpeed: 5,
    description: 'Light rain.',
    lastUpdated: '2026-09-18T12:00:00Z',
  },
    {
    id: '7',
    city: 'Drammen',
    temperature: 13,
    condition: 'cloudy',
    humidity: 83,
    windSpeed: 7,
    description: 'Mostly cloudy',
    lastUpdated: '2026-09-18T12:00:00Z',
  },
];