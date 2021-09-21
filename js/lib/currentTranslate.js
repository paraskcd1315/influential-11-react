/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

const current =
	window.navigator.language.length >= 2
		? window.navigator.language.split('-')[0]
		: 'en';

const translate = {
	en: {
		randomWords: [
			'Today', //randomWords0
			'Type here to search', //randomWords1
			'Widgets', //randomWords2
			'Back', //randomWords3
			'All Apps', //randomWords4
			'Pinned', //randomWords5
			'More', //randomWords6
			'More Pinned Apps will show up here. Go to All Apps to pin your Favourite Apps here.', //randomWords7
			'More Favourite Apps will show up here. Go to the Start Menu to pin your Favourite Apps here.', //randomWords8
			'Tap here to Pin some Apps to the folder', //randomWords9
			'Add App', //randomWords10
			'Not Playing' //randomWords11
		],
		menuItems: [
			'Pin App', //menuItems0
			'Remove Folder', //menuItems1
			'Remove App', //menuItems2
			'Replace App', //menuItems3
			'Unpin App', //menuItems4
			'Cancel' //menuItems5
		],
		widgetNames: [
			'Weather',
			'Settings',
			'Settings - Main Settings',
			'Settings - Individual Widget Settings',
			'Settings - Look & Feel Settings',
			'Settings - Color Settings',
			'Media'
		],
		controlCenter: [
			'Airplane Mode',
			'Wifi',
			'Bluetooth',
			'Cellular Data',
			'Dark Mode',
			'Battery Saver',
			'Device Lock',
			'Respring',
			'Safe Mode',
			'Refresh Widget',
			'Reset Widget',
			'This Option will erase everything you have saved like Pinned Apps and all the Settings, are you sure you want to proceed?'
		],
		explorer: [
			'Please enter the folder Name', //explorer0
			'Favourite Apps', //explorer1
			'Document Apps', //explorer2
			'Photo Apps', //explorer3
			'Music Apps', //explorer4
			'Video Apps' //explorer5
		],
		settings: [
			'Username', //setting0
			'Enter your Display Name', //setting1
			'Hide Icon Labels', //setting2
			'This setting hides the App Names, from the Explorer and Pinned Apps.', //setting3
			'24 Hour Time', //setting4
			'This setting enables 24 Hour Time.', //setting5
			'Disable Scroll Fade', //setting6
			'This setting disables the fade effect when scrolling.', //setting7
			'Remove Back Buttons', //setting8
			'This setting removes the back buttons from the respected Widgets when not in use.', //setting9
			'Blur Strength', //setting10
			'Border Radius', //setting11
			'Taskbar Related Settings', //setting12
			'Disable Background Noise effect', //setting13
			'Disable Background Noise effect which is enabled by default in the Taskbar.', //setting14
			'Disable Border', //setting15
			'Disable Border effect which is enabled by default in the Taskbar.', //setting16
			'Monochrome Start Button', //setting17
			'Make the Start Button of one Color Similar to Windows 10, i.e, either dark or light.', //setting18
			'Start Menu Related Settings', //setting19
			'Disable Background Noise Effect', //setting20
			'Disable Background Noise effect which is enabled by default in the Start Menu.', //setting21
			'Disable Border', //setting22
			'Disable Border effect which is enabled by default in the Start Menu.', //setting23
			'Widget Related Settings', //setting24
			'Enable Background Noise effect', //setting25
			'Enable Background Noise effect which is disabled by default in Widgets.', //setting26
			'Disable Border', //setting27
			'Disable Border effect which is enabled by default in Widgets.', //setting28
			'Action Center Related Settings', //setting29
			'Disable Background Noise effect', //setting30
			'Disable Background Noise effect which is enabled by default in the Action Center.', //setting31
			'Disable Border', //setting32
			'Disable Border effect which is enabled by default in Action Center.', //setting33
			'Context Menu Related Settings', //setting34
			'Disable Background Noise effect', //setting35
			'Disable Background Noise effect which is enabled by default in the Context Menu.', //setting36
			'Disable Border', //setting37
			'Disable Border effect which is enabled by default in Context Menu.', //setting38
			'Reset Individual Widget Settings', //setting39
			'Reset Look & Feel Settings', //setting40
			'Reset Main Settings', //setting41
			'Hide Background', //setting42
			'This setting hides the Background of the Explorer Widget.', //setting43
			'Explorer Widget Settings', //setting44
			'Hide Folder Titles', //setting45
			'This setting hides the Titles of the folders of the Explorer Widget.', //setting46
			'Use own Apps on the Pages', //setting47
			'This setting removes the automatic organisation of Apps to all the Explorer Pages, and gives you the freedom to add/remove your own. (Tip: If you see the page completely blank after disabling it, refresh the Widget.)', //setting48
			'Hide Add Apps button', //setting49
			'This setting removes the button that allows adding more Apps in Folders/Pages. Useful for Setup/Screenshot purposes to hide that ugly + button in the Explorer. (Tip: Enable this option, only when you have completely pinned your desired Apps.)', //setting50
			'Hide Add Folder button', //setting51
			'This setting removes the button that allows adding more Folders Pages. Useful for Setup/Screenshot purposes to hide that ugly Add Folder button in the Explorer Sidebar. (Tip: Enable this option, only when you have completely pinned your desired Folders.)', //setting52
			'Weather Widget Settings', //setting53
			'Disable Gradient Color', //setting54
			'This setting removes the Gradient Effect to the Widget, and makes it into the default Window Pane Color. (Like Explorer, Music, Settings etc.)', //setting55
			'Make it Compact', //setting56
			'This setting minifies the padding between different elements inside the Widget, meaning it makes it smaller/compact if you will. (Tip: Refresh the widget for Better Results)', //setting57
			'Music Widget Settings', //setting58
			'Make it Compact', //setting59
			'This setting minifies the padding between different elements inside the Widget, meaning it makes it smaller/compact if you will. (Tip: Refresh the widget for Better Results)', //setting60
			'Main Widget Settings', //setting61
			'All the Main Widget settings appear here', //setting62
			'Individual Widget Settings', //setting63
			'All Individual Widget settings appear here', //setting64
			'Look and Feel', //setting65
			'Settings related to the Looks of Components', //setting66
			'Color Settings', //setting67
			'Settings related to the Colors of Components', //setting68
			'Reset Color Settings', //setting69Nice:)
			'Start Button Colors', //setting70
			'Highlight Start Button Color', //setting71
			'The color that makes the Gradient Effect on the Start Button.', //setting72
			'Start Button Color', //setting73
			'The Main Start Button Background Color.', //setting74
			'Start Button Color Pressed', //setting75
			'The Main Start Button Background Color when Start Menu is Open.', //setting76
			'Widget Component Colors', //setting77
			'Background Color', //setting78
			'Background Color of all Components.', //setting79
			'Background Button Color', //setting80
			'Background Color of all Button Components.', //setting81
			'Text Color', //setting82
			'Color of all Text Components.', //setting83
			'Border Color', //setting84
			'Color of all Border Components.' //setting85
		],
		greets: ['Good Morning', 'Good Afternoon', 'Good Evening'],
		weekday: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		],
		sday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		month: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		],
		smonth: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		],
		condition: [
			'Tornado',
			'Tropical Storm',
			'Hurricane',
			'Thunderstorm',
			'Thunderstorm',
			'Snow',
			'Sleet',
			'Sleet',
			'Freezing Drizzle',
			'Drizzle',
			'Freezing Rain',
			'Showers',
			'Showers',
			'Flurries',
			'Snow',
			'Snow',
			'Snow',
			'Hail',
			'Sleet',
			'Dust',
			'Fog',
			'Haze',
			'Smoky',
			'Blustery',
			'Windy',
			'Cold',
			'Cloudy',
			'Cloudy',
			'Cloudy',
			'Cloudy',
			'Cloudy',
			'Clear',
			'Sunny',
			'Fair',
			'Fair',
			'Sleet',
			'Hot',
			'Thunderstorms',
			'Thunderstorms',
			'Thunderstorms',
			'Showers',
			'Heavy Snow',
			'Light Snow',
			'Heavy Snow',
			'Partly Cloudy',
			'Thunderstorm',
			'Snow',
			'Thunderstorm',
			'blank'
		]
	},
	de: {
		randomWords: [
			'Heute', //randomWords0
			'Schreibe hier um zu suchen', //randomWords1
			'Widgets', //randomWords2
			'Zur�ck', //randomWords3
			'Alle Apps', //randomWords4
			'Angepinnt', //randomWords5
			'Mehr', //randomWords6
			'Weitere angepinnte Apps werden hier angezeigt. Geh zu Alle Apps, um deine Favoriten hier anzupinnen.', //randomWords7
			'Hier werden weitere Favoriten angezeigt. Geh zum Startmen�, um deine Favoriten hier anzupinnen.', //randomWords8
			'Tippe hier, um einige Apps an den Ordner anzupinnen', //randomWords9
			'App hinzuf�gen', //randomWords10
			'Läuft nicht' //randomWords11
		],
		menuItems: [
			'App anpinnen', //menuItems0
			'Ordner entfernen', //menuItems1
			'App entfernen', //menuItems2
			'App ersetzen', //menuItems3
			'App entpinnen', //menuItems4
			'Abbrechen' //menuItems5
		],
		widgetNames: [
			'Wetter',
			'Einstellungen',
			'Einstellungen - Haupteinstellungen',
			'Einstellungen - Individuelle Widget-Einstellungen',
			'Einstellungen - Aussehen & Empfinden Einstellungen',
			'Einstellungen - Farbeinstellungen',
			'Medium'
		],
		controlCenter: [
			'Flugmodus',
			'WLAN',
			'Bluetooth',
			'Mobile Daten',
			'Dunkelmodus',
			'Stromsparmodus',
			'Ger�t sperren',
			'Respring',
			'Safe Mode',
			'Widget aktualisieren',
			'Widget zur�cksetzen',
			'Diese Option l�scht alles, was du gespeichert hast, wie angepinnte Apps und alle Einstellungen. M�chtest du wirklich fortfahren?'
		],
		explorer: [
			'Bitte geb den Ordnernamen ein', //explorer0
			'Favoriten', //explorer1
			'Dokument-Apps', //explorer2
			'Foto-Apps', //explorer3
			'Musik-Apps', //explorer4
			'Video-Apps' //explorer5
		],
		settings: [
			'Nutzername', //setting0
			'Geb deinen Anzeigenamen ein', //setting1
			'Symbolbeschriftungen ausblenden', //setting2
			'Diese Einstellung blendet die App-Namen aus dem Explorer und den angepinnten Apps aus.', //setting3
			'24-Stunden-Zeit', //setting4
			'Diese Einstellung aktiviert die 24-Stunden-Zeit.', //setting5
			'Scroll-Fade deaktivieren', //setting6
			'Diese Einstellung deaktiviert den Fade-Effekt beim Scrollen.', //setting7
			'Zur�ck-Tasten entfernen', //setting8
			'Diese Einstellung entfernt die Zur�ck-Tasten aus den entsprechenden Widgets, wenn sie nicht verwendet werden.', //setting9
			'St�rke der Unsch�rfe', //setting10
			'Randradius', //setting11
			'Taskleistenbezogene Einstellungen', //setting12
			'Hintergrundverzerrungseffekt deaktivieren', //setting13
			'Deaktiviere den Hintergrundverzerrungseffekt, der standardm��ig in der Taskleiste aktiviert ist.', //setting14
			'Rand deaktivieren', //setting15
			'Deaktiviere den Rahmeneffekt, der standardm��ig in der Taskleiste aktiviert ist.', //setting16
			'Monochrome Starttaste', //setting17
			'Mach die Starttaste in einer Farbe �hnlich wie bei Windows 10, d.h. entweder dunkel oder hell.', //setting18
			'Startmen�bezogene Einstellungen', //setting19
			'Hintergrundverzerrungseffekt deaktivieren', //setting20
			'Deaktiviere den Hintergrundverzerrungseffekt, der standardm��ig im Startmen� aktiviert ist.', //setting21
			'Rand deaktivieren', //setting22
			'Deaktiviere den Rahmeneffekt, der standardm��ig im Startmen� aktiviert ist.', //setting23
			'Widgetbezogene Einstellungen', //setting24
			'Hintergrundverzerrungseffekt aktivieren', //setting25
			'Aktiviere den Hintergrundverzerrungseffekt, der in Widgets standardm��ig deaktiviert ist.', //setting26
			'Rand deaktivieren', //setting27
			'Deaktiviere den Rahmeneffekt, der standardm��ig in Widgets aktiviert ist.', //setting28
			'Aktionsmen�bezogene Einstellungen', //setting29
			'Hintergrundverzerrungseffekt deaktivieren', //setting30
			'Deaktivieren Sie den Hintergrundverzerrungseffekt, der standardm��ig im Aktionsmen� aktiviert ist.', //setting31
			'Rand deaktivieren', //setting32
			'Deaktivieren Sie den Randeffekt, der standardm��ig im Aktionsmen� aktiviert ist.', //setting33
			'Kontextmen�bezogene Einstellungen', //setting34
			'Hintergrundverzerrungseffekt deaktivieren', //setting35
			'Deaktivieren Sie den Hintergrundverzerrungseffekt, der standardm��ig im Kontextmen� aktiviert ist.', //setting36
			'Rand deaktivieren', //setting37
			'Deaktivieren Sie den Randeffekt, der standardm��ig im Kontextmen� aktiviert ist.', //setting38
			'Individuelle Widget-Einstellungen zur�cksetzen', //setting39
			'Aussehen & Empfinden Einstellungen zur�cksetzen', //setting40
			'Haupteinstellungen zur�cksetzen', //setting41
			'Hintergrund ausblenden', //setting42
			'Diese Einstellung blendet den Hintergrund des Explorer-Widgets aus.', //setting43
			'Explorer-Widget-Einstellungen', //setting44
			'Ordnertitel ausblenden', //setting45
			'Diese Einstellung blendet die Titel der Ordner des Explorer-Widgets aus.', //setting46
			'Eigene Apps auf den Seiten verwenden', //setting47
			'Diese Einstellung entfernt die automatische Organisation von Apps auf allen Explorer-Seiten und gibt dir die Freiheit, deine eigenen hinzuzuf�gen/zu entfernen. (Tipp: Wenn die Seite nach dem Deaktivieren komplett leer ist, aktualisiere das Widget.)', //setting48
			'Taste Apps hinzuf�gen ausblenden', //setting49
			'Diese Einstellung entfernt die Taste, mit der weitere Apps in Ordnern/Seiten hinzugef�gt werden k�nnen. N�tzlich f�r Setup/Screenshot-Zwecke, um diese h�ssliche + Taste im Explorer auszublenden. (Tipp: Aktiviere diese Option nur, wenn du deine gew�nschten Apps vollst�ndig angepinnt hast.)', //setting50
			'Taste Ordner hinzuf�gen ausblenden', //setting51
			'Diese Einstellung entfernt die Taste, die das Hinzuf�gen weiterer Ordnerseiten erm�glicht. N�tzlich f�r Setup/Screenshot-Zwecke, um diese h�ssliche Taste zum Hinzuf�gen eines Ordners in der Explorer-Seitenleiste auszublenden. (Tipp: Aktiviere diese Option nur, wenn du deine gew�nschten Ordner vollst�ndig angepinnt hast.)', //setting52
			'Wetter-Widget-Einstellungen', //setting53
			'Farbverlauf deaktivieren', //setting54
			'Diese Einstellung entfernt den Farbverlaufseffekt f�r das Widget und macht es zur Standardfensterfarbe. (Wie Explorer, Musik, Einstellungen usw.)', //setting55
			'Mach es kompakt', //setting56
			'Diese Einstellung minimiert den Abstand zwischen verschiedenen Elementen innerhalb des Widgets, was bedeutet, dass es kleiner/kompakter wird, wenn du es willst. (Tipp: Aktualisiere das Widget f�r bessere Ergebnisse)', //setting57
			'Musik-Widget-Einstellungen', //setting58
			'MMach es kompakt', //setting59
			'Diese Einstellung minimiert den Abstand zwischen verschiedenen Elementen innerhalb des Widgets, was bedeutet, dass es kleiner/kompakter wird, wenn du es willst. (Tipp: Aktualisiere das Widget f�r bessere Ergebnisse)', //setting60
			'Haupt-Widget-Einstellungen', //setting61
			'Alle Einstellungen des Haupt-Widgets werden hier angezeigt', //setting62
			'Individuelle Widget-Einstellungen', //setting63
			'Alle individuellen Widget-Einstellungen werden hier angezeigt', //setting64
			'Aussehen und empfinden', //setting65
			'Einstellungen in Bezug auf das Aussehen von Komponenten', //setting66
			'Farbeinstellungen', //setting67
			'Einstellungen in Bezug auf die Farben von Komponenten', //setting68
			'Farbeinstellungen zur�cksetzen', //setting69Nice:)
			'Farben der Starttaste', //setting70
			'Hervorgehobene Farbe der Starttaste', //setting71
			'Die Farbe, die den Verlaufseffekt auf der Startschaltfl�che erzeugt.', //setting72
			'Farbe der Starttaste', //setting73
			'Die Hintergrundfarbe der Hauptstarttaste.', //setting74
			'Farbe der Starttaste gedr�ckt', //setting75
			'Die Hintergrundfarbe der Hauptstarttaste, wenn das Startmen� ge�ffnet ist.', //setting76
			'Farben der Widget-Komponenten', //setting77
			'Hintergrundfarbe', //setting78
			'Hintergrundfarbe aller Komponenten.', //setting79
			'Hintergrundfarbe der Tasten', //setting80
			'Hintergrundfarbe aller Tastenkomponenten.', //setting81
			'Textfarbe', //setting82
			'Farbe aller Textkomponenten.', //setting83
			'Randfarbe', //setting84
			'Farbe aller Randkomponenten.' //setting85
		],
		greets: ['Guten Morgen', 'Guten Mittag', 'Guten Abend'],
		weekday: [
			'Sonntag',
			'Montag',
			'Dienstag',
			'Mittwoch',
			'Donnerstag',
			'Freitag',
			'Samstag'
		],
		sday: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
		month: [
			'Januar',
			'Februar',
			'M�rz',
			'April',
			'Mai',
			'Juni',
			'Juli',
			'August',
			'September',
			'Oktober',
			'November',
			'Dezember'
		],
		smonth: [
			'Jan',
			'Feb',
			'M�r',
			'Apr',
			'Mai',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Okt',
			'Nov',
			'Dez'
		],
		condition: [
			'Tornado',
			'Tropensturm',
			'Hurrikan',
			'Gewitter',
			'Gewitter',
			'Schnee',
			'Schneeregen',
			'Schneeregen',
			'Gefrorener Nieselregen',
			'Nieselregen',
			'Gefrorener Regen',
			'Schauer',
			'Schauer',
			'Hagelsturm',
			'Schnee',
			'Schnee',
			'Schnee',
			'Hagel',
			'Schneeregen',
			'Staub',
			'Nebel',
			'Dunst',
			'Rauchig',
			'St�rmisch',
			'Windig',
			'Kalt',
			'Bew�lkt',
			'Bew�lkt',
			'Bew�lkt',
			'Bew�lkt',
			'Bew�lkt',
			'Klar',
			'Sonnig',
			'Sch�n',
			'Sch�n',
			'Schneeregen',
			'Hei�',
			'Gewitter',
			'Gewitter',
			'Gewitter',
			'Schauer',
			'Starker Schneefall',
			'Leichter Schneefall',
			'Starker Schneefall',
			'Teilweise bew�lkt',
			'Gewitter',
			'Schnee',
			'Gewitter',
			'leer'
		]
	},
	sq: {
		randomWords: [
			'Sot', //randomWords0
			'Shtypni k�tu p�r t� k�rkuar', //randomWords1
			'Widgets', //randomWords2
			'Mbrapa', //randomWords3
			'T� gjitha Aplikacionet', //randomWords4
			'Bashkangjitur', //randomWords5
			'M� shum�', //randomWords6
			'Aplikime m� t� Pinned do t� shfaqen k�tu. Shkoni te T� gjitha aplikacionet p�r t� pin k�tu Aplikacionet e preferuara.', //randomWords7
			'M� shum� Aplikime t� favorizuara do t� shfaqen k�tu. Shkoni te Menuja Start p�r t� pin Aplikacionet e preferuara.', //randomWords8
			'Takoni k�tu tek Pin disa Aplikime n� dosje', //randomWords9
			'Shto Aplikacion', //randomWords10
			'Jo duke vrapuar' //randomWords11
		],
		menuItems: [
			'Aplikacioni i Pin -it', //menuItems0
			'Hiq Skedarin', //menuItems1
			'Hiq Aplikimin', //menuItems2
			'Z�vend�soni Aplikacionin', //menuItems3
			'Aplikacioni i Unpin -it', //menuItems4
			'Anuloj' //menuItems5
		],
		widgetNames: [
			'Moti',
			'Cil�simet',
			'Cil�simet - Cil�simet kryesore',
			'Cil�simet - Cil�simet individuale t� Widget',
			'Cil�simet - Shikoni & Ndiheni Cil�simet',
			'Cil�simet - Cil�simet e ngjyrave',
			'Media'
		],
		controlCenter: [
			'Aeroplan Mode',
			'WiFi',
			'Bluetooth',
			'T� dh�nat celulare',
			'Mode e err�t',
			'Bateria Saver',
			'Pajisja Lock',
			'Respring',
			'Mode e sigurt',
			'Rifresko Widget',
			'Rivendosni Widget',
			'Ky opsion do t� fshij� gjith�ka q� keni ruajtur si Pinned Apps dhe t� gjith� Cil�simet, a jeni i sigurt q� doni t� vazhdoni?'
		],
		explorer: [
			'Ju lutemi shkruani emrin e dosjes', //explorer0
			'Aplikime t� favorshme', //explorer1
			'Aplikime dokumenti', //explorer2
			'Aplikime fotografish', //explorer3
			'Aplikime muzikore', //explorer4
			'Aplikime video' //explorer5
		],
		settings: [
			'Emri i p�rdoruesit', //setting0
			'Vendosni emrin tuaj', //setting1
			'Fshih Etiketat Icon', //setting2
			'Ky cil�sim fsheh Emrat e Aplikacioneve, nga Explorer dhe Pinned Apps.', //setting3
			'24 Koha e or�s', //setting4
			'Ky cil�sim mund�son 24 Koh�n e Or�s.', //setting5
			'�aktivizo Scroll Fade', //setting6
			'Ky cil�sim �aktivizon efectin e zbehjes kur scrolling.', //setting7
			'Hiqni Butonat e shpin�s', //setting8
			'Ky cil�sim heq butonat e pasm� nga widget -et e respektuara kur nuk jan� n� p�rdorim.', //setting9
			'E fort� Blur', //setting10
			'Rreze kufitare', //setting11
			'Cil�simet e lidhura me Taskbar', //setting12
			'�aktivizo efektin e zhurm�s n� sfond', //setting13
			'�aktivizo efektin e zhurm�s s� sfondit i cili aktivizohet si parazgjedhje n� shiritin e detyrave.', //setting14
			'�aktivizoni kufirin', //setting15
			'�aktivizo efektin e kufirit i cili aktivizohet si parazgjedhje n� Taskbar.', //setting16
			'Butoni i fillimit nj�ngjyr�sh', //setting17
			'B�ni Button fillestar t� nj� ngjyre t� ngjashme me Windows 10, d.m.th., ose i err�t ose i leht�.', //setting18
			'Filloni Cil�simet e lidhura me Menuj�n', //setting19
			'�aktivizo efektin e zhurm�s n� sfond', //setting20
			'�aktivizo efektin e zhurm�s s� sfondit i cili �sht� aktivizuar si parazgjedhje n� menun� Start.', //setting21
			'�aktivizoni kufirin', //setting22
			'�aktivizo efektin e kufirit i cili �sht� aktivizuar si parazgjedhje n� menun� Start.', //setting23
			'Cil�simet e lidhura me widget', //setting24
			'Aktivizo efektin e zhurm�s n� sfond', //setting25
			'Efekt i Zhurm�s Enable Background i cili �sht� i paaft� si parazgjedhur n� Widgets.', //setting26
			'�aktivizoni kufirin', //setting27
			'�aktivizo efektin e kufirit i cili aktivizohet si parazgjedhje n� Widgets.', //setting28
			'Cil�simet e lidhura me Qendr�n e Veprimit', //setting29
			'�aktivizo efektin e zhurm�s n� sfond', //setting30
			'�aktivizo efektin e zhurm�s s� sfondit i cili �sht� aktivizuar si parazgjedhje n� menun� Start.', //setting31
			'�aktivizoni kufirin', //setting32
			'�aktivizo efektin e kufirit i cili aktivizohet si parazgjedhje n� Qendr�n e Veprimit.', //setting33
			'Menyja e Kontekstit Cil�simet e lidhura', //setting34
			'�aktivizo efektin e zhurm�s n� sfond', //setting35
			'�aktivizo efektin e zhurm�s s� sfondit i cili aktivizohet si parazgjedhje n� menun� e kontekstit.', //setting36
			'�aktivizoni kufirin', //setting37
			'�aktivizo efektin e kufirit i cili aktivizohet si parazgjedhje n� menun� e kontekstit.', //setting38
			'Rivendosni Cil�simet individuale t� Widget', //setting39
			'Rivendosni Shikoni & Ndiheni Cil�simet', //setting40
			'Rivendosni Cil�simet kryesore', //setting41
			'Fshih sfondin', //setting42
			'Ky cil�sim fsheh sfondin e widget Explorer.', //setting43
			'Cil�simet e widget Explorer', //setting44
			'Fshih titujt e dosjeve', //setting45
			'Ky cil�sim fsheh Titujt e dosjeve t� Widget Explorer.', //setting46
			'P�rdorni Aplikime vetanake n� Faqe', //setting47
			'Ky p�rcaktim heq organizimin automatik t� Aplikacioneve n� t� gjitha fazat e Explorer, dhe ju jep lirin� p�r t� shtuar / hequr dor� nga tuajat. (K�shill�: N�se e shihni faqen plot�sisht bosh pasi ta keni paaft�suar, rifreskoni Widget.)', //setting48
			'Fshih butonin Shto aplikacione', //setting49
			'Ky vendosje heq butonin q� lejon t� shtoni m� shum� Aplikime n� Folders / Pages. Dobishme p�r q�llime Setup / Screenshot p�r t� fshehur at� buton t� sh�mtuar + n� Explorer. (K�shill�: Mund�soni k�t� mund�si, vet�m kur t� keni mb�rthyer plot�sisht Aplikacionet e d�shiruara.)', //setting50
			'Fshih butonin Shto dosje', //setting51
			'Ky vendosje heq butonin q� lejon t� shtoni m� shum� Folders Pages. Dobishme p�r q�llime Setup / Screenshot p�r t� fshehur at� butonin e sh�mtuar Add Folder n� Explorer Sidebar. (K�shill�: Mund�soni k�t� mund�si, vet�m kur t� keni mb�rthyer plot�sisht Folders tuaj t� d�shiruar.)', //setting52
			'Cil�simet e widget -it t� motit', //setting53
			'�aktivizo ngjyr�n e gradientit', //setting54
			'Ky vendosje heq efektin Gradient n� Widget, dhe e b�n at� n� ngjyr�n e dritares s� dritares. (Si Explorer, Music, Cil�sime etj.)', //setting55
			'B�jeni at� Kompakt', //setting56
			'Ky vendosje minimizon mbushjen midis elementeve t� ndrysh�m brenda Widget, do t� thot� se e b�n at� m� t� vog�l / kompakt n�se d�shironi. (K�shill�: Rinovoni widget p�r rezultate m� t� mira)', //setting57
			'Cil�simet e widget -it t� muzik�s', //setting58
			'B�jeni at� Kompakt', //setting59
			'Ky vendosje minimizon mbushjen midis elementeve t� ndrysh�m brenda Widget, do t� thot� se e b�n at� m� t� vog�l / kompakt n�se d�shironi. (K�shill�: Rinovoni widget p�r rezultate m� t� mira)', //setting60
			'Cil�simet kryesore t� Widget', //setting61
			'T� gjitha cil�simet kryesore t� Widget shfaqen k�tu', //setting62
			'Cil�simet individuale t� Widget', //setting63
			'T� gjitha cil�simet individuale t� Widget shfaqen k�tu', //setting64
			'Shikoni dhe ndjeheni', //setting65
			'Cil�simet n� lidhje me pamjen e p�rb�r�sve', //setting66
			'Cil�simet e ngjyrave', //setting67
			'Cil�simet q� lidhen me Ngjyrat e Komponent�ve', //setting68
			'Rivendos cil�simet e ngjyrave', //setting69Nice:)
			'Ngjyrat e butonit t� fillimit', //setting70
			'Theksoni ngjyr�n e butonit t� fillimit', //setting71
			'Ngjyra q� e b�n efektin Gradient n� Button Start.', //setting72
			'Ngjyra e butonit t� fillimit', //setting73
			'Butoni i Fillimit Ngjyra e Sfondit.', //setting74
			'Butoni i Ngjyr�s Shtypur', //setting75
			'Butoni kryesor i fillimit Ngjyra e sfondit kur menuja Start �sht� e hapur.', //setting76
			'Ngjyrat e komponentit t� widget -it', //setting77
			'Ngjyr� e sfondit', //setting78
			'Ngjyra e sfondit t� t� gjith� Komponent�ve', //setting79
			'Ngjyra e butonit t� sfondit', //setting80
			'Ngjyra e sfondit t� t� gjith� p�rb�r�sve t� butonit.', //setting81
			'Ngjyra e tekstit', //setting82
			'Ngjyra e t� gjith� p�rb�r�sve t� tekstit.', //setting83
			'Ngjyra e kufirit', //setting84
			'Ngjyra e t� gjith� p�rb�r�sve t� kufirit.' //setting85
		],
		greets: ['Mir�m�ngjes', 'Mir�dita', 'Mir�mbr�ma'],
		weekday: ['Diel', 'H�n�', 'Mart�', 'M�rkur�', 'Enjte', 'Premte', 'Shtun�'],
		sday: ['Die', 'H�n', 'Mar', 'M�r', 'Enj', 'Pre', 'Sht'],
		month: [
			'Janar',
			'Shkurt',
			'Mars',
			'Prill',
			'Maj',
			'Q�rshor',
			'Korrik',
			'Gusht',
			'Shtator',
			'Tetor',
			'N�ntor',
			'Dhjetor'
		],
		smonth: [
			'Jan',
			'Shk',
			'Mar',
			'Pri',
			'Maj',
			'Q�r',
			'Kor',
			'Gus',
			'Sht',
			'Tet',
			'N�n',
			'Dhj'
		],
		condition: [
			'Tornado',
			'Stuhia Tropikale',
			'Uragani',
			'Stuhi',
			'Stuhi',
			'Bor�',
			'Shiu i bor�s',
			'Shiu i bor�s',
			'Ngrirja e Rrjedh shiun',
			'Rrjedh shiun',
			'Ngrirja e shiut',
			'Dush',
			'Dush',
			'Bresh�r',
			'Bor�',
			'Bor�',
			'Bor�',
			'Bresh�r',
			'Shiu i bor�s',
			'Pluhur',
			'Mjegull',
			'Haze',
			'I tymosur',
			'Me shi',
			'Windy',
			'Ftoht�',
			'I vrenjtur',
			'I vrenjtur',
			'I vrenjtur',
			'I vrenjtur',
			'I vrenjtur',
			'Qart�',
			'Me diell',
			'Panair',
			'Panair',
			'Shiu i bor�s',
			'Nxeht�',
			'Stuhi',
			'Stuhi',
			'Stuhi',
			'Dush',
			'Snow r�nd�',
			'D�bora e leht�',
			'Snow r�nd�',
			'Pjes�risht me re',
			'Stuhi',
			'Bor�',
			'Stuhi',
			'bosh'
		]
	},
	es: {
		randomWords: [
			'Hoy', //randomWords0
			'Toque aquí para buscar', //randomWords1
			'Widgets', //randomWords2
			'Volver', //randomWords3
			'Todas las aplicaciones', //randomWords4
			'Fijado', //randomWords5
			'Más', //randomWords6
			'Aquí se mostrarán más aplicaciones fijadas. Vaya a Todas las aplicaciones para fijar sus aplicaciones favoritas aquí', //randomWords7
			'Aparecerán más aplicaciones favoritas aquí. Vaya al menú de inicio para fijar sus aplicaciones favoritas aquí.', //randomWords8
			'Click aquí para anclar algunas aplicaciones a la carpeta', //randomWords9
			'Añadir aplicación', //randomWords10
			'Música detenida' //randomWords11
		],
		menuItems: [
			'Fijar aplicaciones', //menuItems0
			'Quitar carpeta', //menuItems1
			'Quitar aplicación', //menuItems2
			'Reemplazar aplicación', //menuItems3
			'Desanclar aplicación', //menuItems4
			'Cancelar' //menuItems5
		],
		widgetNames: [
			'Clima',
			'Configuraciones', // Configuración (singular) has accentuation, Configuraciones, however, does not.
			'Configuraciones - Configuración principal',
			'Configuraciones - Configuración de widget individual',
			'Configuraciones - Configuración de apariencia',
			'Configuraciones - Configuración de color',
			'Música'
		],
		controlCenter: [
			'Modo Avión',
			'Wi-Fi',
			'Bluetooth',
			'Datos Móviles',
			'Modo oscuro',
			'Modo de ahorro de batería', // Modo de bajo consumo is indeed Power Saving Mode, Apple calls it "ahorro de batería" though
			'Bloquear dispositivo',
			'Respring',
			'Modo Seguro',
			'Actualizar Widget',
			'Restablecer Widget',
			'Esta opción borrará todo lo que haya guardado, como aplicaciones fijadas y todas las configuraciones, ¿estás seguro que deseas continuar?'
		],
		explorer: [
			'Por favor, introduzca el nombre de carpeta', //explorer0
			'Aplicaciones Favoritas', //explorer1
			'Documentos', //explorer2  | I do suggest removing the redundancy here. "Documentos, Fotos, Música, Video" is enough. You decide.
			'Fotos', //explorer3
			'Música', //explorer4
			'Video' //explorer5
		],
		settings: [
			'Nombre de usuario', //setting0
			'Introduzca su nombre de usuario', //setting1
			'Ocultar nombres de iconos', //setting2
			'Esta configuración oculta los nombres de las aplicaciones del Explorador y de las aplicaciones fijadas.', //setting3
			'Formato de 24 horas', //setting4
			'Esta configuración habilita el formato de 24 horas.', //setting5
			'Desactivar Desvanecimiento de desplazamiento', //setting6 | This one sounds odd, however I can't think of a better way to express it either.
			'Esta configuración desactiva el efecto de atenuación al desplazarse.', //setting7
			'Ocultar los botones de "Atrás"', //setting8 | I do recommend using "Atrás" within quotes here. It can be confusing without them.
			'Esta configuración elimina el botón de volver a la pagina atrás de los widgets respectivos cuando no están en uso ', //setting9
			'Fuerza de desenfoque', //setting10
			'Radio de borde', //setting11
			'Configuración relacionada con la barra de tareas', //setting12
			'Desactivar el efecto de ruido de fondo', //setting13
			'Deshabilite el efecto de ruido de fondo que está habilitado de forma predeterminada en la barra de tareas', //setting14
			'Deshabilitar borde', //setting15
			'Desactivar el efecto Borde de la barra de tareas', //setting16
			// "que está habilitado de forma predeterminada en el" Is redundancy because if you're disabling something it's been previously enabled. I suggest:
			// 'Desactivar el efecto Borde de la barra de tareas'
			'Botón de inicio monocromático', //setting17
			'Haga que el botón de inicio de un color sea similar a Windows 10, es decir, oscuro o claro.', //setting18
			'Configuración relacionada con el Menú de Inicio', //setting19
			'Desactivar el efecto de ruido de fondo ', //setting20
			'Desactivar el efecto de ruido de fondo del Menú de Inicio.', //setting21
			// Same as Setting 16. | 'Deshabilite el efecto de ruido de fondo del Menú de Inicio.'
			'Deshabilitar borde', //setting22
			'Deshabilite el efecto Borde del Menú de Inicio.', //setting23
			// Same as setting 21, 'Deshabilite el efecto Borde del Menú de Inicio.'
			'Configuración relacionada con los Widgets', //setting24
			'Habilitar el efecto de ruido de fondo', //setting25
			'Habilitar el efecto de ruido de fondo de los widgets.', //setting26
			'Deshabilitar borde', //setting27
			'Deshabilite el efecto Borde de los Widgets.', //setting28
			'Configuración relacionada con el centro de control', //setting29
			'Desactivar el efecto de ruido de fondo', //setting30
			'Desactivar el efecto de ruido de fondo del Centro de Control.', //setting31
			'Deshabilitar borde', //setting32
			'Desactivar el efecto Borde del Centro de Control.', //setting33
			'Configuración relacionada con el menú contextual', //setting34
			'Desactivar el efecto de ruido de fondo', //setting35
			'Desactivar el efecto de ruido de fondo del menú contextual.', //setting36
			'Deshabilitar borde', //setting37
			'Desactivar el efecto Borde del menú contextual.', //setting38
			'Restablecer la configuración de widgets individuales', //setting39
			'Restablecer la configuración de apariencia', //setting40
			'Restablecer la configuración principal', //setting41
			'Ocultar fondo', //setting42
			'Esta configuración oculta el fondo del widget del explorador.', //setting43
			'Configuración del widget del explorador', //setting44
			'Ocultar títulos de carpetas', //setting45
			'Esta configuración oculta los títulos de las carpetas del widget del explorador.', //setting46
			'Utilice sus propias aplicaciones en las páginas', //setting47
			'Esta configuración elimina la organización automática de aplicaciones en todas las páginas del explorador y le da la libertad de agregar o eliminar las suyas propias. (Sugerencia: si ve la página completamente en blanco después de deshabilitarla, actualice el widget).', //setting48
			'Ocultar el botón Agregar aplicaciones ', //setting49
			'Esta configuración elimina el botón que permite agregar más aplicaciones en carpetas / páginas. Útil para fines de configuración / captura de pantalla para ocultar ese feo botón + en el Explorador. (Sugerencia: habilite esta opción, solo cuando haya anclado completamente las aplicaciones deseadas).', //setting50
			'Ocultar el botón Agregar carpeta', //setting51
			'Esta configuración elimina el botón que permite agregar más páginas de carpetas. Útil para fines de configuración / captura de pantalla para ocultar ese feo botón "Agregar carpeta" en la barra lateral del Explorador. (Sugerencia: habilite esta opción, solo cuando haya anclado completamente las carpetas deseadas).', //setting52
			'Configuración del widget meteorológico', //setting53
			'Desactivar color degradado', //setting54
			'Esta configuración elimina el efecto de degradado del widget y lo convierte en el color predeterminado del panel de la ventana. (Como Explorador, Música, Configuración, etc.)', //setting55
			'Hágalo compacto', //setting56
			'Esta configuración minimiza el relleno entre los diferentes elementos dentro del Widget, lo que significa que lo hace más pequeño / compacto si lo desea. (Sugerencia: actualice el widget para obtener mejores resultados)', //setting57
			'Configuración del widget de música', //setting58
			'Hágalo compacto', //setting59
			'Esta configuración minimiza el relleno entre diferentes elementos dentro del Widget, lo que significa que lo hace más pequeño / compacto si lo desea. (Sugerencia: actualice el widget para obtener mejores resultados)', //setting60
			'Configuración del widget principal ', //setting61
			'Todas las configuraciones del widget principal aparecen aquí', //setting62
			'Individual Widget Settings', //setting63
			'Configuración de widget individual', //setting64
			'Configuración de apariencia', //setting65
			'Configuraciones relacionadas con el aspecto de los componentes', //setting66
			'Configuraciones de color', //setting67
			'Configuraciones relacionadas con los colores de los componentes', //setting68
			'Restablecer la configuración de color', //setting69Nice:)
			'Colores del botón de inicio', //setting70
			'El color de resaltado del botón de inicio', //setting71
			'El color que crea el efecto degradado en el botón de inicio.', //setting72
			'Color del botón de inicio', //setting73
			'El color de fondo del botón de inicio principal.', //setting74
			'Color del botón de inicio pulsado', //setting75
			'El color de fondo del botón de inicio principal cuando el menú Inicio está abierto.', //setting76
			'Colores de los componentes del widget', //setting77
			'Color de fondo', //setting78
			'Color de fondo de todos los componentes.', //setting79
			'Color del botón de fondo', //setting80
			'Color de fondo de todos los componentes del botón.', //setting81
			'Color de texto', //setting82
			'Color de todos los componentes del texto.', //setting83
			'Color del borde', //setting84
			'Color de todos los componentes del borde. ' //setting85
		],
		greets: ['Buenos Días', 'Buenas Tardes', 'Buenas Noches'],
		weekday: [
			'Domingo',
			'Lunes',
			'Martes',
			'Miércoles',
			'Jueves',
			'Viernes',
			'Sábado'
		],
		sday: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
		month: [
			'Enero',
			'Febrero',
			'Marzo',
			'Abril',
			'Mayo',
			'Junio',
			'Julio',
			'Agosto',
			'Septiembre',
			'Octubre',
			'Noviembre',
			'Diciembre'
		],
		smonth: [
			'Ene',
			'Feb',
			'Mar',
			'Abr',
			'Mayo',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dic'
		],
		condition: [
			'Tornado',
			'Tormenta Tropical',
			'Huracán',
			'Tormentas Eléctricas Severas',
			'Tormentas Eléctricas',
			'Mezcla de Lluvia y Nieve',
			'Mezcla de lluvia y aguanieve', // ¿What?
			'Mezcla de nieve y aguanieve', // ¿?
			'Llovizna helada',
			'Llovizna',
			'Lluvia bajo cero',
			'Chubascos',
			'Chubascos',
			'Ráfagas de nieve',
			'Ligeras precipitaciones de nieve',
			'Viento y nieve',
			'Nieve',
			'Granizo',
			'Aguanieve',
			'Polvareda',
			'Neblina',
			'Neblina', // Never heard of this, please explain it to me in a DM
			'Humo',
			'Tempestad',
			'Vendaval',
			'Frío',
			'Nublado ',
			'Mayormente nublado',
			'Mayormente nublado',
			'despejado',
			'despejado',
			'Despejado',
			'Soleado',
			'Lindo',
			'Lindo',
			'Mezcla de lluvia y granizo',
			'Caluroso',
			'Tormentas eléctricas aisladas',
			'Tormentas eléctricas dispersas',
			'Tormentas eléctricas dispersas',
			'Chubascos dispersos',
			'Nieve fuerte',
			'Precipitaciones de nieve dispersas',
			'Nieve fuerte',
			'despejado',
			'Lluvia con truenos y relámpagos',
			'Precipitaciones de nieve',
			'Tormentas aisladas',
			'No disponible'
		]
	}
};

if (!translate[current]) {
	current = 'en';
}

var currentTranslate = translate[current];
