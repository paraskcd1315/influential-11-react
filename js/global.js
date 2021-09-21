window.requestAnimFrame = function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
};

var FPI = {};
var theDate = '';

function setFPIInfo(info, label, parse) {
	if (parse) {
		FPI[label] = JSON.parse(info);
	} else {
		FPI[label] = info;
	}
}

function theApp({ bundleID, label, hideLabel, className, badge, hideBadge }) {
	let badgeI = hideBadge ? '' : badge > 0 ? `<div class='badge'></div>` : '';
	let labelI = hideLabel ? '' : `<div class='title'>${label}</div>`;
	return `
	<div id='${bundleID}' class='${className}'>
		${badgeI}
		<div class='icon'>
			<img src='/var/mobile/Library/FrontPageCache/${bundleID}.png' />
		</div>
		${labelI}
	</div>
	`;
}

function triggerComponentsActive() {
	const { startMenuOpened } = componentsActive;

	if (startMenuOpened) {
		if (!document.getElementById('startMenu')) {
			startMenu();
			document.getElementById('startButton').classList.add('active');
		}
	} else {
		document.getElementById('startButton').classList.remove('active');
		removeTapEvents('pinnedApps');
		removeEvent('pinnedAppPress');
		removeEvent(currentTranslate.randomWords[4]);
		removeEvent(currentTranslate.randomWords[6]);
		Object.assign(document.getElementById('startMenu').style, {
			opacity: 0,
			transform: 'translate(-50%, 50px)',
			transition: '150ms ease-out',
			pointerEvents: 'none'
		});
		setTimeout(() => {
			document
				.getElementById('root')
				.removeChild(document.getElementById('startMenu'));
		}, 150);
	}
}

function loadSystem() {}
function loadBattery() {
	loadStatusbar();
}
function loadStatusBar() {
	loadStatusbar();
}
function loadSwitcher() {}
function loadApps() {
	loadDockIcons();
	pinnedApps();
}
function loadMusic() {}
function loadNotifications() {}
function loadFolders() {}
function loadAlarms() {}
function loadMemory() {}
function loadWeather() {}
function FPIloaded() {
	document.getElementById('root').style.opacity = '1';
	loadStatusbar();
	loadDockIcons();
	Time({
		twentyfour: !storage.extraValues
			? false
			: !storage.extraValues.twentyFourHourTime
			? false
			: true,
		zeroPadding: true,
		callback: (t) => {
			document.getElementById('time').innerHTML = !storage.extraValues
				? `${t.hour()}:${t.minute()} ${t.ampm()}`
				: !storage.extraValues.twentyFourHourTime
				? `${t.hour()}:${t.minute()} ${t.ampm()}`
				: `${t.hour()}:${t.minute()}`;
			theDate = `${t.sMonthText()} ${t.dateNum()}`;
		}
	});
}
function deviceUnlocked() {}
function deviceLocked() {}
function viewRotated(direction) {}
function loadSettings(settings) {}
function badgeUpdated(bundle) {
	loadDockIcons();
	pinnedApps();
}
function loadReminders() {}
function loadSwitcher() {}

const componentsActive = {
	FPIStarted: false,
	startMenuOpened: false,
	ccOpen: false,
	searchbarActive: false,
	showMenu: false,
	addAppToFolderFlag: false,
	addAppToPageFlag: false,
	folderOpened: false
};

//Initialize Stuff
(function () {
	initStorage({
		dockIcons: [
			'com.apple.MobileSMS',
			'com.apple.mobilesafari',
			'com.apple.camera',
			'com.apple.Preferences',
			'com.apple.AppStore'
		]
	});
	setInterval(() => {
		window.requestAnimFrame(
			Time({
				twentyfour: !storage.extraValues
					? false
					: !storage.extraValues.twentyFourHourTime
					? false
					: true,
				zeroPadding: true,
				callback: (t) => {
					document.getElementById('time').innerHTML = !storage.extraValues
						? `${t.hour()}:${t.minute()} ${t.ampm()}`
						: !storage.extraValues.twentyFourHourTime
						? `${t.hour()}:${t.minute()} ${t.ampm()}`
						: `${t.hour()}:${t.minute()}`;
					theDate = `${t.sMonthText()} ${t.dateNum()}`;
				}
			})
		);
	}, 1000);

	addEvent(document.getElementById('startButton'), {
		event: 'click',
		callback: (e) => {
			e.target.style.transform = 'scale(0.8)';
			setTimeout(() => {
				e.target.style.transform = 'scale(1.0)';
			}, 100);

			componentsActive.startMenuOpened = !componentsActive.startMenuOpened;

			triggerComponentsActive();
		},
		label: 'startButton'
	});

	addEvent(document.getElementById('statusbarContainer'), {
		event: 'click',
		callback: (e) => {
			e.target.style.transform = 'scale(0.8)';
			setTimeout(() => {
				e.target.style.transform = 'scale(1.0)';
			}, 100);

			window.location = 'frontpage:opencc';
		},
		label: 'startButton'
	});
})();
