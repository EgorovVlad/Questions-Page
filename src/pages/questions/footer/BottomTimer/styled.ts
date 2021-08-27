import styled from 'styled-components';

export const StyledWrapper = styled.footer`
  display: flex;
  padding: 20px;
  width: 80%;
  border-top: 2px solid gainsboro;
  overflow: hidden;
  color: white;
  @media (max-width: 1000px) {
    padding: 0px;
  }
`;

export const StyledTimerWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledPar = styled.p`
  font-weight: bold;
  & > span {
    color: green;
  }

  @media (max-width: 325px) {
    font-size: 0.8rem;
  }
	
`;
