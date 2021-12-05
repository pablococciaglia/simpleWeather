import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import CityInfo from './../CityInfo';
import { getCityCode } from './../../utils/utils';
import Weather from './../Weather';

const CityListItem = memo(
	({ city, countryCode, country, weather, eventOnClickCity }) => {
		return (
			<ListItem
				button
				key={getCityCode(city, countryCode)}
				onClick={() => eventOnClickCity(city, countryCode)}
			>
				<Grid container justifyContent='center' alignItems='center'>
					<Grid item md={9} xs={12}>
						<CityInfo city={city} country={country} />
					</Grid>
					<Grid item md={3} xs={12}>
						<Weather
							temperature={weather && weather.temperature}
							state={weather && weather.state}
						/>
					</Grid>
				</Grid>
			</ListItem>
		);
	}
);

CityListItem.propTypes = {
	city: PropTypes.string,
	countryCode: PropTypes.string,
	country: PropTypes.string,
	weather: PropTypes.object,
	eventOnClickCity: PropTypes.func,
};

export default CityListItem;
