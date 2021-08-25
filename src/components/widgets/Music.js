/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { openMedia } from '../../actions/widget';
import { addValue, removeValue } from '../../actions/storage';
import WidgetMaker from '../individualComponents/WidgetMaker';
import { DraggableCore } from 'react-draggable';

const Music = ({
	mediaReducer,
	widgetReducer: { mediaOpen },
	storageReducer: { extraValues },
	openMedia,
	addValue,
	removeValue,
	hideStartMenu,
	startMenu
}) => {
	const [style, setStyle] = useState({
		maxHeight: 200 + 'px',
		opacity: !startMenu ? 0 : null,
		transform: !startMenu
			? !extraValues
				? 'translate(-50%, 0px)'
				: !extraValues.Media
				? 'translate(-50%, 0px)'
				: `translate(-50%, ${extraValues.Media})`
			: null
	});

	useEffect(() => {
		if (mediaOpen && !startMenu) {
			setTimeout(() => {
				setStyle((state) => {
					return {
						...state,
						opacity: 1
					};
				});
			}, 250);
		}
	}, [mediaOpen, startMenu]);

	const [yPosition, setYPosition] = useState({
		currentY: 0,
		initialY: 0,
		yOffset: !extraValues ? 0 : !extraValues.Media ? 0 : extraValues.Media
	});

	const [maximize, setMaximize] = useState(false);

	return startMenu ? (
		<WidgetMaker
			id={'musicWidget'}
			className={startMenu ? 'startWidget' : 'desktopWidget'}
			title={'Weather'}
			showMaximiseButton={!startMenu}
			startMenu={startMenu}
			style={style}
			hideStartMenu={hideStartMenu}
			onStartClick={() => {
				if (startMenu && (!extraValues || !extraValues.Media)) {
					openMedia(true);
					addValue({
						key: 'Media',
						value: 0
					});
				}
			}}
		/>
	) : (
		<DraggableCore
			handle='.widget-header-musicWidget'
			cancel='.widget-buttons-right'
			onStart={(e, data) => {
				if (extraValues && extraValues.Media) {
					setYPosition((state) => {
						return {
							...state,
							yOffset: extraValues.Media
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
					key: 'Media',
					value: yPosition.yOffset
				});
			}}>
			<WidgetMaker
				id={'musicWidget'}
				className={startMenu ? 'startWidget' : 'desktopWidget'}
				title={'Weather'}
				showMaximiseButton={!startMenu}
				startMenu={startMenu}
				style={style}
				closeCallback={() => {
					setStyle((state) => {
						return {
							...state,
							opacity: 0
						};
					});
					setTimeout(() => {
						removeValue('Media');
						openMedia(false);
					}, 250);
				}}
				maximize={maximize}
				maximizeCallback={() => {
					if (!maximize) {
						setMaximize(true);
						setStyle((state) => {
							return {
								...state,
								maxHeight: 500 + 'px'
							};
						});
					} else {
						setMaximize(false);
						setStyle((state) => {
							return {
								...state,
								maxHeight: 200 + 'px'
							};
						});
					}
				}}
			/>
		</DraggableCore>
	);
};

const mapStateToProps = (state) => ({
	mediaReducer: state.mediaReducer,
	widgetReducer: state.widgetReducer,
	storageReducer: state.storageReducer
});

export default connect(mapStateToProps, {
	openMedia,
	addValue,
	removeValue
})(Music);
