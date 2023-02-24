import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
	const isMounted = useRef(true);
	const postsContext = useContext(PostsContext);
	const { postsState, postsDispatch } = postsContext;

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
