import React from 'react';
import { findByText, render } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';
import '@testing-library/jest-dom/extend-expect';

test('WeatherDetails render', async () => {
	const { findByText } = render(<WeatherDetails wind={20} humidity={80} />);
	const wind = await findByText(/20/);
	const humidity = await findByText(/80/);

	expect(wind).toHaveTextContent('Wind: 20 Km/h');
	expect(humidity).toHaveTextContent('Humidity: 80 %');
});
