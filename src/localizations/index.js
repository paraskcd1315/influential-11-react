/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { albanian } from './albanian';
import { english } from './english';
import { german } from './german';

let current =
	window.navigator.language.length >= 2
		? window.navigator.language.split('-')[0]
		: 'en';

const translate = {
	en: english,
	de: german,
	sq: albanian
};

if (!translate[current]) {
	current = 'en';
}

const currentTranslate = translate[current];

export default currentTranslate;
