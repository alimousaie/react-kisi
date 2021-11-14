import React from 'react';
import { useDispatch } from 'react-redux';
import { groupLocksActions } from '../store';

import {
	makeStyles,
	ListItem,
	ListItemText,
	IconButton,
	Avatar,
} from '@material-ui/core';

import { MeetingRoom, Delete as DeleteIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	avatar: {
		margin: '0 7px',
		height: '32px',
		width: '32px',
	},
}));

const GroupLockListItem = ({ groupLock, recordDeleted }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const removeLockFromGroup = () => {
		dispatch(groupLocksActions.unassignLock(groupLock.groupId, groupLock.id));
		recordDeleted();
	};

	return (
		<div key={'gi-' + groupLock.id}>
			<ListItem>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
						padding: '2px 5px',
					}}
				>
					<Avatar className={classes.avatar}>
						<MeetingRoom />
					</Avatar>
					<ListItemText
						primary={groupLock.lock.name}
						secondary={groupLock.lock.description || 'No description'}
					/>
					<IconButton onClick={removeLockFromGroup}>
						<DeleteIcon />
					</IconButton>
				</div>
				{/* </Button> */}
			</ListItem>
		</div>
	);
};

export default GroupLockListItem;
