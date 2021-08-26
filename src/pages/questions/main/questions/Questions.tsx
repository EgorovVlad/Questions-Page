import {Grid} from '@material-ui/core';
import React from 'react';
import {QuestionStepperBlock} from './QuestionStepperBlock/QuestionStepperBlock';



export const Questions:React.FC = () => {
	return (
			<Grid sx={{display:'flex'}} container>
					<QuestionStepperBlock/>
			</Grid>
	);
};