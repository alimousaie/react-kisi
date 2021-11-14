import React from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { store } from './store';
import Layout from './components/Layout/Layout';
import Groups from './components/Groups';
import GroupDetail from './components/GroupDetail';
import SignIn from './components/SignIn';
import PrivateRoute from './components/UI/PrivateRoute';

const App = () => {
	const routes = (
		<Switch>
			<PrivateRoute exact path='/' component={Groups} />
			<PrivateRoute path='/groups/:groupId' component={GroupDetail} />
			<Route path='/login' component={SignIn} />
			<Redirect from='*' to='/' />
		</Switch>
	);

	return (
		<Provider store={store}>
			<Router>
				<Layout>{routes}</Layout>
			</Router>
		</Provider>
	);
};

export default App;
