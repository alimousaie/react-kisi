import React from 'react';
import { Link } from 'react-router-dom';

import {
	makeStyles,
	Button,
	Divider,
	ListItem,
	ListItemText,
	Avatar,
} from '@material-ui/core';

import { Group as GroupIcon, MeetingRoom } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	leftMargin: {
		marginRight: theme.spacing(2),
	},
	divider: {
		height: '30px',
		alignSelf: 'center',
	},
	fullWidth: {
		width: '100%',
	},
	avatar: {
		margin: '0 7px',
		height: '32px',
		width: '32px',
	},
	itemLink: {
		color: '#000000de',
		width: '100%',
		textDecoration: 'none',
		'&:hover': {
			backgroundColor: theme.palette.action.hover,
		},
	},
	linkContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		padding: '2px 5px',
	},
}));

const GroupListItem = ({ group }) => {
	const classes = useStyles();

	return (
		<ListItem>
			<Link to={`/groups/${group.id}`} className={classes.itemLink}>
				<div className={classes.linkContainer}>
					<Avatar className={classes.avatar}>
						<GroupIcon />
					</Avatar>
					<ListItemText
						primary={group.name}
						secondary={group.description || 'No description'}
					/>
					<Divider
						orientation='vertical'
						flexItem
						component='div'
						className={classes.divider}
					/>
					<Button
						startIcon={<MeetingRoom />}
						className={classes.leftMargin}
						component='span'
						primary={group.locksCount}
					>
						{group.locksCount}
					</Button>
				</div>
			</Link>
		</ListItem>
	);
};

export default GroupListItem;
