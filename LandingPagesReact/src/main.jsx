import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import Home from './templates/Home';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Home />
			<GlobalStyles />
		</ThemeProvider>
	</React.StrictMode>,
);
