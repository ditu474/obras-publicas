import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './LoginForm.module.css';

export default function LoginForm(props) {
	/*guardar los estilos en la variable classes*/

	const formSubmitHandler = (event) => {
		event.preventDefault(); /*No se reinicia el form al darle al button*/
		props.onSignIn(); /*Propiedades de padre a hijo*/
	};

	return (
		<form onSubmit={formSubmitHandler} className={styles.form}>
			<div className={styles.textField}>
				<TextField
					id="id"
					label="Identificacion"
					variant="outlined"
					type="number"
				/>
			</div>
			<div className={styles.textField}>
				<TextField
					id="contraseña"
					label="Contraseña"
					variant="outlined"
					type="password"
				/>
			</div>
			<Button variant="contained" color="primary" type="submit">
				Entrar
			</Button>
		</form>
	);
}
