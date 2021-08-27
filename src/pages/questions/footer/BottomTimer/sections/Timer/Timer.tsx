import React, {useEffect, useState} from 'react';
import {StyledWrapper, TimeWrapper} from './style';

function countdown(duration: number) {
	return new Promise<any>(function(resolve, reject) {
		// wait for duration and resolve
		let id: any = setTimeout(function() {
			return resolve(id);
		}, duration);
	});
}

export const Timer: React.FC = () => {
	const [min, setMin] = useState(12);
	const [sec, setSec] = useState(5);

	useEffect(() => {
		const timerSetter = (id: number) => {
			if (min === 0) {
				setMin(12);
				setSec(59);
				return id;
			} else if (sec === 0) {
				setSec(60);
				setMin(min - 1);
				return id;
			}
			setSec(sec - 1);
			return id;
		};
		const id: any = countdown(1000).then(timerSetter);
		return () => {
			clearInterval(id);
		};
	}, [min, sec]);

	return (
			<StyledWrapper>
				<TimeWrapper>
					<div>{min}</div>
					<p>mins</p>
				</TimeWrapper>

				<TimeWrapper>
					<div>{sec < 10 ? `0${sec}` : sec}</div>
					<p>secs</p>
				</TimeWrapper>
			</StyledWrapper>
	);
};