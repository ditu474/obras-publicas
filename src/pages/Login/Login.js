import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from 'components/UI/Snackbar/Snackbar';
import AuthContext from 'context/AuthContext/auth-context';
import { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Login.module.css';
import LoginForm from './LoginForm';

export default function Login() {
	const [open, setOpen] = useState(false);
	const authCtx = useContext(AuthContext);
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	const openSnackbarHandler = () => {
		authCtx.signIn(
			{
				isAdmin: true,
			},
			() => {
				history.replace(from);
			}
		);
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
