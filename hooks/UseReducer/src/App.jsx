import { useReducer } from 'react';
import './App.css';

//eslint-disable-next-line
const globalState = {
	title: 'Titulo do contexto',
	body: 'Body do contexto',
	counter: 0,
};

const reducer = (state, action) => {
	switch(action.type) {
	case 'muda' :{
		console.log('Mudou!');
		return {...state, title: 'Cliquei', counter: action.payload};
	}
	case 'inverte' :{
		const {title} = state;
		console.log('Inverte!');
		return {...state, title:title.split('').reverse().join(''), counter: state.counter + 1};
	}
	}

	console.log('Nenhuma ACTION encontrada');
	return {...state};
};

function App() {
	const [state, dispach] = useReducer(reducer, globalState);
	const { title, counter} = state;

	return (
		<>
			<h1>{title} {counter}</h1>
			<button onClick={() => dispach({type: 'muda', payload: new Date().toLocaleString('pt-br')})}>Click</button>
			<button onClick={() => dispach({type: 'inverte'})}>Inverter</button>
			<button onClick={() => dispach({type: ''})}>Sem action</button>
		</>
	);
}

export default App;
