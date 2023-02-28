import * as types from './counterTypes';

export const counterReducer = (state, action) => {
	switch (action.type) {
	case types.INCREMENT_COUNTER: {
		return {...state, counter: state.counter + 1};
	}
	case types.DECREMENT_COUNTER: {
		return {...state, counter: state.counter - 1};
	}
	}
};
