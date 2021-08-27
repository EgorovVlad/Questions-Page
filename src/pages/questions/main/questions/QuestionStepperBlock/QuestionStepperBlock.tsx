import Grid from '@material-ui/core/Grid';
import React, {useState} from 'react';
import {
	StyledForm,
	StyledInput,
	StyledMainWrapper,
	StyledSubmitButton,
	StyledWrapper, styleQuestionBlock,
} from '../style/questionWrapperStyle';
import {MaterialStepper} from '../Stepper/Stepper';
import { helperStepGenerator } from './helper';

export interface Iquestion {
	question: string;
	description1: string;
	description2: string;
	id: string;
}

export const steps: Iquestion[] = [
	{
		question: 'Q.',
		id: '1',
		description1: 'How we will a decentralized aptent taciti sociosqu?',
		description2: 'Duis hendrerit nisi ut purus semper , sit amet sodales ipsum tincidunt',
	},
	{
		question: 'Second question',
		id: '2',
		description1: 'How we will a decentralized aptent taciti sociosqu?',
		description2: 'Duis hendrerit nisi ut purus semper , sit amet sodales ipsum tincidunt',
	},
	{
		question: 'third question',
		id: '3',
		description1: 'How we will a decentralized aptent taciti sociosqu?',
		description2: 'Duis hendrerit nisi ut purus semper , sit amet sodales ipsum tincidunt',
	},
	{
		question: 'fourth question',
		id: '4',
		description1: 'How we will a decentralized aptent taciti sociosqu?',
		description2: 'Duis hendrerit nisi ut purus semper , sit amet sodales ipsum tincidunt',
	},
	{
		question: 'fifth question',
		id: '5',
		description1: 'How we will a decentralized aptent taciti sociosqu?',
		description2: 'Duis hendrerit nisi ut purus semper , sit amet sodales ipsum tincidunt',
	},

];



export const QuestionStepperBlock: React.FC = () => {
	const [toggle, setToggle] = useState<string | boolean>('');
	const [questionStep, setQuestionStep] = useState(0);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
	};
	const handleToggle = (e: React.MouseEvent) => {
		e.preventDefault();
		const nextStepPage = questionStep >= steps.length - 1 ? 0 : questionStep + 1;
		if (toggle !== '') {
			setQuestionStep(nextStepPage);
			return setToggle(!toggle);
		}
		setQuestionStep(nextStepPage);
		return setToggle(true);
	};
	return (
			<>
				<Grid item sx={styleQuestionBlock} xs={12} md={12}>

					<StyledMainWrapper>
						<StyledWrapper>
							{
								helperStepGenerator(steps, questionStep)
							}
							<StyledForm onSubmit={submitHandler}>
								<StyledInput placeholder={'Type you answer here'}/>
								<StyledSubmitButton variant="contained"
																		color="success"
																		onClick={handleToggle}
								>Submit</StyledSubmitButton>
							</StyledForm>
						</StyledWrapper>
					</StyledMainWrapper>




					<MaterialStepper stepsLength={steps} nextStep={toggle}/>
				</Grid>
			</>
	)
			;
};