import AppBar from 'components/Layout/AppBar/AppBar';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Registry from 'pages/Registry/Registry';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<AppBar />
			<main>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/login" exact>
						<Login />
					</Route>
					<Route path="/registro" exact>
						<Registry />
					</Route>
				</Switch>
			</main>
		</BrowserRouter>
	);
}

export default App;
