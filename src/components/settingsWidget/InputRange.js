import React from 'react';

const InputRange = ({
	label,
	inputName,
	onInput,
	value,
	rangeMin,
	rangeMax,
	step,
	qtyCode
}) => {
	return (
		<div className='settings-inputRange'>
			<div>
				<div className='settings-label'>
					{label} - {value} {qtyCode}
				</div>
			</div>
			<div className='settings-range'>
				<input
					type='range'
					min={rangeMin}
					max={rangeMax}
					value={value}
					onInput={onInput}
					className='slider'
					name={inputName}
					step={step}
				/>
			</div>
		</div>
	);
};

export default InputRange;
