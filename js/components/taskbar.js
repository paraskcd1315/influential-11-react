const wifiBars = [
	'icon-ic_fluent_wifi_4_24_regular',
	'icon-ic_fluent_wifi_3_24_regular',
	'icon-ic_fluent_wifi_2_24_regular',
	'icon-ic_fluent_wifi_1_24_regular'
];

const telephonyBars = [
	'icon-ic_fluent_cellular_data_5_24_regular',
	'icon-ic_fluent_cellular_data_4_24_regular',
	'icon-ic_fluent_cellular_data_3_24_regular',
	'icon-ic_fluent_cellular_data_2_24_regular',
	'icon-ic_fluent_cellular_data_1_24_regular'
];

const batteryCharging = 'icon-ic_fluent_battery_charge_24_regular';

const batteryBars = [
	'icon-ic_fluent_battery_0_24_regular',
	'icon-ic_fluent_battery_1_24_regular',
	'icon-ic_fluent_battery_2_24_regular',
	'icon-ic_fluent_battery_3_24_regular',
	'icon-ic_fluent_battery_4_24_regular',
	'icon-ic_fluent_battery_5_24_regular',
	'icon-ic_fluent_battery_6_24_regular',
	'icon-ic_fluent_battery_7_24_regular',
	'icon-ic_fluent_battery_8_24_regular',
	'icon-ic_fluent_battery_9_24_regular',
	'icon-ic_fluent_battery_full_24_regular'
];

const loadStatusbar = () => {
	const { statusbar, battery } = FPI;
	let signal,
		wifi,
		batteryP = Math.ceil(battery['percent'] / 10),
		batteryI;

	document.getElementById('statusbarContainer').innerHTML = '';

	if (FPI && statusbar.signalBars > 0) {
		signal = telephonyBars[statusbar.signalBars];
	}

	if (FPI && statusbar.wifiBars > 0) {
		wifi = wifiBars[statusbar.wifiBars];
	}

	if (FPI && battery['chargestate'] === '1') {
		batteryI = batteryCharging;
	} else {
		batteryI = batteryBars[batteryP];
	}

	document.getElementById('statusbarContainer').innerHTML = `
	<div class='status-bar'>
		<i class='${signal} statusIcons'></i>
		<i class='${wifi} statusIcons'></i>
		<i class='${batteryI} statusIcons'></i>
	</div>
	`;
};

const loadDockIcons = () => {
	let apps = '';
	const { dockIcons } = storage;
	const { bundle } = FPI;

	for (let i = 0; i < 5; i++) {
		let app = theApp({
			bundleID: dockIcons[i],
			label: bundle[dockIcons[i]].name,
			hideLabel: true,
			className: 'favApp',
			hideBadge: false,
			badge: bundle[dockIcons[i]].badge
		});
		apps += app;
	}

	removeTapEvents('dockApps');
	removeEvent('dockAppPress');

	tapHold({
		time: 400,
		element: document.getElementById('dockApps'),
		action: (element) => {
			if (element.className === 'favApp') {
				// componentsActive.showMenu = true;
				console.log('Long Pressed ' + element.id + ' for 400 ms');
			}
		}
	});

	addEvent(document.getElementById('dockApps'), {
		event: 'click',
		callback: (e) => {
			e.preventDefault();
			if (
				e.target.className === 'favApp' &&
				componentsActive.showMenu === false
			) {
				console.log('Opening App of ID:' + e.target.id);
				window.location = `frontpage:openApp:${e.target.id}`;
			}
		},
		label: 'dockAppPress'
	});

	document.getElementById('dockApps').innerHTML = apps;
};
