import styled from "styled-components";
export const StyledWrapper = styled.footer`
  display: flex;
	padding: 20px;
	width: 80%;
  border-top: 2px solid gainsboro;
  color: white;
`;

export const StyledTimerWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledPar = styled.p `
font-weight: bold;
	
& > span{
	color: green;
}
`
