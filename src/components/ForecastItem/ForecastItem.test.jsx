import React from 'react';
import { render } from '@testing-library/react';
import ForecastItem from './ForecastItem';
import '@testing-library/jest-dom/extend-expect';

test('ForecastItem render', async () => {
	const { findByRole } = render(
		<ForecastItem hour={10} temperature={23} weekDay={'lunes'} state={'rain'} />
	);
});
