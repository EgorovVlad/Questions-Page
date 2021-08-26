import {Grid} from '@material-ui/core';
import celloImg from '../../asserts/img/cello.png';
import userIcond from '../../asserts/img/userIcon.svg';
import questLogo from '../../asserts/img/questLogo.png';

import {
	StyledButton,
	StyledGrid,
	StyledGridContainer, StyledImgCelo,
	StyledImgIcond,
} from './style';

export const Header = () => {

	return (
			<StyledGridContainer container>
				<StyledGrid item xs={8} md={8}>
					<StyledImgCelo src={celloImg} alt=""/>
				</StyledGrid>

				<Grid item xs={4} md={4}>
					<div>
						<StyledImgIcond src={userIcond} alt=""/>
					</div>
					<div>
						<StyledButton variant="outlined">
							login
						</StyledButton>
					</div>
					<div>
						<StyledImgIcond wid={'100px'} src={questLogo}/>
					</div>
				</Grid>


			</StyledGridContainer>
	);
};
