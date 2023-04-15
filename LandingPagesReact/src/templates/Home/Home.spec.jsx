import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';


test('renders learn react link', () => {
	const {debug} = renderTheme(<Home />);
	const button = screen.getByRole('button', {name: 'Normal Button'});

	expect(button).toHaveStyle({
		color: 'palevioletred'
	});
	expect(button).toHaveStyleRule('background', 'transparent');

});
