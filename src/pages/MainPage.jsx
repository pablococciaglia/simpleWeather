import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CityList from '../components/CityList';
import AppFrame from '../components/AppFrame/AppFrame';
import { Paper } from '@material-ui/core';
import { getCities } from '../utils/serviceCities';

const MainPage = () => {
	const navigate = useNavigate();

	const handlerOnClick = useCallback(
		(city, countryCode) => {
			navigate(`../city/${city}/${countryCode}`);
		},
		[navigate]
	);

	return (
		<AppFrame>
			<Paper elevation={3}>
				<CityList cities={getCities()} onClickCity={handlerOnClick} />
			</Paper>
		</AppFrame>
	);
};

export default MainPage;
