import { Container, makeStyles, Typography ,Link } from "@material-ui/core";
import { Group } from "@material-ui/icons";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#26293F",
      color: "#fff",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));


const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <LinkRouter underline="hover" color="inherit" to="/">
        <div className={classes.item}>
          <Group className={classes.icon} />
          <Typography className={classes.text}>Groups</Typography>
        </div>
      </LinkRouter>
    </Container>
  );
};

export default Leftbar;
