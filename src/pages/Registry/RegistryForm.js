import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './RegistryForm.module.css';

export default function RegistryForm(props) {
	//props es el objeto que por defecto todos los componentes de react tienen acceso, alli se encuentran por ejemplo las propiedades que le envia el padre al componente hijo

	const formSubmitHandler = (event) => {
		//el "event" es una propiedad que por defecto se tiene acceso cuando se aplica un Evento en un elemento de HTML, alli se puede encontrar por ejemplo las propiedades del elemento el cual inicio el evento.
		event.preventDefault(); /*No se reinicia el form al darle al button*/
		props.onRegistry(); /*Propiedades de padre a hijo*/
	};

	return (
		<form onSubmit={formSubmitHandler} className={styles.form}>
			{/*cuando se le de submit envia el formulario a la funcion formSubmitHandler y aparte llama a la clase del form qu elo hace flex y lo agrupa todo en columna */}
			<div className={styles.textField}>
				<TextField
					id="id"
					label="Identificacion"
					variant="outlined"
					type="number"
				/>
			</div>
			<div className={styles.textField}>
				<TextField /*propio del '@material-ui/core/TextField'; si fuera html este seria nuestro input */
					id="email"
					label="Correo"
					variant="outlined"
					type="email"
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
			<div className={styles.textField}>
				<TextField
					id="confirmed-contraseña"
					label="Confirmar Contraseña"
					variant="outlined"
					type="password"
				/>
			</div>
			<Button variant="contained" color="primary" type="submit">
				{/*Boton propio de import Button from '@material-ui/core/Button'; */}
				Registrar
			</Button>
		</form>
	);
}
