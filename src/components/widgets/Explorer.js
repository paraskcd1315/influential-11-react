/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { openFolder, closeFolder } from '../../actions/components';
import { openExplorer } from '../../actions/widget';
import { addValue, removeValue } from '../../actions/storage';
import {
	addFolderToDocument,
	addFolderToPhotos,
	addFolderToMusic,
	addFolderToVideo
} from '../../actions/explorer';
import { DraggableCore } from 'react-draggable';
import WidgetMaker from '../individualComponents/WidgetMaker';
import PageMaker from '../../explorerWidget/pageMaker';
import SidebarButton from '../../explorerWidget/sidebarButton';

const Explorer = ({
	appsReducer,
	widgetReducer: { explorerOpen },
	storageReducer,
	explorerAppsReducer: { documentApps, musicApps, videoApps, photoApps },
	explorerCustomFolderReducer: { folderID, pageID },
	openExplorer,
	addValue,
	removeValue,
	addFolderToDocument,
	addFolderToPhotos,
	addFolderToMusic,
	addFolderToVideo,
	openFolder,
	closeFolder
}) => {
	const { extraValues, dockIcons } = storageReducer;
	const [style, setStyle] = useState({
		maxHeight: extraValues.explorerMaximized
			? 400 + 'px'
			: extraValues.hideExplorerFolderTitle
			? 255 + 'px'
			: 300 + 'px',
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

	useEffect(() => {
		if (extraValues && extraValues.explorerMaximized) {
			setMaximize(true);
		}
	}, [extraValues]);

	const [sidebar, openSidebar] = useState(false);

	const [pageOpened, openPage] = useState({
		favouriteAppsPage: true,
		documentsAppsPage: false,
		photosAppsPage: false,
		musicAppsPage: false,
		videoAppsPage: false,
		customFolderPage: false
	});

	const {
		favouriteAppsPage,
		documentsAppsPage,
		photosAppsPage,
		musicAppsPage,
		videoAppsPage,
		customFolderPage
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
		videoAppsPageStyle: pageClosedStyle,
		customFolderPageStyle: pageClosedStyle
	});

	const {
		favouriteAppsPageStyle,
		documentsAppsPageStyle,
		photosAppsPageStyle,
		musicAppsPageStyle,
		videoAppsPageStyle,
		customFolderPageStyle
	} = pageStyle;

	const sidebarClick = (e, specialKey) => {
		const key = !specialKey ? e.target.id : specialKey;

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
						if (key !== 'customFolderPage') {
							addValue({ key: '' + key, value: true });
						}
						memo[currentKey] = true;
					} else {
						if (extraValues[currentKey] && key !== 'customFolderPage') {
							removeValue(currentKey);
						}
						memo[currentKey] = false;
					}
					return memo;
				},
				{}
			);

			return updatedState;
		});

		console.log(key);

		if (key !== 'customFolderPage') {
			switch (key) {
				case 'documentsAppsPage':
					setTimeout(() => {
						openFolder({
							folderID: '',
							pageID: '',
							page: 'documentApps'
						});
					}, 250);
					break;
				case 'photosAppsPage':
					setTimeout(() => {
						openFolder({
							folderID: '',
							pageID: '',
							page: 'photoApps'
						});
					}, 250);
					break;
				case 'musicAppsPage':
					setTimeout(() => {
						openFolder({
							folderID: '',
							pageID: '',
							page: 'musicApps'
						});
					}, 250);
					break;
				case 'videoAppsPage':
					setTimeout(() => {
						openFolder({
							folderID: '',
							pageID: '',
							page: 'videoApps'
						});
					}, 250);
					break;
				default:
					break;
			}
		}
	};

	useEffect(() => {
		let key = 'favouriteAppsPage';
		switch (true) {
			case extraValues.favouriteAppsPage:
				key = 'favouriteAppsPage';
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
				openPage((state) => {
					const updatedState = Object.entries(state).reduce(
						(memo, [currentKey]) => {
							if (currentKey === key) {
								memo[currentKey] = true;
							} else {
								if (extraValues[currentKey]) {
									removeValue(currentKey);
								}
								memo[currentKey] = false;
							}
							return memo;
						},
						{}
					);

					return updatedState;
				});
				break;

			case extraValues.documentsAppsPage:
				key = 'documentsAppsPage';
				openFolder({ folderID: '', pageID: '', page: 'documentApps' });
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
				openPage((state) => {
					const updatedState = Object.entries(state).reduce(
						(memo, [currentKey]) => {
							if (currentKey === key) {
								memo[currentKey] = true;
							} else {
								if (extraValues[currentKey]) {
									removeValue(currentKey);
								}
								memo[currentKey] = false;
							}
							return memo;
						},
						{}
					);

					return updatedState;
				});
				break;

			case extraValues.photosAppsPage:
				key = 'photosAppsPage';
				openFolder({ folderID: '', pageID: '', page: 'photoApps' });
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
				openPage((state) => {
					const updatedState = Object.entries(state).reduce(
						(memo, [currentKey]) => {
							if (currentKey === key) {
								memo[currentKey] = true;
							} else {
								if (extraValues[currentKey]) {
									removeValue(currentKey);
								}
								memo[currentKey] = false;
							}
							return memo;
						},
						{}
					);

					return updatedState;
				});
				break;

			case extraValues.musicAppsPage:
				key = 'musicAppsPage';
				openFolder({ folderID: '', pageID: '', page: 'musicApps' });
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
				openPage((state) => {
					const updatedState = Object.entries(state).reduce(
						(memo, [currentKey]) => {
							if (currentKey === key) {
								memo[currentKey] = true;
							} else {
								if (extraValues[currentKey]) {
									removeValue(currentKey);
								}
								memo[currentKey] = false;
							}
							return memo;
						},
						{}
					);

					return updatedState;
				});
				break;

			case extraValues.videoAppsPage:
				key = 'videoAppsPage';
				openFolder({ folderID: '', pageID: '', page: 'videoApps' });
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
				openPage((state) => {
					const updatedState = Object.entries(state).reduce(
						(memo, [currentKey]) => {
							if (currentKey === key) {
								memo[currentKey] = true;
							} else {
								if (extraValues[currentKey]) {
									removeValue(currentKey);
								}
								memo[currentKey] = false;
							}
							return memo;
						},
						{}
					);

					return updatedState;
				});
				break;

			default:
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
				openPage((state) => {
					const updatedState = Object.entries(state).reduce(
						(memo, [currentKey]) => {
							if (currentKey === key) {
								memo[currentKey] = true;
							} else {
								if (extraValues[currentKey]) {
									removeValue(currentKey);
								}
								memo[currentKey] = false;
							}
							return memo;
						},
						{}
					);

					return updatedState;
				});
				break;
		}

		//eslint-disable-next-line
	}, []);

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
						extraValues && extraValues.hideAddFolder ? (
							''
						) : (
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
								callback={(e) => {
									const popup = prompt('Please enter the folder Name', '');
									if (popup && popup !== null) {
										switch (true) {
											default:
												break;
											case documentsAppsPage:
												addFolderToDocument({
													folderID: popup.replace(/\s+/g, '').trim(),
													folderName: popup,
													apps: []
												});
												break;
											case photosAppsPage:
												addFolderToPhotos({
													folderID: popup.replace(/\s+/g, '').trim(),
													folderName: popup,
													apps: []
												});
												break;
											case musicAppsPage:
												addFolderToMusic({
													folderID: popup.replace(/\s+/g, '').trim(),
													folderName: popup,
													apps: []
												});
												break;
											case videoAppsPage:
												addFolderToVideo({
													folderID: popup.replace(/\s+/g, '').trim(),
													folderName: popup,
													apps: []
												});
												break;
										}
									} else {
										return;
									}
								}}
							/>
						)
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
							id='documentApps'
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
							apps={
								extraValues && extraValues.useOwnAppsOnPages
									? storageReducer['documentApps']
										? storageReducer['documentApps']
										: []
									: documentApps.apps
							}
							folders={documentApps.documentFolders}
							maximize={maximize}
							style={documentsAppsPageStyle}
							folderClick={(e) => {
								openFolder({
									folderID: e.target.id,
									pageID: 'documentFolders',
									page: 'documentApps'
								});
								setTimeout(() => {
									sidebarClick(e, 'customFolderPage');
								}, 150);
							}}
						/>
					) : (
						''
					)}
					{photosAppsPage ? (
						<PageMaker
							id='photoApps'
							headerTitle='Photo Apps'
							headerIcon={() => {
								return (
									<img src='assets/explorerIcons/Photos.png' alt='Photos' />
								);
							}}
							appReducer={appsReducer}
							apps={
								extraValues && extraValues.useOwnAppsOnPages
									? storageReducer['photoApps']
										? storageReducer['photoApps']
										: []
									: photoApps.apps
							}
							folders={photoApps.photoFolders}
							maximize={maximize}
							style={photosAppsPageStyle}
							folderClick={(e) => {
								openFolder({
									folderID: e.target.id,
									pageID: 'photoFolders',
									page: 'photoApps'
								});
								setTimeout(() => {
									sidebarClick(e, 'customFolderPage');
								}, 150);
							}}
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
							apps={
								extraValues && extraValues.useOwnAppsOnPages
									? storageReducer['musicApps']
										? storageReducer['musicApps']
										: []
									: musicApps.apps
							}
							folders={musicApps.musicFolders}
							maximize={maximize}
							style={musicAppsPageStyle}
							folderClick={(e) => {
								openFolder({
									folderID: e.target.id,
									pageID: 'musicFolders',
									page: 'musicApps'
								});
								setTimeout(() => {
									sidebarClick(e, 'customFolderPage');
								}, 150);
							}}
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
							apps={
								extraValues && extraValues.useOwnAppsOnPages
									? storageReducer['videoApps']
										? storageReducer['videoApps']
										: []
									: videoApps.apps
							}
							folders={videoApps.videoFolders}
							maximize={maximize}
							style={videoAppsPageStyle}
							folderClick={(e) => {
								openFolder({
									folderID: e.target.id,
									pageID: 'videoFolders',
									page: 'videoApps'
								});
								setTimeout(() => {
									sidebarClick(e, 'customFolderPage');
								}, 150);
							}}
						/>
					) : (
						''
					)}
					{customFolderPage ? (
						<PageMaker
							id={folderID}
							headerTitle={storageReducer[pageID][folderID].folderName}
							headerIcon={() => {
								return (
									<img
										src='assets/explorerIcons/Folder.png'
										alt={storageReducer[pageID][folderID].folderName}
									/>
								);
							}}
							appReducer={appsReducer}
							apps={storageReducer[pageID][folderID].apps}
							maximize={maximize}
							style={customFolderPageStyle}
							customFolder={true}
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
				showBackButton={true}
				activeBackButton={!customFolderPage}
				backButtonCallback={(e) => {
					switch (pageID) {
						case 'documentFolders':
							sidebarClick(e, 'documentsAppsPage');
							break;

						case 'photoFolders':
							sidebarClick(e, 'photosAppsPage');
							break;

						case 'musicFolders':
							sidebarClick(e, 'musicAppsPage');
							break;

						case 'videoFolders':
							sidebarClick(e, 'videoAppsPage');
							break;

						default:
							break;
					}
					closeFolder();
				}}
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
						addValue({ key: 'explorerMaximized', value: true });
					} else {
						setMaximize(false);
						setStyle((state) => {
							return {
								...state,
								maxHeight: extraValues.hideExplorerFolderTitle
									? 255 + 'px'
									: 300 + 'px'
							};
						});
						removeValue('explorerMaximized');
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
	explorerAppsReducer: state.explorerAppsReducer,
	explorerCustomFolderReducer: state.explorerCustomFolderReducer
});

export default connect(mapStateToProps, {
	openExplorer,
	addValue,
	removeValue,
	addFolderToDocument,
	addFolderToPhotos,
	addFolderToMusic,
	addFolderToVideo,
	openFolder,
	closeFolder
})(Explorer);
