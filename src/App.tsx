import React from 'react';
import './App.css';
import {Header} from './pages/header/Header';
import {Grid} from '@material-ui/core';
import {Questions} from './pages/questions/main/questions/Questions';
import {BottomTimer} from './pages/questions/footer/BottomTimer/BottomTimer';
import {footerStyle, StyledMainContainer} from './style';



function App() {
	return (
			<StyledMainContainer container>


				<Grid item xs={12} md={12}>
					<Header/>
				</Grid>


				<Grid item xs={12} md={12}>
					<Questions/>
				</Grid>


				<Grid item sx={footerStyle} xs={12}>
					<BottomTimer/>
				</Grid>


			</StyledMainContainer>
	);
}

export default App;
