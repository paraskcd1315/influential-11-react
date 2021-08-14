import React from 'react';
import { connect } from 'react-redux';

import MenuButton from './individualComponents/MenuButton';
import { addApp, removeApp } from '../actions/storage';
import { showMenu, openStartMenu } from '../actions/components';
import { showAddAppsMenu, showReplaceAppsMenu } from '../actions/menu';
import { useState } from 'react';
import { useEffect } from 'react';

const Menu = ({
	componentsReducer,
	menuReducer,
	addApp,
	removeApp,
	showMenu,
	showAddAppsMenu,
	showReplaceAppsMenu,
	openStartMenu
}) => {
	const { identifier, icon, name } = menuReducer;
	const [style, setStyle] = useState({ pointerEvents: 'none' });

	useEffect(() => {
		if (componentsReducer.showMenu) {
			setTimeout(() => {
				setStyle({ pointerEvents: 'unset' });
			}, 250);
		}
	}, [componentsReducer]);

	const showTheMenu = () => {
		if (componentsReducer.showMenu) {
			return {
				opacity: 1,
				transform: 'translate(-50%, -50%)'
			};
		} else {
			return {
				opacity: 0,
				transform: 'translate(-50%, -40%)',
				pointerEvents: 'none'
			};
		}
	};

	const showFooter = () => {
		if (identifier) {
			return (
				<>
					<div className='icon'>
						<img src={icon} alt={name} />
					</div>
					<div className='name'>{name}</div>
				</>
			);
		}
		return '';
	};

	const showMenuButtons = () => {
		if (menuReducer.addApp) {
			return (
				<MenuButton
					icon={'icon-ic_fluent_pin_24_regular'}
					title={'Pin App'}
					callback={() => {
						addApp(identifier);
						showAddAppsMenu({
							identifier: '',
							icon: '',
							name: '',
							addApp: false
						});
						showMenu(false);
						setStyle({ pointerEvents: 'none' });
					}}
				/>
			);
		} else {
			return (
				<>
					<MenuButton
						icon={'icon-ic_fluent_apps_24_regular'}
						title={'Replace App'}
						callback={() => {
							if (!componentsReducer.startMenuOpen) {
								openStartMenu(true);
							}
							showReplaceAppsMenu({
								identifier: identifier,
								icon: '',
								name: '',
								replaceApp: true,
								removeApp: false
							});
							showMenu(false);
							setStyle({ pointerEvents: 'none' });
						}}
					/>
					<MenuButton
						icon={'icon-ic_fluent_pin_off_24_regular'}
						title={'Unpin App'}
						callback={() => {
							removeApp(identifier);
							showReplaceAppsMenu({
								identifier: '',
								icon: '',
								name: '',
								replaceApp: false,
								removeApp: false
							});
							showMenu(false);
							setStyle({ pointerEvents: 'none' });
						}}
					/>
				</>
			);
		}
	};

	return (
		<div className={'appMenu'} style={showTheMenu()}>
			<div className='settings' style={style}>
				{showMenuButtons()}
				<MenuButton
					icon={'icon-ic_fluent_prohibited_24_regular'}
					title={'Cancel'}
					callback={() => {
						showMenu(false);
						setStyle({ pointerEvents: 'none' });
						setTimeout(() => {
							if (menuReducer.addApp) {
								showAddAppsMenu({
									identifier: '',
									icon: '',
									name: '',
									addApp: false
								});
							} else {
								showReplaceAppsMenu({
									identifier: '',
									icon: '',
									name: '',
									replaceApp: false,
									removeApp: false
								});
							}
						}, 200);
					}}
				/>
			</div>
			<div
				style={style}
				className='footer'
				onClick={() => {
					window.api.apps.launchApplication(identifier);
					if (menuReducer.addApp) {
						showAddAppsMenu({
							identifier: '',
							icon: '',
							name: '',
							addApp: false
						});
					} else {
						showReplaceAppsMenu({
							identifier: '',
							icon: '',
							name: '',
							replaceApp: false,
							removeApp: false
						});
					}
					showMenu(false);
					setStyle({ pointerEvents: 'none' });
				}}>
				{identifier ? showFooter() : ''}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, {
	showMenu,
	showAddAppsMenu,
	showReplaceAppsMenu,
	addApp,
	removeApp,
	openStartMenu
})(Menu);
