import { CounterContext } from './counterContext';
import P from 'prop-types';
import { useReducer } from 'react';
import { counterData } from './counterData';
import { counterReducer } from './counterReducer';

export const CounterProvider = ({children}) => {

	const [counterState, counterDispatch] = useReducer(counterReducer, counterData);
	return (
		<CounterContext.Provider value={{counterState, counterDispatch}}>
			{children}
		</CounterContext.Provider>
	);

};

CounterProvider.propTypes = {
	children: P.node.isRequired
};
