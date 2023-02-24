import P from 'prop-types';
import { useReducer} from 'react';
import {PostsContext} from './context';
import {data} from './Postsdata';
import {postsReducer} from './reducer';

export const PostsProvider = ({children}) => {
	const [postsState, postsDispatch] = useReducer(postsReducer, data);

	return (
		<PostsContext.Provider
			value={{postsState, postsDispatch}}>
			{children}
		</PostsContext.Provider>);
};

PostsProvider.propTypes = {
	children: P.node.isRequired,
};
