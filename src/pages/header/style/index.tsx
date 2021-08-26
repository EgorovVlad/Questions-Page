import styled from 'styled-components';
import {Button, Grid} from '@material-ui/core';
import { styled as styledMaterial } from '@material-ui/system';

export const StyledImgCelo = styled.img`
	width: 400px;
	@media (max-width: 375px){
		width: 200px;
		height: 50px;
	}
`

export const StyledGridContainer = styled(Grid)`
  display: flex;
  color: white;

	//height: 100px;
	
  & > :last-child {
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
      margin: 0 20px;
    }
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
`;

interface Iimg {
	readonly wid?:string
}

export const StyledImgIcond = styled.img<Iimg>`
	width: ${(props) => (props.wid ? props.wid : '30px')};
`;

export const StyledButton = styledMaterial(Button)({
	color: 'grey',
	border: '1px solid white',
  ':hover': {
		border: '1px solid grey',
		color:'white',
	},
})
