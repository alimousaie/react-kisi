import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { groupsActions } from '../store';

import {
	Container,
	makeStyles,
	CardContent,
	Card,
	Divider,
} from '@material-ui/core';
import GroupTitleBar from './GroupTitleBar';
import SearchBox from './UI/SearchBox';
import Spinner from './UI/Spinner';
import GroupList from './GroupList';

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(3),
	},
	card: {
		boxShadow: '0 0 30px 0 rgb(0 0 0 / 10%)',
		borderRadius: '20px',
		marginTop: theme.spacing(3),
	},
	item: {
		marginBottom: theme.spacing(3),
	},
	grayButton: {
		color: '#8c94a9',
		borderColor: '#8c94a9',
		borderRadius: '30px',
	},
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

const Groups = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.group.loading);

	useEffect(() => {
		dispatch(groupsActions.fetchGroups());
	}, []);

	return (
		<Container className={classes.container}>
			<GroupTitleBar />

			<Card className={classes.card}>
				<CardContent>
					<SearchBox placeholder='Search Groups' />

					<Divider />

					{loading ? <Spinner /> : <GroupList />}
					<Divider />
				</CardContent>
			</Card>
		</Container>
	);
};

export default Groups;
