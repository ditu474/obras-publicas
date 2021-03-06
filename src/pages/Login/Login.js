import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AuthContext from 'context/AuthContext/auth-context';
import { useContext } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import styles from './Login.module.css';
import LoginForm from './LoginForm';

export default function Login() {
	const authCtx = useContext(AuthContext);
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	const signInHandler = () => {
		authCtx.signIn(
			{
				isAdmin: false,
			},
			() => {
				history.replace(from);
			}
		);
	};

	if (authCtx.user) {
		return (
			<Redirect
				to={{
					pathname: '/',
				}}
			/>
		);
	}

	return (
		<div className={styles.content}>
			<h2>Login</h2>
			<Card className={styles.card}>
				<CardContent>
					<LoginForm onSignIn={signInHandler} />
				</CardContent>
			</Card>
		</div>
	);
}
