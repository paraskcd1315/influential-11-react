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
import currentTranslate from '../../localizations';

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
		maxHeight: 300 + 'px',
		opacity: !startMenu ? 0 : null,
		transform: !startMenu
			? !extraValues
				? 'translate(-50%, 0px)'
				: !extraValues.Media
				? 'translate(-50%, 0px)'
				: `translate(-50%, ${extraValues.Media}px)`
			: null
	});

	const [bgStyle, setBgStyle] = useState('');

	const { nowPlaying, isPlaying, isStopped, nowPlayingApplication } =
		mediaReducer;

	useEffect(() => {
		if (nowPlaying.artwork && (!isStopped || isPlaying)) {
			setBgStyle(() => {
				return `
				#musicWidget:before {
					display: block;
					content: '';
					position: absolute;
					background-image: url('${nowPlaying.artwork}');
					background-size: cover;
					background-repeat: no-repeat;
					filter: blur(50px) opacity(0.8);
					overflow: hidden;
				}

				.media-artwork:before {
					display: block;
					content: '';
					position: absolute;
					background-image: url('${nowPlaying.artwork}');
					background-size: cover;
					background-repeat: no-repeat;
					z-index:-1;
					margin-left: -5px;
					margin-top: -5px;
					width: 130px;
					height: 140px;
					border-radius: 1rem;
					filter: blur(8px) opacity(0.8) brightness(85%);
				}

				.startWidget .media-artwork:before {
					width: 80px;
					height: 90px;
				}
				`;
			});
		}

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
	}, [mediaOpen, startMenu, nowPlaying, isPlaying, isStopped]);

	const [yPosition, setYPosition] = useState({
		currentY: 0,
		initialY: 0,
		yOffset: !extraValues ? 0 : !extraValues.Media ? 0 : extraValues.Media
	});

	const mediaContent = () => {
		return (
			<div className={isStopped || !isPlaying ? 'media stopped' : 'media'}>
				<div className='media-left'>
					{isStopped || !nowPlayingApplication.identifier ? (
						<div className='media-stopped'>
							{currentTranslate.randomWords[11]}
						</div>
					) : (
						<div className='media-playing'>
							<div
								className='media-artwork'
								onClick={(e) => {
									e.preventDefault();
									window.api.apps.launchApplication(
										nowPlayingApplication.identifier
									);
								}}>
								<img src={nowPlaying.artwork} alt='mediaArtwork' />
							</div>
							<div className='media-info'>
								<div className='media-title'>
									<div className='icon'>
										<i className='icon-ic_fluent_music_note_2_play_20_regular'></i>
									</div>
									<div className='text'>{nowPlaying.title}</div>
								</div>
								<div className='media-artist'>
									<div className='icon'>
										<i className='icon-ic_fluent_slide_microphone_24_regular'></i>
									</div>
									<div className='text'>{nowPlaying.artist}</div>
								</div>
							</div>
						</div>
					)}
				</div>
				<div className={isStopped ? 'media-right stopped' : 'media-right'}>
					<>
						<button
							className='previousTrack'
							onClick={(e) => {
								e.preventDefault();
								window.api.media.previousTrack();
							}}>
							<i className='iconf-ic_fluent_caret_left_24_filled'></i>
							<i className='iconf-ic_fluent_caret_left_24_filled'></i>
						</button>
						<button
							className='playTrack'
							onClick={(e) => {
								e.preventDefault();
								window.api.media.togglePlayPause();
							}}>
							{isPlaying ? (
								<i className='iconf-ic_fluent_pause_circle_20_filled'></i>
							) : (
								<i className='iconf-ic_fluent_play_circle_20_filled'></i>
							)}
						</button>
						<button
							className='nextTrack'
							onClick={(e) => {
								e.preventDefault();
								window.api.media.nextTrack();
							}}>
							<i className='iconf-ic_fluent_caret_right_24_filled'></i>
							<i className='iconf-ic_fluent_caret_right_24_filled'></i>
						</button>
					</>
				</div>
			</div>
		);
	};

	return startMenu ? (
		<>
			<WidgetMaker
				id={'musicWidget'}
				className={startMenu ? 'startWidget' : 'desktopWidget'}
				title={'Media'}
				showMaximiseButton={!startMenu}
				startMenu={startMenu}
				style={style}
				content={mediaContent()}
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
				onHoldClick={() => {
					if (!extraValues || !extraValues.musicPin) {
						if (extraValues && 'weatherPin' in extraValues) {
							removeValue('weatherPin');
						}
						let popup = window.confirm(
							'Are you sure you want to pin the Media Widget?'
						);
						if (popup) {
							addValue({
								key: 'musicPin',
								value: true
							});
						}
					} else {
						window.confirm('Media Widget is already Pinned :)');
					}
				}}
			/>
		</>
	) : (
		<>
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
					title={
						isStopped || !isPlaying
							? currentTranslate.widgetNames[6]
							: nowPlayingApplication.name
					}
					showMaximiseButton={false}
					startMenu={startMenu}
					style={style}
					content={mediaContent()}
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
				/>
			</DraggableCore>
			<style>{bgStyle}</style>
		</>
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
