import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(10, 15),
	},
}));

const Main = ({ children }) => {
	const classes = useStyles();
	return <Container className={classes.container}>{children}</Container>;
};

export default Main;
