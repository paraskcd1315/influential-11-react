const pageOpened = {
	allAppsPage: false,
	moreWidgetsPage: false
};

const searchBar = () => {
	const Searchbar = document.createElement('div');

	Searchbar.className = 'searchbar';
	Searchbar.innerHTML = `
    <i className='searchIcon icon-ic_fluent_search_24_regular'></i>
    <input type='search' class='searchInput' placeholder='${currentTranslate.randomWords[1]}' />
    `;

	return Searchbar;
};

const startPageHeaders = ({
	title,
	buttonTitle,
	buttonChevron,
	buttonEvent
}) => {
	const theTitle = document.createElement('div');
	theTitle.innerHTML = title;

	const button = document.createElement('button');
	button.innerHTML = `
    <div class='btn-title'>
        ${buttonTitle}
    </div>
    <i class='${buttonChevron}'></i>
    `;

	addEvent(button, {
		event: 'click',
		callback: (e) => {
			buttonEvent(e);
		},
		label: 'openAppsPage'
	});

	const Header = document.createElement('div');

	Header.append(theTitle, button);

	return Header;
};

const pinnedApps = () => {
	const { dockIcons } = storage;
	const { bundle } = FPI;

	const styles =
		dockIcons.length > 5
			? {
					display: 'grid'
			  }
			: {
					display: 'block'
			  };

	let apps = '';

	if (dockIcons.length > 5) {
		for (let i = 5; i < dockIcons.length; i++) {
			let app = theApp({
				bundleID: dockIcons[i],
				label: bundle[dockIcons[i]].name,
				hideLabel: false,
				className: 'favApp',
				hideBadge: false,
				badge: bundle[dockIcons[i]].badge
			});
			apps += app;
		}
	} else {
		apps = `
        <div class='noApps'>${currentTranslate.randomWords[7]}</div>
        `;
	}

	const PinnedApps = document.getElementById('pinnedApps');

	if (!PinnedApps) {
		let newPinnedApps = document.createElement('div');
		newPinnedApps.id = 'pinnedApps';
		newPinnedApps.innerHTML = apps;
		Object.assign(newPinnedApps.style, styles);

		return newPinnedApps;
	} else {
		PinnedApps.innerHTML = apps;
	}
};

const mainScreenPage = () => {
	const MainScreen = document.createElement('div');

	MainScreen.className = 'mainScreen pages-page';
	Object.assign(MainScreen.style, {
		opacity: 1
	});

	MainScreen.append(
		startPageHeaders({
			title: currentTranslate.randomWords[5],
			buttonTitle: currentTranslate.randomWords[4],
			buttonChevron: 'btn-chevron icon-ic_fluent_chevron_right_48_regular',
			buttonEvent: (e) => {
				console.log('pressed');
			}
		}),
		pinnedApps(),
		startPageHeaders({
			title: currentTranslate.randomWords[2],
			buttonTitle: currentTranslate.randomWords[6],
			buttonChevron: 'btn-chevron icon-ic_fluent_chevron_right_48_regular',
			buttonEvent: (e) => {
				console.log('pressed');
			}
		})
	);

	return MainScreen;
};

const startPages = () => {
	const Pages = document.createElement('div');

	Pages.className = 'pages';
	Pages.append(mainScreenPage());

	return Pages;
};

const startFooter = () => {
	const Footer = document.createElement('div');
	const username = storage.extraValues
		? currentTranslate.settings[0]
		: !storage.extraValues.username
		? currentTranslate.settings[0]
		: storage.extraValues.username;

	Footer.className = 'footer';
	Footer.innerHTML = `
    <div class='user'>
        <div className='user-profile'>
            <img src='images/account.jpg' alt='userAccount' />
        </div>
        <div className='user-name'>
            ${username}
        </div>
    </div>
    <div class='start-tabs'>
        <i class='apps icon-ic_fluent_settings_24_regular'></i>
        <i class='explorer icon-ic_fluent_apps_list_24_regular'</i>
        <div id='date' class='date'></div>
    </div>
    `;

	return Footer;
};

const startTabs = () => {
	const home = document.createElement('div');

	home.id = 'home';
	home.className = 'startTabs';

	home.append(searchBar(), startPages(), startFooter());
};

const startMenu = () => {
	const startMenu = document.createElement('div');

	startMenu.id = 'startMenu';
	Object.assign(startMenu.style, {
		opacity: 0,
		transform: 'translate(-50%, 50px)',
		transition: '150ms ease-out',
		pointerEvents: 'none'
	});
};
