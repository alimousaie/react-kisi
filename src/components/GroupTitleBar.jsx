import React from "react";
import { useSelector } from 'react-redux';
import TitleBar from './UI/TitleBar';

const GroupTitleBar = () => {
    const groupCount = useSelector((state) => state.group.groups.length);

    return (
        <TitleBar title={'Group' + (groupCount > 1 ? 's' : '')}
            badge={groupCount}
            subtitle="Add members to groups and assign different access rights"
        />
    );
};

export default GroupTitleBar;
