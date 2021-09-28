import React from 'react';
import 'typeface-roboto';
import CityInfo from './CityInfo';

export const CityExample = () => (
	<CityInfo city={'Málaga'} country={'España'} />
);

export default {
	title: 'CityInfo',
	component: CityInfo,
};
