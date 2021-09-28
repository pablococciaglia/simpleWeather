import React from 'react';
import 'typeface-roboto';
import WeatherDetails from './WeatherDetails';

export const WeatherDetailsExample = () => (
	<WeatherDetails humidity={80} wind={20} />
);

export default {
	title: 'WeatherDetails',
	component: WeatherDetails,
};
