import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import WelcomePage from './pages/WelcomePage';
import { WeatherContext } from './WeatherContext';

const App = () => {
	return (
		<WeatherContext>
			<Router>
				<Routes>
					<Route exact path='/' element={<WelcomePage />} />
					<Route path='/main' element={<MainPage />} />
					<Route path='/city/:city/:countryCode' element={<CityPage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</WeatherContext>
	);
};

export default App;
