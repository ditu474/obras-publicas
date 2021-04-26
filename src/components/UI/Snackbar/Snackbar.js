import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export default function CustomSnackbar(props) {
	return (
		<Snackbar /*Proporciona un mensaje corto propio de import Snackbar from '@material-ui/core/Snackbar';*/
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			open={props.open} //abirr el mensaje
			autoHideDuration={3000} //Duracion del mensaje
			onClose={props.onClose} //lo cierra validandolo desde una funcion que retorna false
			message={props.message} //mensaje
			action={
				//accion
				<Button color="secondary" size="small" onClick={props.onClose}>
					{/*boton que es de tamaño pequeño, color secundario propio del Snackbar y una funcion que retorna false*/}
					Cerrar
				</Button>
			}
		/>
	);
}
