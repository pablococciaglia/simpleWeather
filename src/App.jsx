import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import WelcomePage from './pages/WelcomePage';
import { WeatherContext } from './WeatherContext';

const App = () => {
	return (
		<WeatherContext>
			<Router>
				<div>
					<Switch>
						<Route exact path='/'>
							<WelcomePage />
						</Route>
						<Route path='/main'>
							<MainPage />
						</Route>
						<Route path='/city/:city/:countryCode'>
							<CityPage />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</div>
			</Router>
		</WeatherContext>
	);
};

export default App;
