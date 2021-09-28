import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';

const WelcomePage = (props) => {
	return (
		<div>
			<WelcomeScreen>
				<Grid
					container
					direction='column'
					justifyContent='center'
					className='full'
				>
					<div className='highlight'>
						<Grid
							container
							item
							xs={12}
							justifyContent='center'
							alignItems='center'
						>
							<Grid item>
								<IconContext.Provider value={{ size: '6em' }}>
									<WiDaySunny />
								</IconContext.Provider>
							</Grid>
							<Grid
								item
								container
								direction='column'
								justifyContent='center'
								alignItems='center'
							>
								<Typography variant='h4' color='inherit'>
									Weather App
								</Typography>
								<Link
									color='inherit'
									aria-label='menu'
									component={RouterLink}
									to='./main'
								>
									Enter
								</Link>
							</Grid>
						</Grid>
					</div>
				</Grid>
			</WelcomeScreen>
		</div>
	);
};

export default WelcomePage;
