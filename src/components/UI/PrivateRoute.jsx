import React from 'react';
import { useSelector } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isLogedin = useSelector((state) => state.auth.isLogedin);

	return (
		<Route
			{...rest}
			render={(props) =>
				isLogedin ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/login', state: { from: props.location } }}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
