import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 50px;
`;

export const TimeWrapper = styled.div`
  display        : flex;
  justify-content: center;
  font-weight    : bold;
  font-size      : 20px;
  align-items    : center;
  text-align     : center;
  flex-direction : column;
  margin-right   : 20px;
	

  & > p {
    margin: 0px;
  }
`;