import { UPDATE_MEDIA } from '../actions/types';

const initialState = window.api.media;

function mediaReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_MEDIA:
			return {
				...state,
				isPlaying: payload.isPlaying,
				isShuffleEnabled: payload.isShuffleEnabled,
				isStopped: payload.isStopped,
				nowPlaying: payload.nowPlaying,
				nowPlayingApplication: payload.nowPlayingApplication,
				volume: payload.volume
			};

		default:
			return state;
	}
}

export default mediaReducer;
