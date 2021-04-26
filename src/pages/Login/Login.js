import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from 'components/UI/Snackbar/Snackbar';
import { useState } from 'react';
import styles from './Login.module.css';
import LoginForm from './LoginForm';

export default function Login() {
	const [open, setOpen] = useState(false);

	const openSnackbarHandler = () => {
		setOpen(true);
	};

	const closeSnackbarHandler = () => {
		setOpen(false);
	};

	return (
		<div className={styles.content}>
			<h2>Login</h2>
			<Card className={styles.card}>
				<CardContent>
					<LoginForm onLogin={openSnackbarHandler} />
				</CardContent>
			</Card>
			{open && (
				<Snackbar
					open={open}
					onClose={closeSnackbarHandler}
					message="Login enviado"
				/>
			)}
		</div>
	);
}
