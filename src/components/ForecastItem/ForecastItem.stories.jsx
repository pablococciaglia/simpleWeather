import React from 'react';
import 'typeface-roboto';
import ForecastItem from './ForecastItem';

export const ForecastItemExample = () => (
	<ForecastItem hour={10} temperature={23} weekDay={'lunes'} state={'clouds'} />
);

export default {
	title: 'ForecastItem',
	component: ForecastItem,
};
