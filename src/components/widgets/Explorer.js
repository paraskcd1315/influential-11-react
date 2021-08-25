/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { openExplorer } from '../../actions/widget';
import { addValue, removeValue } from '../../actions/storage';
import { DraggableCore } from 'react-draggable';
import WidgetMaker from '../individualComponents/WidgetMaker';

const Explorer = ({
	appsReducer,
	widgetReducer: { explorerOpen },
	storageReducer: { extraValues },
	openExplorer,
	addValue,
	removeValue
}) => {
	const [style, setStyle] = useState({
		maxHeight: 200 + 'px',
		opacity: 0,
		transform: !extraValues
			? 'translate(-50%, 0px)'
			: !extraValues.Explorer
			? 'translate(-50%, 0px)'
			: `translate(-50%, ${extraValues.Explorer}px)`
	});

	useEffect(() => {
		if (explorerOpen) {
			setTimeout(() => {
				setStyle((state) => {
					return {
						...state,
						opacity: 1
					};
				});
			}, 250);
		}
	}, [explorerOpen]);

	const [yPosition, setYPosition] = useState({
		currentY: 0,
		initialY: 0,
		yOffset: !extraValues ? 0 : !extraValues.Explorer ? 0 : extraValues.Explorer
	});

	const [maximize, setMaximize] = useState(false);

	const [sidebar, openSidebar] = useState(false);

	const explorerContent = () => {
		return (
			<div className='explorer-stuff'>
				<div
					className={
						sidebar ? 'explorer-sidebar open' : 'explorer-sidebar'
					}></div>
				<div className='explorer-main'>
					<div className='explorer-header'>
						<i className='icon-ic_fluent_home_24_regular'></i>Favourite Apps
					</div>
				</div>
			</div>
		);
	};

	return (
		<DraggableCore
			handle='.widget-header-explorerWidget'
			cancel='.widget-buttons-right'
			onStart={(e, data) => {
				if (extraValues && extraValues.Explorer) {
					setYPosition((state) => {
						return {
							...state,
							yOffset: extraValues.Explorer
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
					key: 'Explorer',
					value: yPosition.yOffset
				});
			}}>
			<WidgetMaker
				id={'explorerWidget'}
				className={'desktopWidget'}
				title={''}
				showBackButton={true}
				showMenu={true}
				showMaximiseButton={true}
				startMenu={false}
				style={style}
				content={explorerContent()}
				closeCallback={() => {
					setStyle((state) => {
						return {
							...state,
							opacity: 0
						};
					});
					setTimeout(() => {
						removeValue('Explorer');
						openExplorer(false);
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
	appsReducer: state.appsReducer,
	widgetReducer: state.widgetReducer,
	storageReducer: state.storageReducer
});

export default connect(mapStateToProps, {
	openExplorer,
	addValue,
	removeValue
})(Explorer);
