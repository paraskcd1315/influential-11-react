switch (MK1_ARG) {
	case 'airplaneMode':
		airplaneMode.setEnabled(!airplaneMode.isEnabled());
		break;

	case 'bluetooth':
		bluetooth.setEnabled(!bluetooth.isEnabled());
		break;

	case 'cellularData':
		confirm(
			'Influential 11',
			cellularData.isEnabled()
				? 'Are you sure you want to Disable Cellular Data?'
				: 'Are you sure you want to Enable Cellular Data?',
			(c) => {
				if (c) cellularData.setEnabled(!cellularData.isEnabled());
			}
		);

		break;

	case 'respring':
		confirm(
			'Influential 11',
			'Are you sure you want to Respring Device',
			(c) => {
				if (c) device.respring();
			}
		);

		break;

	case 'safemode':
		confirm(
			'Influential 11',
			'Are you sure you want to Safe mode Device',
			(c) => {
				if (c) device.safemode();
			}
		);

		break;

	case 'lock':
		device.lock();
		break;

	case 'lpm':
		lpm.setEnabled(!lpm.isEnabled());
		break;

	case 'wifi':
		wifi.setEnabled(!wifi.isEnabled());
		break;

	case 'darkMode':
		systemStyle.toggle(!systemStyle.isDark());
		break;
}
