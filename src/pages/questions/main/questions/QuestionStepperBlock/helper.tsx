import React from 'react';
import {
	Styledh2,
	StyledPmain,
	StyledPSecond,
} from '../style/questionWrapperStyle';
import {Iquestion} from './QuestionStepperBlock';

export const helperStepGenerator = (arr: Iquestion[], step: number) => {
	const {question, description1, description2, id} = arr[step];
	return (
			<React.Fragment key={id}>
				<Styledh2 className={'animate__bounceIn'}> {question} </Styledh2>
				<StyledPmain
						className={'animate__bounceIn'}>{description1} </StyledPmain>
				<StyledPSecond
						className={'animate__bounceIn'}> {description2} </StyledPSecond>
			</React.Fragment>
	);
};

