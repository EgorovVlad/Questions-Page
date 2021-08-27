import styled from 'styled-components';
import {Button, Grid} from '@material-ui/core';
import {styled as styledMaterial} from '@material-ui/system';

export const StyledImgCelo = styled.img`
  width: 400px;
  @media (max-width: 576px) {
    //width: 200px;
    height: 50px;
  }

  @media (max-width: 768px) {
   width: 200px; 
   
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

export const StyledImgIcond = styled.img<Iimg>`
  width: ${(props) => (props.wid ? props.wid : '30px')};
  @media (max-width: 576px) {
    width: ${(props) => (props.widSm ? props.widSm : '20px')};
  }
  @media(max-width: 768px){
    width: 40px;
  }
	
`;

export const StyledButton = styledMaterial(Button)({
	color: 'grey',
	border: '1px solid white',
	':hover': {
		border: '1px solid grey',
		color: 'white',
	},
});
