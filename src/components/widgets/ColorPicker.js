/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import rgbHex from 'rgb-hex';
import { connect } from 'react-redux';
import { DraggableCore } from 'react-draggable';
import { SketchPicker } from 'react-color';

import { closeColorPicker } from '../../actions/components';
import { addValue, removeValue } from '../../actions/storage';
import WidgetMaker from '../individualComponents/WidgetMaker';

const ColorPicker = ({
	storageReducer: { extraValues },
	widgetReducer: { colorPickerOpen },
	colorPickerReducer: { color, colorInputName, colorLabel },
	closeColorPicker,
	addValue,
	removeValue
}) => {
	const [style, setStyle] = useState({
		width: '280px',
		opacity: 0,
		transform: !extraValues
			? 'translate(-50%, -235px)'
			: !extraValues.ColorPicker
			? 'translate(-50%, -235px)'
			: `translate(-50%, ${extraValues.ColorPicker}px)`
	});

	useEffect(() => {
		if (colorPickerOpen) {
			setTimeout(() => {
				setStyle((state) => {
					return {
						...state,
						opacity: 1
					};
				});
			}, 250);
		}
	}, [colorPickerOpen]);

	const [yPosition, setYPosition] = useState({
		currentY: 0,
		initialY: 0,
		yOffset: !extraValues
			? -235
			: !extraValues.ColorPicker
			? -235
			: extraValues.ColorPicker
	});

	const onChange = (color, name) => {
		let hexColor =
			'#' + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a);
		addValue({
			key: name,
			value: hexColor
		});
	};

	const colorPickerContent = () => {
		return (
			<div className='colorPickerContainer'>
				<SketchPicker
					color={
						extraValues
							? extraValues[colorInputName]
								? extraValues[colorInputName]
								: color
							: color
					}
					onChange={(color) => onChange(color, colorInputName)}
				/>
			</div>
		);
	};

	return (
		<DraggableCore
			handle='.widget-header-colorPickerWidget'
			cancel={`.widget-buttons-right, .widget-buttons-left`}
			onStart={(e, data) => {
				if (extraValues && extraValues.ColorPicker) {
					setYPosition((state) => {
						return {
							...state,
							yOffset: extraValues.ColorPicker
						};
					});
				}
				setYPosition((state) => {
					return {
						...state,
						initialY: data.y - state.yOffset
					};
				});
			}}
			onDrag={(e, data) => {
				setYPosition((state) => {
					return {
						...state,
						currentY: data.lastY - state.initialY,
						yOffset: data.lastY - state.initialY
					};
				});
				setStyle((state) => {
					return {
						...state,
						transform: `translate(-50%, ${yPosition.currentY}px)`,
						zIndex: 99
					};
				});
			}}
			onStop={() => {
				setStyle((state) => {
					return {
						...state,
						zIndex: null
					};
				});
				setYPosition((state) => {
					return {
						...state,
						initialY: state.currentY
					};
				});
				addValue({
					key: 'ColorPicker',
					value: yPosition.yOffset
				});
			}}>
			<WidgetMaker
				id='colorPickerWidget'
				className='desktopWidget'
				title={colorLabel}
				startMenu={false}
				style={style}
				closeCallback={() => {
					setStyle((state) => {
						return {
							...state,
							opacity: 0
						};
					});
					setTimeout(() => {
						removeValue('ColorPicker');
						closeColorPicker();
					}, 250);
				}}
				content={colorPickerContent()}
			/>
		</DraggableCore>
	);
};

const mapStateToProps = (state) => ({
	colorPickerReducer: state.colorPickerReducer,
	storageReducer: state.storageReducer,
	widgetReducer: state.widgetReducer
});

export default connect(mapStateToProps, {
	closeColorPicker,
	addValue,
	removeValue
})(ColorPicker);
