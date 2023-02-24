import * as types from './types';

export const postsReducer = (state, action) => {
	switch (action.type) {
	case types.POSTS_SUCESSES: {
		console.log(action.type);
		return {...state, posts: action.payload, loading: false};
	}
	case types.POSTS_LOADING: {
		console.log(action.type);
		return {...state,loading: true};
	}
	}

	console.log('N encontrei action');
	return {...state};
};
