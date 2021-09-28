import React from 'react';
import 'typeface-roboto';
import Weather from './Weather';

export const WeatherSunny = () => <Weather temperature={10} state='clear' />;
export const WeatherCloud = () => <Weather temperature={10} state='drizzle' />;

export default {
	title: 'Weather',
	component: Weather,
};
