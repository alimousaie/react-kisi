import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles, Grid, OutlinedInput } from '@material-ui/core';
import { groupsActions } from '../../store';

const useStyles = makeStyles((theme) => ({
	searchBox: {
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: theme.spacing(0, 2),
	},
	searchInput: {
		width: '80%',
		borderRadius: '30px',
		height: '40px',
	},
	searchButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

const SearchBox = ({ placeholder }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const searchTextChangeHandler = (event) => {
		dispatch(
			groupsActions.filterGroups(event.target.value.trim().toLowerCase())
		);
	};

	return (
		<Grid container spacing={2} className={classes.searchBox}>
			<Grid item xs={12} md={8}>
				<OutlinedInput
					onChange={searchTextChangeHandler}
					className={classes.searchInput}
					placeholder={placeholder}
				/>
			</Grid>
		</Grid>
	);
};

export default SearchBox;
