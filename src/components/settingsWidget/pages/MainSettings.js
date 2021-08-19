/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addValue } from '../../../actions/storage';
import InputSwitch from '../InputSwitch';
import InputText from '../InputText';

const MainSettings = ({ style, storage, addValue }) => {
	const [options, setOptions] = useState({
		username: '',
		hideIconLabels: false,
		twentyFourHourTime: false
	});

	useEffect(() => {
		setOptions((state) => {
			return {
				...state,
				username: !storage.extraValues
					? ''
					: !storage.extraValues.username
					? ''
					: storage.extraValues.username,
				hideIconLabels: !storage.extraValues
					? false
					: !storage.extraValues.hideIconLabels
					? false
					: true,
				twentyFourHourTime: !storage.extraValues
					? false
					: !storage.extraValues.twentyFourHourTime
					? false
					: true
			};
		});
	}, [storage]);

	const { username, hideIconLabels, twentyFourHourTime } = options;

	const handleChange = (e) => {
		setOptions((state) => {
			return {
				...state,
				[e.target.name]: e.target.value
			};
		});
		addValue({
			key: e.target.name,
			value: e.target.value
		});
	};

	const handleSwitchChange = (e) => {
		const { checked } = e.target;
		if (checked) {
			setOptions((state) => {
				return {
					...state,
					[e.target.name]: true
				};
			});
			addValue({
				key: e.target.name,
				value: true
			});
		} else {
			setOptions((state) => {
				return {
					...state,
					[e.target.name]: false
				};
			});
			addValue({
				key: e.target.name,
				value: false
			});
		}
	};

	return (
		<div className='settings-main page' style={style}>
			<InputText
				onChange={handleChange}
				inputName='username'
				value={username}
				label='Username'
				placeholder='Enter your Display Name'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideIconLabels'
				value={hideIconLabels ? 'on' : 'off'}
				label='Hide Icon Labels'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='twentyFourHourTime'
				value={twentyFourHourTime ? 'on' : 'off'}
				label='24 Hour Time'
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	storage: state.storageReducer
});

export default connect(mapStateToProps, { addValue })(MainSettings);
