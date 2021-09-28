import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getForecastUrl } from './../utils/urls';
import getChartData from '../utils/transform/getChartData';
import getForecastItemList from '../utils/transform/getForecastItemList';
import { getCityCode } from '../utils/utils';

const useCityPage = (
	allChartData,
	allForecastItemList,
	onSetChartData,
	onSetForecastItemList
) => {
	const { city, countryCode } = useParams();

	useEffect(() => {
		const cityCode = getCityCode(city, countryCode);

		const getForecast = async () => {
			const url = getForecastUrl({ city, countryCode });

			try {
				const { data } = await axios.get(url);

				onSetChartData({ [cityCode]: getChartData(data) });

				const forecastItemListAux = getForecastItemList(data);

				onSetForecastItemList({ [cityCode]: forecastItemListAux });
			} catch (error) {
				console.log(error);
			}
		};

		if (
			allForecastItemList &&
			allChartData &&
			!allForecastItemList[cityCode] &&
			!allChartData[cityCode]
		) {
			getForecast();
		}
	}, [
		city,
		countryCode,
		onSetChartData,
		onSetForecastItemList,
		allChartData,
		allForecastItemList,
	]);

	return { city, countryCode };
};

export default useCityPage;
