import React from 'react';
import { useLongPress } from 'use-long-press';
import { connect } from 'react-redux';

import { showMenu } from '../../actions/components';
import { showAddAppsMenu, showReplaceAppsMenu } from '../../actions/menu';
import { useState } from 'react';

const App = ({
	identifier,
	badge,
	icon,
	name,
	className,
	hideName,
	showMenu,
	showAddAppsMenu,
	showReplaceAppsMenu,
	buttonAnimate
}) => {
	const [moved, setPointerMove] = useState(false);

	const longPress = useLongPress(
		() => {
			if (className === 'app') {
				showAddAppsMenu({
					identifier: identifier,
					name: name,
					icon: icon,
					addApp: true
				});
				showMenu(true);
			} else {
				showReplaceAppsMenu({
					identifier: identifier,
					name: name,
					icon: icon,
					replaceApp: true,
					removeApp: true
				});
				showMenu(true);
			}
		},
		{
			onCancel: (e) => {
				if (buttonAnimate) {
					buttonAnimate(e);
				}
				if (!moved) {
					window.api.apps.launchApplication(identifier);
				}
				setPointerMove(false);
			},
			onMove: () => {
				setPointerMove(true);
			},
			threshold: 500,
			captureEvent: true,
			cancelOnMovement: true,
			detect: 'touch'
		}
	);

	return (
		<div id={identifier} className={className} {...longPress}>
			{badge !== '' ? <div className='badge'></div> : ''}
			<div className='icon'>
				<img src={icon} alt={name} />
			</div>
			{hideName ? '' : <div className='title'>{name}</div>}
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, {
	showMenu,
	showAddAppsMenu,
	showReplaceAppsMenu
})(App);
