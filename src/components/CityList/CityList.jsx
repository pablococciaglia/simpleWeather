import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import useCityList from './../../hooks/useCityList';
import { getCityCode } from './../../utils/utils';
import CityListItem from '../CityListItem';
import {
	useWeatherDispatchContext,
	useWeatherStateContext,
} from '../../WeatherContext';

const renderCityAndCountry = (eventOnClickCity) => (
	cityAndCountry,
	weather
) => {
	const { city, countryCode } = cityAndCountry;
	return (
		<CityListItem
			key={getCityCode(city, countryCode)}
			eventOnClickCity={eventOnClickCity}
			weather={weather}
			{...cityAndCountry}
		/>
	);
};

const CityList = ({ cities, onClickCity }) => {
	const actions = useWeatherDispatchContext();
	const data = useWeatherStateContext();
	const { allWeather } = data;
	const { error, setError } = useCityList(cities, allWeather, actions);

	return (
		<div>
			{error && (
				<Alert onClose={() => setError(null)} severity='error'>
					{error}
				</Alert>
			)}
			<List>
				{cities.map((cityAndCountry) =>
					renderCityAndCountry(onClickCity)(
						cityAndCountry,
						allWeather[
							getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
						]
					)
				)}
			</List>
		</div>
	);
};

CityList.propTypes = {
	cities: PropTypes.arrayOf(
		PropTypes.shape({
			city: PropTypes.string.isRequired,
			country: PropTypes.string.isRequired,
			countryCode: PropTypes.string.isRequired,
		})
	).isRequired,
	onClickCity: PropTypes.func.isRequired,
};

export default memo(CityList);
