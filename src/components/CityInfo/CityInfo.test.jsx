import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo';

test('CityInfo render', async () => {
	const city = 'Málaga';
	const country = 'España';
	const { findAllByRole } = render(<CityInfo city={city} country={country} />);

	const cityAndCountryComponents = await findAllByRole('heading');

	expect(cityAndCountryComponents[0]).toHaveTextContent(city);
	expect(cityAndCountryComponents[1]).toHaveTextContent(country);
});
