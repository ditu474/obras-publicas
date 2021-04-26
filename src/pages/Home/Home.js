import AuthContext from 'context/AuthContext/auth-context';
import { useContext } from 'react';
import styles from './Home.module.css';

export default function Home() {
	const authCtx = useContext(AuthContext);

	const userType = authCtx.user.isAdmin
		? 'Eres Administrador'
		: 'Eres Operario';

	return (
		<div className={`container ${styles.content}`}>
			<h1>Bienvenido</h1>
			<p>Esta es la app de control de multas de contratos</p>
			<p>{userType}</p>
		</div>
	);
}
