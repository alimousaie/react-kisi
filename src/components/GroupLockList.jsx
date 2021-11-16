import React from 'react';

import { List } from '@material-ui/core';
import GroupLockListItem from './GroupLockListItem';

const GroupLockList = ({ assignedLocks, onDelete }) => {
	if (assignedLocks.length == 0) return <p>No lock assigned to the group</p>;

	return (
		<List>
			{assignedLocks.map((glock) => {
				return (
					<div key={'gl-' + glock.id}>
						<GroupLockListItem groupLock={glock} recordDeleted={onDelete} />
					</div>
				);
			})}
		</List>
	);
};

export default GroupLockList;
