import React from 'react';
import { useHistory } from 'react-router-dom';
import CityList from '../components/CityList';
import AppFrame from '../components/AppFrame/AppFrame';
import { Paper } from '@material-ui/core';
import { getCities } from '../utils/serviceCities';

const MainPage = ({ actions, data }) => {
	const history = useHistory();

	const handlerOnClick = (city, countryCode) => {
		history.push(`./city/${city}/${countryCode}`);
	};

	return (
		<AppFrame>
			<Paper elevation={3}>
				<CityList
					data={data}
					actions={actions}
					cities={getCities()}
					onClickCity={handlerOnClick}
				/>
			</Paper>
		</AppFrame>
	);
};

export default MainPage;
