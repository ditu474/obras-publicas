import AppBar from 'components/Layout/AppBar/AppBar';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Registry from 'pages/Registry/Registry';

function App() {
	return (
		<div>
			<AppBar />
			<Home />
			<Login />
			<Registry />
		</div>
	);
}

export default App;
