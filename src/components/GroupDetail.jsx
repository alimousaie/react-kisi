import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { groupsActions, locksActions, groupLocksActions } from '../store';

import {
	Button,
	Card,
	Container,
	CardActions,
	CardContent,
	Divider,
	List,
	makeStyles,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
} from '@material-ui/core';

import GroupLockListItem from './GroupLockListItem';
import Snipper from './UI/Spinner';
import TitleBar from './UI/TitleBar';
import AssignLock from './AssignLock';
import GroupLockList from './GroupLockList';

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
	dialogContent: {
		padding: theme.spacing(0),
	},
}));

const GroupDetail = () => {
	const classes = useStyles();
	const { groupId } = useParams();
	const dispatch = useDispatch();
	const groups = useSelector((state) => state.group.groups);
	const groupLocks = useSelector((state) => state.groupLock.groupLocks);
	const [assignedLocks, setAssignedLocks] = useState([]);
	const [group, setGroup] = useState({});
	const [openDialog, setOpenDialog] = useState(false);

	useEffect(() => {
		if (group && Object.keys(group).length === 0) {
			dispatch(groupsActions.fetchGroups());
		}

		dispatch(locksActions.fetchLocks());
		dispatch(groupLocksActions.fetchGroupLocks(+groupId));
	}, []);

	useEffect(() => {
		const id = +groupId;
		const selectedGroup = groups.find((grp) => grp.id === id);
		if (selectedGroup !== null && selectedGroup !== undefined) {
			setGroup(selectedGroup);
		}
	}, [groups]);

	useEffect(() => {
		if (groupLocks[+groupId] !== null && groupLocks[+groupId] !== undefined) {
			setAssignedLocks(groupLocks[+groupId].data);
		}
	}, [groupLocks]);

	const unassingAllLock = () => {
		dispatch(
			groupLocksActions.unassignAllLock(+groupId, groupLocks[+groupId].data)
		);
	};

	const closeDialog = () => {
		setOpenDialog(false);
	};

	const clearAssignedLockList = () => {
		setAssignedLocks([]);
	};

	return (
		<Container className={classes.container}>
			<TitleBar
				title={group.name}
				subtitle={group.description || 'No description'}
			/>

			<Card className={classes.card}>
				<CardContent>
					<Typography gutterBottom variant='h5'>
						Assigned locks
					</Typography>

					<Divider />
					<div style={{ clear: 'both' }}></div>

					<GroupLockList
						assignedLocks={assignedLocks}
						onDelete={clearAssignedLockList}
					/>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						color='primary'
						onClick={() => setOpenDialog(true)}
					>
						Assign lock to group
					</Button>
					<Button size='small' color='primary' onClick={unassingAllLock}>
						Unassing all locks
					</Button>
				</CardActions>
			</Card>

			{openDialog && (
				<Dialog
					open={openDialog}
					onClose={closeDialog}
					className={classes.dialog}
				>
					<DialogTitle>{group.name}</DialogTitle>
					<Divider />
					<DialogContent className={classes.dialogContent}>
						<AssignLock groupId={groupId} onCloseClick={closeDialog} />
					</DialogContent>
				</Dialog>
			)}
		</Container>
	);
};

export default GroupDetail;
