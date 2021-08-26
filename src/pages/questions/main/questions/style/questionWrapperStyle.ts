import styled from 'styled-components';
import {Button} from '@material-ui/core';

export const StyledMainWrapper = styled.div`
  display        : flex;
  width          : 450px;
	position: absolute;
	top: 150px;
	height: 500px;
  justify-content: center;
	align-items: center;

`;

export const StyledWrapper = styled.div`
  display        : flex;
	margin-top: 50px;
	margin-left: 200px;
  justify-content: center;
	width: 100%;
  align-items    : center;
  flex-direction : column;
  color          : #fff;
`;

export const Styledh2 = styled.h2`
  font-family: Garamond,serif;
  display        : flex;
  justify-content: center;
  color          : orange;
  margin         : 0 0 10px 0;
  font-size      : 60px;
`;
export const StyledPmain = styled.p`
  font-family: Garamond   , serif;
  margin     : 0 0 10px 0;
  text-align : center;
  font-size  : 45px;
`;
export const StyledPSecond = styled.p`
  font-family: Garamond    , serif;
  font-size  : 25px;
  margin     : 20px 0 0 0 ;
  text-align : center;
  color      : gainsboro;
`;

export const StyledForm = styled.form`
  display        : flex;
  flex-direction : column;
  align-items    : center;
	margin          : 0 0 50px 0;
  justify-content: center;

`;
export const StyledInput = styled.input`
  background-color: inherit;
  border          : 0;
  color           : inherit;
  font-size       : 45px;
  border-bottom   : 2px solid gainsboro;
  width           : 100vh;
  outline         : none;
  margin          : 10px 0 50px 0 ;

	&::placeholder{
    font-family: Garamond    , serif;
		color     : darkgrey;
		font-size : 35px;
		text-align: center;
	}
  &:focus {
    border-bottom: 2px solid gainsboro;
  }
`;

export const StyledSubmitButton = styled(Button)`
  width     : 20%;
  height    : 50px;
	font-weight: bold !important;


`;

export const styleQuestionBlock = {
	display       : 'flex',
	justifyContent: 'center',


}
