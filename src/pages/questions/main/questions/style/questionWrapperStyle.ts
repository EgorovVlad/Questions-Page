import styled from 'styled-components';
import {Button} from '@material-ui/core';

export const StyledMainWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;

  
  @media (max-width: 570px) {
    //width: 85%;
    height: auto;
  }
	
	
  @media (min-width: 1400px) {
    top: 140px;
  }

  @media (min-width: 1600px) {
    top: 170px;
  }
	
`;

export const StyledWrapper = styled.div`
  display: flex;
  //margin-top: 50px;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;
  color: #fff;

 
  @media (min-width: 600px) and (max-width: 1000px) {

  }


`;

export const Styledh2 = styled.h2`
  font-family: Garamond, serif;
  display: flex;
  justify-content: center;
  color: orange;
  margin: 0 0 10px 0;
  font-size: 3.5rem;
	
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
	
  @media (max-width: 570px) {
    font-size: 2rem;
  }
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }

`;
export const StyledPmain = styled.p`
  font-family: Garamond, serif;
  margin: 0 0 10px 0;
  text-align: center;
  font-size: 2rem;

  @media (min-width: 320px) {
    font-size: 1.2rem;
  }
  @media (min-width: 375px) {
    font-size: 1.6rem;
  }
	
  @media (min-width: 570px) {
    font-size: 1.7rem;
  }
  //@media (max-width: 375px) {
  //  font-size: 1.3rem;
  //}

  //@media (max-width: 768px) {
  //  font-size: 1.4rem;
  //}

  @media (min-width: 1400px) {
    font-size: 2rem;
  }
  @media (min-width: 1600px) {

    font-size: 3rem;
  }

`;

export const StyledPSecond = styled.p`
  font-family: Garamond, serif;
  font-size: 25px;
  margin: 20px 0 0 0;
  text-align: center;
  color: gainsboro;
	
  @media (min-width: 320px) {
    font-size: 1rem;
  }

  @media (min-width: 375px) {
    font-size: 1.3rem;
  }
	
  @media (min-width: 570px) {
    font-size: 2rem;
  }
 

  //@media (max-width: 768px) {
  //  font-size: 1.3rem;
  //}
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 50px 0;
  justify-content: center;

  @media (max-width: 570px) {
    margin: 20px 0 20px 0;
  }
  @media (max-width: 375px) {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin: 0;

  }

`;
export const StyledInput = styled.input`
  background-color: inherit;
  border: 0;
  color: inherit;
  font-size: 45px;
  border-bottom: 2px solid gainsboro;
  //width           : 100vh;
  outline: none;
  margin: 10px 0 50px 0;

  &::placeholder {
    font-family: Garamond, serif;
    color: darkgrey;
    font-size: 35px;
    text-align: center;
  }

  &:focus {
    border-bottom: 2px solid gainsboro;
  }

  @media (max-width: 570px) {
    font-size: 30px;
    width: 100%;
    margin: 10px 0 20px 0 ;
    &::placeholder {
      font-family: Garamond, serif;
      color: darkgrey;
      font-size: 25px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
    margin: 10px 0 10px 0 ;
    &::placeholder {
      font-family: Garamond, serif;
      color: darkgrey;
      font-size: 20px;
      text-align: center;
    }

  }
`;

export const StyledSubmitButton = styled(Button)`
  width: 30%;
  height: 50px;
  font-weight: bold !important;
  @media (max-width: 570px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

`;

export const styleQuestionBlock = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};
