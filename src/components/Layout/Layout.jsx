import React from 'react';
import { Grid } from '@material-ui/core';
import Main from './Main';
import Leftbar from './Leftbar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Grid container>
				<Grid item sm={2} xs={2}>
					<Leftbar />
				</Grid>
				<Grid item sm={10} xs={10}>
					<Main>{children}</Main>
				</Grid>
			</Grid>
		</>
	);
};

export default Layout;
