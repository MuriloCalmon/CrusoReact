
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider/counterIndex';
import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';

function App() {

	return (
		<>
			<CounterProvider>
				<PostsProvider>
					<div>
						<Posts/>
					</div>
				</PostsProvider>
			</CounterProvider>
		</>
	);
}

export default App;
