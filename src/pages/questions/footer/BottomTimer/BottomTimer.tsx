import {StyledPar, StyledTimerWrapper, StyledWrapper} from './styled';
import React from 'react';
import {Timer} from './sections/Timer/Timer';

export const BottomTimer: React.FC = () => {

	return (

			<StyledWrapper>
				<StyledTimerWrapper>
					<Timer/>
				</StyledTimerWrapper>
				<StyledPar> made with <span>hype</span></StyledPar>
			</StyledWrapper>
	);
};