import * as React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Typography from '@material-ui/core/Typography';
import {
	StyledContainer,
	StyledContent, StyledLabel,
} from '../style/style';
import {useEffect} from 'react';
import {Iquestion} from '../QuestionStepperBlock/QuestionStepperBlock';

interface Iprops {
	nextStep: boolean | undefined | string;
	stepsLength: Iquestion[];
}
export const MaterialStepper: React.FC<Iprops> = ({nextStep, stepsLength}) => {
	const [activeStep, setActiveStep] = React.useState(0);
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	// const handleBack = () => {
	// 	setActiveStep((prevActiveStep) => prevActiveStep - 1);
	// };

	const handleReset = () => {
		setActiveStep(0);
	};

	useEffect(() => {
		if (nextStep !== '') {
			handleNext();
		}
	}, [nextStep]);

	return (

			<StyledContainer>
				<Stepper activeStep={activeStep} orientation="vertical">
					{stepsLength.map((step, index) => (
							<Step key={index}>
								<StyledLabel
								>
									{/*{step.question}*/}
								</StyledLabel>
								<StyledContent>
									<Typography>

									</Typography>
								</StyledContent>
							</Step>
					))}
				</Stepper>
				{activeStep === stepsLength.length && handleReset()
				}
			</StyledContainer>
	);
};