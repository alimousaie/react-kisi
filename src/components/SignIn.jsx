import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	Container,
	makeStyles,
	Button,
	CssBaseline,
	TextField,
	Box,
	Avatar,
	Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

import { authActions } from '../store';

const useStyles = makeStyles((theme) => ({
	box: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '20%',
		padding: '15px',
		borderRadius: '15px',
		boxShadow: '0 0 10px 2px #ced7db5c',
		background: '#fff',
		minHeight: '400px',
		position: 'relative',
	},
	submit: {
		position: 'absolute',
		bottom: '15px',
		left: '15px',
		width: 'calc(100% - 30px)',
	},
}));

const SignIn = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get('email');
		const password = data.get('password');
		dispatch(authActions.auth(email, password, history));
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box className={classes.box}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlined />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<Box component='form' onSubmit={handleSubmit} sx={{ mt: 6 }}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						sx={{ mt: 2 }}
					/>

					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Sign In
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default SignIn;
