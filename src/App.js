import './App.css';
import AppBar from './components/AppBar/AppBar';
import Login from './components/Login/Login';
import Registry from './components/Registry/Registry';

function App() {
	return (
		<div>
			<AppBar />
			<div className="container">
				<Login />
				
				<Registry />
			</div>
		</div>
	);
}

export default App;
