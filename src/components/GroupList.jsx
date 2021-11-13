import React from 'react';
import { useSelector } from 'react-redux';

import { List } from '@material-ui/core';
import GroupListItem from './GroupListItem';

const GroupList = () => {
	const groups = useSelector((state) => state.group.filterdGroups);

	return (
		<List>
			{groups.map((group) => {
				return (
					<div key={`gr-` + group.id}>
						<GroupListItem group={group} />
					</div>
				);
			})}
		</List>
	);
};

export default GroupList;
