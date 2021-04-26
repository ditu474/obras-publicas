import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
	return (
		<div className={styles.content}>
			<h1 className={styles.title}>404</h1>
			<p>Esta página no ha sido encontrada</p>
			<Button variant="contained" color="secondary">
				<Link to="/" className={styles.link}>
					Ir a inicio
				</Link>
			</Button>
		</div>
	);
}
