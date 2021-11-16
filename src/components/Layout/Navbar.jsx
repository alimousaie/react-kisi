import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { placesActions } from '../../store';

const useStyles = makeStyles((theme) => ({
	appbar: {
		background: '#fff',
		color: '#000000',
		boxShadow: '0 5px 10px rgb(0 0 0 / 10%)',
	},
	logo: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(5),
	},
	place: {
		color: '#131840ad',
		fontSize: '14px',
	},
}));

const Navbar = () => {
	const classes = useStyles();
	const places = useSelector((state) => state.place.places);
	const isLogedIn = useSelector((state) => state.auth.isLogedIn);
	const dispatch = useDispatch();
	const [placeName, setPlaceName] = useState('');

	useEffect(() => {
		if (isLogedIn) {
			dispatch(placesActions.fetchPlaces());
		}
	}, [isLogedIn]);

	useEffect(() => {
		if (places.length > 0) {
			setPlaceName(places[0].name);
		}
	}, [places.length]);

	return (
		<AppBar position='fixed' className={classes.appbar}>
			<Toolbar className={classes.toolbar}>
				<Typography variant='h6' className={classes.logo}>
					<Logo />
				</Typography>
				<Typography variant='h6' components='span' className={classes.place}>
					{placeName}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
