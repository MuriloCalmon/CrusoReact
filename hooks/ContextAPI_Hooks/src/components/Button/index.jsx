import P from 'prop-types';

const buttonStyles = {
	fontSize: '20px',
	borderRadius: '5px',
	marginTop: '10px',
	padding: '10px',
	backgroundColor: '#121214',
	color: '#fff'
};

export const Button = ({children, onButtonClick, disabled}) => {
	return (
		<div>
			<button disabled={disabled} style={buttonStyles} onClick={onButtonClick}>{children}</button>
		</div>
	);
};

Button.propTypes = {
	children: P.node.isRequired,
	onButtonClick: P.func.isRequired,
	disabled: P.bool,
};
