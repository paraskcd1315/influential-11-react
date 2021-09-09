import { CLOSE_COLOR_PICKER, OPEN_COLOR_PICKER } from '../actions/types';

const initialState = {
	color: '',
	colorInputName: '',
	colorLabel: ''
};

function colorPickerReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case OPEN_COLOR_PICKER: {
			return {
				...state,
				color: payload.color,
				colorInputName: payload.colorInputName,
				colorLabel: payload.colorLabel
			};
		}

		case CLOSE_COLOR_PICKER: {
			return {
				...state,
				color: '',
				colorInputName: '',
				colorLabel: ''
			};
		}

		default:
			return state;
	}
}

export default colorPickerReducer;
