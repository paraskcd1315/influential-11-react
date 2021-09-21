window.requestAnimFrame = function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
};

var FPI = {};

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
			if (document.getElementById('date')) {
				document.getElementById(
					'date'
				).innerHTML = `${t.sMonthText()} ${t.dateNum()}`;
			}
		}
	});
}
function deviceUnlocked() {}
function deviceLocked() {}
function viewRotated(direction) {}
function loadSettings(settings) {}
function badgeUpdated(bundle) {
	loadDockIcons();
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
					if (document.getElementById('date')) {
						document.getElementById(
							'date'
						).innerHTML = `${t.sMonthText()} ${t.dateNum()}`;
					}
				}
			})
		);
	}, 1000);

	addEvent(document.getElementById('startButton'), {
		event: 'click',
		callback: () => {
			componentsActive.startMenuOpened = !componentsActive.startMenuOpened;
			console.log(componentsActive.startMenuOpened);
		},
		label: 'startButton'
	});
})();
