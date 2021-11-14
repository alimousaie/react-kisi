import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	Loader: {
		borderRadius: '50%',
		color: '#521751',
		fontSize: '11px',
		textIndent: '-99999em',
		margin: '55px auto',
		position: 'relative',
		width: '10em',
		height: '10em',
		boxShadow: 'inset 0 0 0 1em',
		transform: 'translateZ(0)',
		'&::before': {
			// borderRadius: '50%',
			position: 'absolute',
			content: '',
			width: '5.2em',
			height: '10.2em',
			background: '#fff',
			borderRadius: '10.2em 0 0 10.2em',
			top: '-0.1em',
			left: '-0.1em',
			transformOrigin: '5.2em 5.1em',
			animation: 'load2 2s infinite ease 1.5s',
		},
		'&::after': {
			// borderRadius: '50%',
			position: 'absolute',
			content: '',
			width: '5.2em',
			height: '10.2em',
			background: '#fff',
			borderRadius: '0 10.2em 10.2em 0',
			top: '-0.1em',
			left: '5.1em',
			transformOrigin: '0px 5.1em',
			animation: ' load2 2s infinite ease',
		},
	},
}));

const Spinner = () => {
	const classes = useStyles();

	return <div className={classes.Loader}>Loading...</div>;
	// <div>Loading...</div>
};

export default Spinner;
