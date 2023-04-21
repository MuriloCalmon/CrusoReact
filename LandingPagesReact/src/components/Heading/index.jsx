import { Title } from './styles';
import P from 'prop-types';

export const Heading = ({ children, light = false }) => {
	return <Title light={light}>{children}</Title>;
};

Heading.propTypes = {
	children: P.node.isRequired,
	light: P.bool.isRequired,
};
