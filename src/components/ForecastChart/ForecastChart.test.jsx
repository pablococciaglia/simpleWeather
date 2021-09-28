import React from 'react';
import ForecastChart from './ForecastChart';
import { render } from '@testing-library/react';

const data = [
	{
		'dayHour': 'Jue 18',
		'min': 14,
		'max': 22,
	},
	{
		'dayHour': 'Vie 06',
		'min': 18,
		'max': 27,
	},
	{
		'dayHour': 'Vie 12',
		'min': 18,
		'max': 28,
	},
	{
		'dayHour': 'Vie 18',
		'min': 18,
		'max': 25,
	},
	{
		'dayHour': 'Sab 06',
		'min': 15,
		'max': 22,
	},
	{
		'dayHour': 'Sab 12',
		'min': 12,
		'max': 19,
	},
];

test('ForecastChart render', async () => {
	const { findAllByTestId } = render(<ForecastChart data={data} />);
});
