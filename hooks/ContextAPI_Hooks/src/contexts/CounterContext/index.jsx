import P from 'prop-types';
import { createContext, useContext, useState } from 'react';

const initialState = {
	counter: 0,
	loading: false,
};

const Context = createContext();

export const CounterContexProvider = ({children}) => {
	const [state, dispatch] = useState(initialState);

	return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

CounterContexProvider.propTypes = {
	children: P.node.isRequired
};

export const useCounterContext = () => {
	const context = useContext(Context);

	if (typeof context === 'undefined') {
		throw new Error('You have to use UseCounterContext inside <CounterContextProvider />');
	}

	return [...context];
};
