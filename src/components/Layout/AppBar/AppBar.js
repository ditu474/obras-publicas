import AppBarMaterial from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import styles from './AppBar.module.css';

export default function AppBar() {
	return (
		<AppBarMaterial position="static">
			<Toolbar className={`container ${styles.toolbar}`}>
				<Link to="/" className={styles.link}>
					<h3>Obras Públicas</h3>
				</Link>
				<nav>
					<Button>
						<Link to="/login" className={styles.link}>
							Login
						</Link>
					</Button>

					<Button>
						<Link to="/registro" className={styles.link}>
							Registro
						</Link>
					</Button>
				</nav>
			</Toolbar>
		</AppBarMaterial>
	);
}
