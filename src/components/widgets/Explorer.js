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
import PageMaker from '../../explorerWidget/pageMaker';
import SidebarButton from '../../explorerWidget/sidebarButton';

const Explorer = ({
	appsReducer,
	widgetReducer: { explorerOpen },
	storageReducer: { extraValues, dockIcons },
	explorerAppsReducer: { documentApps, musicApps, videoApps, photoApps },
	openExplorer,
	addValue,
	removeValue
}) => {
	const [style, setStyle] = useState({
		maxHeight: 300 + 'px',
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

	const [pageOpened, openPage] = useState({
		favouriteAppsPage: true,
		documentsAppsPage: false,
		photosAppsPage: false,
		musicAppsPage: false,
		videoAppsPage: false
	});

	const {
		favouriteAppsPage,
		documentsAppsPage,
		photosAppsPage,
		musicAppsPage,
		videoAppsPage
	} = pageOpened;

	const pageOpenedStyle = {
		opacity: 1,
		translate: 'transformX(0px)'
	};

	const pageClosedStyle = {
		opacity: 0,
		translate: 'transformX(-10px)'
	};

	const [pageStyle, setPageStyle] = useState({
		favouriteAppsPageStyle: pageOpenedStyle,
		documentsAppsPageStyle: pageClosedStyle,
		photosAppsPageStyle: pageClosedStyle,
		musicAppsPageStyle: pageClosedStyle,
		videoAppsPageStyle: pageClosedStyle
	});

	const {
		favouriteAppsPageStyle,
		documentsAppsPageStyle,
		photosAppsPageStyle,
		musicAppsPageStyle,
		videoAppsPageStyle
	} = pageStyle;

	const sidebarClick = (e) => {
		const key = e.target.id;

		setTimeout(() => {
			setPageStyle((state) => {
				const updatedState = Object.entries(state).reduce(
					(memo, [currentKey]) => {
						if (currentKey === key + 'Style') {
							memo[currentKey] = pageOpenedStyle;
						} else {
							memo[currentKey] = pageClosedStyle;
						}
						return memo;
					},
					{}
				);

				return updatedState;
			});
		}, 250);

		openPage((state) => {
			const updatedState = Object.entries(state).reduce(
				(memo, [currentKey]) => {
					if (currentKey === key) {
						memo[currentKey] = true;
					} else {
						memo[currentKey] = false;
					}
					return memo;
				},
				{}
			);

			return updatedState;
		});
	};

	const explorerContent = () => {
		return (
			<div className='explorer-stuff'>
				<div
					className={
						sidebar
							? maximize
								? 'explorer-sidebar open maximized'
								: 'explorer-sidebar open'
							: 'explorer-sidebar'
					}>
					{!favouriteAppsPage ? (
						<SidebarButton
							id='addFolder'
							active={false}
							icon={() => {
								return (
									<i
										className='iconf-ic_fluent_folder_add_24_filled'
										style={{
											color: '#2F93DE'
										}}></i>
								);
							}}
							title='Add Folder'
							callback={(e) => {}}
						/>
					) : (
						''
					)}
					<SidebarButton
						id='favouriteAppsPage'
						active={favouriteAppsPage}
						icon={() => {
							return (
								<i
									className='iconf-ic_fluent_star_24_filled'
									style={{
										color: '#FFD45A'
									}}></i>
							);
						}}
						title='Favourite Apps'
						callback={(e) => {
							sidebarClick(e);
						}}
					/>
					<SidebarButton
						id='documentsAppsPage'
						active={documentsAppsPage}
						icon={() => {
							return (
								<img src='assets/explorerIcons/Documents.png' alt='Documents' />
							);
						}}
						title='Document Apps'
						callback={(e) => {
							sidebarClick(e);
						}}
					/>
					<SidebarButton
						id='photosAppsPage'
						active={photosAppsPage}
						icon={() => {
							return <img src='assets/explorerIcons/Photos.png' alt='Photos' />;
						}}
						title='Photo Apps'
						callback={(e) => {
							sidebarClick(e);
						}}
					/>
					<SidebarButton
						id='musicAppsPage'
						active={musicAppsPage}
						icon={() => {
							return <img src='assets/explorerIcons/Music.png' alt='Music' />;
						}}
						title='Music Apps'
						callback={(e) => {
							sidebarClick(e);
						}}
					/>
					<SidebarButton
						id='videoAppsPage'
						active={videoAppsPage}
						icon={() => {
							return <img src='assets/explorerIcons/Video.png' alt='Video' />;
						}}
						title='Video Apps'
						callback={(e) => {
							sidebarClick(e);
						}}
					/>
				</div>
				<div
					className={
						sidebar ? 'explorer-main sidebar-opened' : 'explorer-main'
					}>
					{favouriteAppsPage ? (
						<PageMaker
							id='favouriteApps'
							headerTitle='Favourite Apps'
							headerIcon={() => {
								return (
									<i
										className='iconf-ic_fluent_star_24_filled'
										style={{
											color: '#FFD45A'
										}}></i>
								);
							}}
							appReducer={appsReducer}
							apps={dockIcons}
							maximize={maximize}
							style={favouriteAppsPageStyle}
							dockIcons={dockIcons}
						/>
					) : (
						''
					)}
					{documentsAppsPage ? (
						<PageMaker
							id='documentsApps'
							headerTitle='Document Apps'
							headerIcon={() => {
								return (
									<img
										src='assets/explorerIcons/Documents.png'
										alt='Documents'
									/>
								);
							}}
							appReducer={appsReducer}
							apps={documentApps.apps}
							maximize={maximize}
							style={documentsAppsPageStyle}
						/>
					) : (
						''
					)}
					{photosAppsPage ? (
						<PageMaker
							id='photosApps'
							headerTitle='Photo Apps'
							headerIcon={() => {
								return (
									<img src='assets/explorerIcons/Photos.png' alt='Photos' />
								);
							}}
							appReducer={appsReducer}
							apps={photoApps.apps}
							maximize={maximize}
							style={photosAppsPageStyle}
						/>
					) : (
						''
					)}
					{musicAppsPage ? (
						<PageMaker
							id='musicApps'
							headerTitle='Music Apps'
							headerIcon={() => {
								return <img src='assets/explorerIcons/Music.png' alt='Music' />;
							}}
							appReducer={appsReducer}
							apps={musicApps.apps}
							maximize={maximize}
							style={musicAppsPageStyle}
						/>
					) : (
						''
					)}
					{videoAppsPage ? (
						<PageMaker
							id='videoApps'
							headerTitle='Video Apps'
							headerIcon={() => {
								return <img src='assets/explorerIcons/Video.png' alt='Video' />;
							}}
							appReducer={appsReducer}
							apps={videoApps.apps}
							maximize={maximize}
							style={videoAppsPageStyle}
						/>
					) : (
						''
					)}
				</div>
			</div>
		);
	};

	return (
		<DraggableCore
			handle='.widget-header-explorerWidget'
			cancel={`.widget-buttons-right, .widget-buttons-left`}
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
								maxHeight: 400 + 'px'
							};
						});
					} else {
						setMaximize(false);
						setStyle((state) => {
							return {
								...state,
								maxHeight: 300 + 'px'
							};
						});
					}
				}}
				menuButtonCallback={() => {
					openSidebar(!sidebar);
				}}
			/>
		</DraggableCore>
	);
};

const mapStateToProps = (state) => ({
	appsReducer: state.appsReducer,
	widgetReducer: state.widgetReducer,
	storageReducer: state.storageReducer,
	explorerAppsReducer: state.explorerAppsReducer
});

export default connect(mapStateToProps, {
	openExplorer,
	addValue,
	removeValue
})(Explorer);
