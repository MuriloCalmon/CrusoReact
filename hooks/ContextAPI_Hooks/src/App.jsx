import { useCounterContext } from './contexts/CounterContext';

function App() {
	const [state, dispatch] = useCounterContext();
	return (
		<>
			<h1>OI</h1>
		</>
	);
}

export default App;
