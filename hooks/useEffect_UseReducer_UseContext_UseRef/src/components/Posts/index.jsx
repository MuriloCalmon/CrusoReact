import { useContext, useEffect, useRef } from 'react';
import { decrementCounter, incrementCounter } from '../../contexts/CounterProvider/counterAction';
import { CounterContext } from '../../contexts/CounterProvider/counterContext';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
	const isMounted = useRef(true);
	const postsContext = useContext(PostsContext);
	const { postsState, postsDispatch } = postsContext;

	const counterContext = useContext(CounterContext);
	const {counterState, counterDispatch} = counterContext;

	console.log(isMounted.current);
	useEffect(() => {
		loadPosts(postsDispatch).then((dispatch) => {
			if (isMounted.current) {
				dispatch();
			}
		});

	}, [postsDispatch]);

	return (
		<div>
			<button onClick={() => incrementCounter(counterDispatch)} >Soma {counterState.counter}</button>
			<button onClick={() => decrementCounter(counterDispatch)} >Subtrai {counterState.counter}</button>
			<h1>POSTS</h1>
			{postsState.loading && (
				<p>
					<strong>Carregando posts...</strong>
				</p>
			)}

			{postsState.posts.map((p) => (
				<p key={p.id}>{p.title}</p>
			))}
		</div>
	);
};
