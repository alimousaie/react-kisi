import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: '28px',
		fontWeight: 700,
		lineHeight: '34px',
	},
	badge: {
		marginLeft: theme.spacing(2),
		color: '#8c94a9',
	},
	subtitle: {
		color: '#8c94a9',
		fontSize: '14px',
		lineHeight: '18px',
	},
}));

const TitleBar = ({ title, subtitle, badge }) => {
	const classes = useStyles();
	return (
		<>
			<Typography
				gutterBottom
				variant='h3'
				component='div'
				className={classes.title}
			>
				{title} <span className={classes.badge}>{badge}</span>
			</Typography>
			<Typography
				variant='h6'
				component='div'
				color='textSecondary'
				className={classes.subtitle}
			>
				{subtitle}
			</Typography>
		</>
	);
};

export default TitleBar;
