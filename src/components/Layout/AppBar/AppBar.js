import AppBarMaterial from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
}));

export default function AppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBarMaterial position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Obras Públicas
					</Typography>
					<Button color="inherit">Login</Button>
					<Button color="inherit">Register</Button>
				</Toolbar>
			</AppBarMaterial>
		</div>
	);
}
