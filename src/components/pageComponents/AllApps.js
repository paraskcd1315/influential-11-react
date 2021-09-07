/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import App from '../individualComponents/App';

const AllApps = ({
	appsReducer: { allApplications },
	allAppsOpen,
	showAllApps,
	openAllApps,
	hideMainScreen,
	componentsReducer,
	hideStartMenu
}) => {
	const allApps = allApplications;

	const [scrollHelper, setScrollHelper] = useState(false);

	const alphabeticFilter = allApps.reduce((r, e) => {
		let alphabet;
		let regExp = /\d+/;
		if (e.name[0] === '\u200e') {
			alphabet = e.name[1];
		} else if (/[a-z]/.test(e.name[0])) {
			alphabet = e.name[0].toUpperCase();
		} else if (e.name[0] === '\u2800' || regExp.test(e.name[0])) {
			alphabet = '#';
		} else {
			alphabet = e.name[0];
		}
		if (!r[alphabet]) {
			r[alphabet] = { alphabet, record: [e] };
		} else {
			r[alphabet].record.push(e);
		}
		return r;
	}, {});

	const renderAlphabetMenu = () => {
		if (componentsReducer.searchQuery === '') {
			let html = [];
			let style = {};

			if (scrollHelper) {
				style = {
					opacity: 1,
					transform: 'translate(-50%, -50%)',
					pointerEvents: 'unset'
				};
			} else {
				style = {
					opacity: 0,
					transform: 'translate(-50%, -40%)',
					pointerEvents: 'none'
				};
			}

			let loopVar = Object.values(alphabeticFilter);

			for (let i = 0; i < loopVar.length; i++) {
				html.push(
					<div
						key={loopVar[i].alphabet + 'alphabet'}
						id={loopVar[i].alphabet}
						className={'alphabet'}
						onClick={(el) => {
							let scrollTo = document.getElementById(el.target.id[0]);
							scrollTo.parentNode.scrollTo({
								top: scrollTo.offsetTop - scrollTo.parentNode.offsetTop,
								behaviour: 'smooth'
							});

							setScrollHelper(!scrollHelper);
						}}>
						{loopVar[i].alphabet}
					</div>
				);
			}

			return (
				<div style={style} className='scrollHelper'>
					<div className='alphabetContainer'>{html}</div>
				</div>
			);
		}
	};

	const renderAllApps = () => {
		if (componentsReducer.searchQuery !== '') {
			let filteredApps = allApps.filter((app) => {
				return app.name.toLowerCase().includes(componentsReducer.searchQuery);
			});

			return filteredApps.map((app) => {
				return (
					<App
						key={app.identifier + 'filteredApp'}
						identifier={app.identifier}
						badge={app.badge}
						icon={app.icon}
						name={app.name}
						className={'app allApps'}
						hideStartMenu={hideStartMenu}
					/>
				);
			});
		}

		let loopVar = Object.values(alphabeticFilter);

		let html = [];

		for (let i = 0; i < loopVar.length; i++) {
			html.push(
				<div
					key={loopVar[i].alphabet + 'alphabet'}
					id={loopVar[i].alphabet}
					className={'alphabet'}
					onClick={() => setScrollHelper(!scrollHelper)}>
					{loopVar[i].alphabet}
				</div>
			);

			for (let j = 0; j < loopVar[i].record.length; j++) {
				html.push(
					<App
						key={loopVar[i].record[j].identifier + 'app'}
						identifier={loopVar[i].record[j].identifier}
						icon={loopVar[i].record[j].icon}
						name={loopVar[i].record[j].name}
						className={'app allApps'}
						hideBadge={true}
						hideStartMenu={hideStartMenu}
					/>
				);
			}
		}
		return <>{html}</>;
	};

	return (
		<div
			className={
				allAppsOpen ? 'allApps pages-page' : 'allApps pages-page disabled'
			}
			style={showAllApps()}>
			<div className='header'>
				<div className='title'>All Apps</div>
				<button
					onClick={() => {
						openAllApps(!allAppsOpen);
						hideMainScreen();
					}}
					className='btn'>
					<i className='btn-chevron-back icon-ic_fluent_chevron_left_48_regular'></i>
					<div className='btn-title-back'>Back</div>
				</button>
			</div>
			<div id='allApps' className='content'>
				{renderAllApps()}
			</div>
			{renderAlphabetMenu()}
		</div>
	);
};

const mapStateToProps = (state) => ({
	appsReducer: state.appsReducer,
	componentsReducer: state.componentsReducer
});

export default connect(mapStateToProps, null)(AllApps);
