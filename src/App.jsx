import React, { useState, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import WelcomePage from './pages/WelcomePage';

const App = () => {
	const [allWeather, setAllWeather] = useState({});
	const [allChartData, setAllChartData] = useState({});
	const [allForecastItemList, setAllForecastItemList] = useState({});

	const onSetAllWeather = useCallback(
		(weatherCity) => {
			setAllWeather((allWeather) => {
				return { ...allWeather, ...weatherCity };
			});
		},
		[setAllWeather]
	);

	const onSetChartData = useCallback(
		(chartDataCity) => {
			setAllChartData((allChartData) => ({
				...allChartData,
				...chartDataCity,
			}));
		},
		[setAllChartData]
	);

	const onSetForecastItemList = useCallback(
		(forecastItemListCity) => {
			setAllForecastItemList((allForecastItemList) => ({
				...allForecastItemList,
				...forecastItemListCity,
			}));
		},
		[setAllForecastItemList]
	);

	const actions = useMemo(
		() => ({
			onSetAllWeather,
			onSetChartData,
			onSetForecastItemList,
		}),
		[onSetAllWeather, onSetChartData, onSetForecastItemList]
	);

	const data = useMemo(
		() => ({
			allWeather,
			allForecastItemList,
			allChartData,
		}),
		[allWeather, allForecastItemList, allChartData]
	);

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/'>
						<WelcomePage />
					</Route>
					<Route path='/main'>
						<MainPage data={data} actions={actions} />
					</Route>
					<Route path='/city/:city/:countryCode'>
						<CityPage data={data} actions={actions} />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
