import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import Img from '../assets/img/mainBG.jpg';

export const StyledMainContainer = styled(Grid)
		`
      display: flex;
			flex-direction: column;
			
      justify-content: flex-start;
			overflow-x: hidden;
			overflow-y: hidden;
			flex-wrap: nowrap;
      background-image: url(${Img});
      background-size: cover;
      background-position: bottom 0px right 0px;
      background-repeat: no-repeat;
      width: 100%;
      height: 100vh;
			& > * {
        flex-basis: initial;
			}
			
		`;

export const footerStyle:any = {
	display: 'flex',
	justifyContent: 'center',
	position:'fixed',
	bottom: '0',
	width:'100%',

};