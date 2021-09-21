/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

const timeFunctions = {
	d: '',
	twentyfour: false,
	zeroPadding: false,
	greet: window.currentTranslate.greets,
	textDay: window.currentTranslate.weekday,
	shortTextDay: window.currentTranslate.sday,
	textMonth: window.currentTranslate.month,
	shortTextMonth: window.currentTranslate.smonth,
	hour: function () {
		let hour =
			timeFunctions.twentyfour === true
				? timeFunctions.d.getHours()
				: ((timeFunctions.d.getHours() + 11) % 12) + 1;
		hour =
			timeFunctions.zeroPadding === true
				? hour < 10
					? '0' + hour
					: '' + hour
				: hour;
		return hour;
	},
	rawHour: function () {
		return timeFunctions.d.getHours();
	},
	minute: function () {
		return timeFunctions.d.getMinutes() < 10
			? '0' + timeFunctions.d.getMinutes()
			: timeFunctions.d.getMinutes();
	},
	rawMinute: function () {
		return timeFunctions.d.getMinutes();
	},
	seconds: function () {
		return timeFunctions.d.getSeconds() < 10
			? '0' + timeFunctions.d.getSeconds()
			: timeFunctions.d.getSeconds();
	},
	rawSeconds: function () {
		return timeFunctions.d.getSeconds();
	},
	ampm: function () {
		if (timeFunctions.twentyfour === true) {
			return ' ';
		} else {
			return timeFunctions.d.getHours() >= 12 ? 'pm' : 'am';
		}
	},
	date: function () {
		return timeFunctions.d.getDate();
	},
	dateNum: function () {
		return timeFunctions.zeroPadding === true
			? timeFunctions.d.getDate() < 10
				? '0' + timeFunctions.d.getDate()
				: '' + timeFunctions.d.getDate()
			: timeFunctions.d.getDate();
	},
	day: function () {
		return timeFunctions.d.getDay();
	},
	month: function () {
		return timeFunctions.d.getMonth();
	},
	monthNum: function () {
		return timeFunctions.zeroPadding === true
			? timeFunctions.d.getMonth() < 10
				? '0' + (timeFunctions.d.getMonth() + 1)
				: timeFunctions.d.getMonth() + 1
			: timeFunctions.d.getMonth() + 1;
	},
	year: function () {
		return timeFunctions.d.getFullYear();
	},
	dayText: function () {
		return this.textDay[this.day()];
	},
	monthText: function () {
		return this.textMonth[this.month()];
	},
	sDayText: function () {
		return this.shortTextDay[this.day()];
	},
	sMonthText: function () {
		return this.shortTextMonth[this.month()];
	},
	greetings: function () {
		if (this.rawHour() < 12) return this.greet[0];
		else if (this.rawHour() < 17) return this.greet[1];
		else return this.greet[2];
	}
};

const Time = (params) => {
	timeFunctions.d = new Date();
	if (params.twentyfour) {
		timeFunctions.twentyfour = params.twentyfour;
	}
	if (params.zeroPadding) {
		timeFunctions.zeroPadding = params.zeroPadding;
	}
	params.callback(timeFunctions);
};
