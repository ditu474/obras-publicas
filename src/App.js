import AppBar from 'components/Layout/AppBar/AppBar';
import AdminRoute from 'components/PrivateRoute/AdminRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import NotFound from 'pages/NotFound/NotFound';
import Registry from 'pages/Registry/Registry';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<AppBar />
			<main>
				<Switch>
					<PrivateRoute path="/" exact>
						<Home />
					</PrivateRoute>
					<Route path="/login" exact>
						<Login />
					</Route>
					<AdminRoute path="/registro" exact>
						<Registry />
					</AdminRoute>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</main>
		</BrowserRouter>
	);
}

export default App;
