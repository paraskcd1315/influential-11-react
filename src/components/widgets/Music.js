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
		if (nowPlaying.artwork) {
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
	}, [mediaOpen, startMenu, nowPlaying]);

	const [yPosition, setYPosition] = useState({
		currentY: 0,
		initialY: 0,
		yOffset: !extraValues ? 0 : !extraValues.Media ? 0 : extraValues.Media
	});

	const [maximize, setMaximize] = useState(false);

	const mediaContent = () => {
		return (
			<div className='media'>
				<div className='media-left'>
					{isStopped ? (
						<div className='media-stopped'>Not Playing</div>
					) : (
						<div className='media-playing'>
							<div
								className='media-artwork'
								onClick={() => {
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
				<div className='media-right'>
					{!isStopped ? (
						<>
							<button
								className='previousTrack'
								onClick={() => {
									window.api.media.previousTrack();
								}}>
								<i className='iconf-ic_fluent_caret_left_24_filled'></i>
								<i className='iconf-ic_fluent_caret_left_24_filled'></i>
							</button>
							<button
								className='playTrack'
								onClick={() => {
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
								onClick={() => {
									window.api.media.nextTrack();
								}}>
								<i className='iconf-ic_fluent_caret_right_24_filled'></i>
								<i className='iconf-ic_fluent_caret_right_24_filled'></i>
							</button>
						</>
					) : (
						''
					)}
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
					title={'Media'}
					showMaximiseButton={!startMenu}
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
									maxHeight: 300 + 'px'
								};
							});
						}
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
