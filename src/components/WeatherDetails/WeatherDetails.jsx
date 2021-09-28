import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const WeatherDetails = ({ humidity, wind }) => {
	return (
		<>
			<Typography>Humidity: {humidity} % </Typography>
			<Typography>Wind: {wind} Km/h </Typography>
		</>
	);
};

WeatherDetails.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
