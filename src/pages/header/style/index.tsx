import styled from 'styled-components';
import {Button, Grid} from '@material-ui/core';
import {styled as styledMaterial} from '@material-ui/system';

export const StyledImgCelo = styled.img`
  //width: 400px;
  width: 30%;
	//height: 50%;
	max-height: 70%;
	align-self: center;
  @media (max-width: 576px) {
    width: 130%;
    max-height: 70%;
  }
  @media (min-width: 1200px) {
    max-height: 100%;
  }
	
`;

export const StyledGridContainer = styled(Grid)`
  display: flex;
  color: white;

  & > :last-child {
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
      margin: 0 20px;
    }

    @media (max-width: 576px) {
      justify-content: flex-end;
      & > * {
        margin: 0 5px;
      }
    }

  }

`;

export const StyledGrid = styled(Grid)`
  display: flex;
  //justify-content: flex-end;
  @media (max-width: 576px) {
    //& > img {
    //  width: 200px;
    //}
  }

`;

interface Iimg {
	readonly wid?: string;
	readonly widSm?: string;
}

export const StyledImgIcondUser = styled.img<Iimg>`
  //width: ${(props) => (props.wid ? props.wid : '30px')};
	width: 30px;
  @media (max-width: 766px) {
    width: ${(props) => (props.widSm ? props.widSm : '20px')};
  }
  // @media (min-width: 320px) {
  //   //font-size: 1.2rem;
  // }
	//
  @media (min-width: 768px) {
		width: 40px;
    //width: ${(props) => (props.wid ? props.wid : '40px')};
  }
  @media (min-width: 1200px) {
		width: 35px;
    //width: ${(props) => (props.wid ? props.wid : '40px')};
  }
  @media (min-width: 1800px) {
    width: 65px;
      //width: ${(props) => (props.wid ? props.wid : '40px')};
  }
`;
export const StyledImgLogo = styled.img `
 width: 150px;

  @media (max-width: 768px) {
    width: 50px;
  }
	
  @media (min-width: 769px) {
    width: 80px;
  }
  @media (min-width: 1200px) {
    width: 120px;
  }

  @media (min-width: 1800px) {
    width: 180px;
  }
	
	
`


export const StyledWrapperSecondBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const StyledButton = styledMaterial(Button)({
	color: 'grey',
	border: '1px solid white',
	':hover': {
		border: '1px solid grey',
		color: 'white',
	},

});
