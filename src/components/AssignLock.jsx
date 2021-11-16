import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { groupLocksActions, locksActions } from '../store';

import {
	makeStyles,
	Button,
	Select,
	Container,
	MenuItem,
	Chip,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	chipItem: {
		margin: theme.spacing(0.5),
	},
	container: {
		minWidth: 400,
		paddingTop: theme.spacing(4),
	},
	item: {
		marginBottom: theme.spacing(3),
	},
	chip: {
		width: 'auto',
	},
	listContiner: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		listStyle: 'none',
		p: 0.5,
		m: 0,
	},
}));

const AssignLock = (props) => {
	const { groupId, onCloseClick } = props;
	const classes = useStyles();
	const dispatch = useDispatch();
	const groupLocks = useSelector((state) => state.groupLock.groupLocks);
	const locks = useSelector((state) => state.lock.locks);

	const [selectedLocks, setSelectedLocks] = useState([]);

	useEffect(() => {
		if (locks === null || !locks.length) {
			dispatch(locksActions.fetchLocks());
		}

		dispatch(groupLocksActions.fetchGroupLocks(+groupId));
	}, []);

	const handleDelete = (unselectedLock) => {
		setSelectedLocks(
			selectedLocks.filter(
				(selectedLock) => selectedLock.key !== unselectedLock.key
			)
		);
	};

	const handleChange = (event) => {
		const lockId = +event.target.value;
		const lock = locks.find((lock) => lock.id === lockId);

		if (lock !== undefined) {
			setSelectedLocks((prevState) => [
				...prevState,
				{ key: lock.id, label: lock.name },
			]);
		}
	};

	const handleSave = () => {
		let pairsOfGroupLocks = selectedLocks.map((chip) => ({
			groupId: groupId,
			lockId: chip.key,
		}));
		const assingedLocksList = groupLocks[+groupId].data.map((gl) => gl.lock.id);

		pairsOfGroupLocks = pairsOfGroupLocks.filter(
			(groupLock) => !assingedLocksList.includes(groupLock.lockId)
		);
		dispatch(groupLocksActions.assignLock(pairsOfGroupLocks));
		onCloseClick();
	};

	return (
		<Container className={classes.container}>
			<div className={classes.item}>
				<Select fullWidth onChange={handleChange}>
					<MenuItem value='0'>
						<em>None</em>
					</MenuItem>
					{locks.map((lock) => (
						<MenuItem key={lock.id} value={lock.id}>
							{lock.name}
						</MenuItem>
					))}
				</Select>
			</div>
			<div className={classes.item}>
				<div className={classes.listContiner}>
					{selectedLocks.map((data) => {
						return (
							<div key={data.key} className={classes.item}>
								<Chip label={data.label} onDelete={() => handleDelete(data)} />
							</div>
						);
					})}
				</div>
			</div>
			<div className={classes.item}>
				<Button
					variant='outlined'
					color='primary'
					style={{ marginRight: 20 }}
					onClick={handleSave}
				>
					Add
				</Button>
				<Button color='secondary' onClick={onCloseClick}>
					Cancel
				</Button>
			</div>
		</Container>
	);
};

export default AssignLock;
