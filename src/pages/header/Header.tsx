import {Grid} from '@material-ui/core';
import celloImg from '../../assets/img/cello.png';
import userIcond from '../../assets/img/userIcon.svg';
import questLogo from '../../assets/img/questLogo.png';

import {
	StyledButton,
	StyledGrid,
	StyledGridContainer, StyledImgCelo,
	StyledImgIcondUser, StyledImgLogo,
} from './style';

export const Header = () => {

	return (
			<StyledGridContainer container>

				<StyledGrid item xs={4} sm={8}>
					<StyledImgCelo src={celloImg} alt=""/>
				</StyledGrid>


				<Grid item style={{
					display:'flex',
					justifyContent:'flex-end'
				}} xs={8} sm={4}>

					<div>
						<StyledImgIcondUser src={userIcond} alt=""/>
					</div>
					<div>
						<StyledButton variant="outlined">
							login
						</StyledButton>
					</div>
					<div>
						<StyledImgLogo  src={questLogo}/>
					</div>

				</Grid>


			</StyledGridContainer>
	);
};
