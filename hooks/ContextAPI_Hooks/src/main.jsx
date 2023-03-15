import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CounterContexProvider } from './contexts/CounterContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterContexProvider>
			<App />
		</CounterContexProvider>
	</React.StrictMode>,
);
