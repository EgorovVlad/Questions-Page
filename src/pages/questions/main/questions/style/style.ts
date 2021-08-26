import styled from 'styled-components';
import {
	Box,
	Button,
	StepContent,
	StepLabel,
	Typography,
} from '@material-ui/core';

export const StyledContainer = styled(Box)
		`
      display: flex;
      width: 100%;
      height: 80%;
      color: white;
      justify-content: center;
      align-items: center;
			
      .Mui-completed{
			
        color: green !important;
      }
			.Mui-active {
        content: ''!important;
				color: yellow !important;
			}

      text {
				display: none;
			}
  
		`;

export const StyledTyp = styled(Typography)
		`
      display: flex;
      left: 30%;
      position: absolute;
      width: 500px;
		`;

export const StyledContent = styled(StepContent)`

`;

export const StyledSubmit = styled(Button)
		`
		`;

export const StyledLabel = styled(StepLabel)`
	
`