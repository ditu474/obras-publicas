import AppBarMaterial from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AuthContext from 'context/AuthContext/auth-context';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './AppBar.module.css';

export default function AppBar() {
	const userCtx = useContext(AuthContext);
	const history = useHistory();

	const signOutHandler = () => {
		userCtx.signOut(() => {
			history.replace('/login');
		});
	};

	const signOut = userCtx.user && (
		<Button onClick={signOutHandler} color="inherit">
			Salir
		</Button>
	);

	const registro = userCtx.user && userCtx.user.isAdmin && (
		<Button>
			<Link to="/registro" className={styles.link}>
				Registro
			</Link>
		</Button>
	);

	return (
		<AppBarMaterial position="static">
			<Toolbar className={`container ${styles.toolbar}`}>
				<Link to="/" className={styles.link}>
					<h3>Obras Públicas</h3>
				</Link>
				<nav>
					{signOut}
					{registro}
				</nav>
			</Toolbar>
		</AppBarMaterial>
	);
}
