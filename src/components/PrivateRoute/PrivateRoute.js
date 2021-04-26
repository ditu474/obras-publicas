import AuthContext from 'context/AuthContext/auth-context';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
	const authCtx = useContext(AuthContext);

	const render = ({ location }) => {
		if (authCtx.user) {
			return children;
		} else {
			return (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: location },
					}}
				/>
			);
		}
	};

	return <Route {...rest} render={render} />;
}
