import React from 'react';
import './App.css';
import {Header} from './pages/header/Header';
import {Grid} from '@material-ui/core';
import {Questions} from './pages/questions/main/questions/Questions';
import {BottomTimer} from './pages/questions/footer/BottomTimer/BottomTimer';
import {StyledMainContainer} from './style';

export const footerStyle = {

};

function App() {
	return (
			<StyledMainContainer container>


				<Grid item xs={12} md={12}>
					<Header/>
				</Grid>


				<Grid item xs={12} md={12}>
					<Questions/>
				</Grid>


				<Grid item sx={{	display: 'flex',
					justifyContent: 'center',
					position:'fixed',
					bottom: '0',
					width:'100%',
				}} xs={12}>
					<BottomTimer/>
				</Grid>


			</StyledMainContainer>
	);
}

export default App;
