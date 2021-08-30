import {Grid} from '@material-ui/core';
import celloImg from '../../assets/img/cello.png';
import userIcond from '../../assets/img/userIcon.svg';
import questLogo from '../../assets/img/questLogo.png';

import {
	StyledButton,
	StyledGrid,
	StyledGridContainer, StyledImgCelo,
	StyledImgIcond,
} from './style';

export const Header = () => {

	return (
			<StyledGridContainer container>

				<StyledGrid item xs={4} md={8}>
					<StyledImgCelo src={celloImg} alt=""/>
				</StyledGrid>


				<Grid item xs={8} md={4}>
					<div>
						<StyledImgIcond src={userIcond} alt=""/>
					</div>
					<div>
						<StyledButton variant="outlined">
							login
						</StyledButton>
					</div>
					<div>
						<StyledImgIcond widSm={'45px'} wid={'100px'} src={questLogo}/>
					</div>
				</Grid>


			</StyledGridContainer>
	);
};
