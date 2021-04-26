import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from 'components/UI/Snackbar/Snackbar';
import { useState } from 'react';
import styles from './Registry.module.css';
import RegistryForm from './RegistryForm'; //importar form del registro

export default function Registry() {
	const [open, setOpen] = useState(false); //Los Hooks son una nueva incorporación en React 16.8. Te permiten usar estado y otras características de React sin escribir una clase.

	//vector de dos posiciones
	//posicion 0, el valor y en la posicion 1 el actualizador

	const openSnackbarHandler = () => {
		//funcion cuando le de click el actualizador cambiara a valor y pasara a sera verdadero
		setOpen(true);
	};

	const closeSnackbarHandler = () => {
		//Esta funcion lo que hace es cambiar el estado del componente "open" a true, lo que activa el SnackBar
		setOpen(false);
	};

	return (
		<div className={styles.content}>
			{/*se usa el div porque se tiene que retornar un objeto entero*/}
			<h2>Registro de Operario</h2>
			{/*un h2 que agranda la letra, con un stylo de centrado */}
			<Card className={styles.card}>
				{/*card es propio de '@material-ui/core/Card'*/}
				<CardContent>
					{/*contenedor propio tambien de  '@material-ui/core/Card'*/}
					<RegistryForm onRegistry={openSnackbarHandler} />
					{/*onRegistry es una propiedad de RegistryForm creada para responder a un evento del elemento */}
				</CardContent>
			</Card>
			{open && (
				<Snackbar
					open={open}
					onClose={closeSnackbarHandler}
					message="Registro enviado"
				/>
			)}
		</div>
	);
}
