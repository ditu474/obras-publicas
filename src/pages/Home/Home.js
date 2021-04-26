import styles from './Home.module.css';

export default function Home() {
	return (
		<div className={`container ${styles.content}`}>
			<h1>Bienvenido</h1>
			<p>Esta es la app de control de multas de contratos</p>
		</div>
	);
}
