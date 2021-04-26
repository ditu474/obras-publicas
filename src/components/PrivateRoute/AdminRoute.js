import AuthContext from 'context/AuthContext/auth-context';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function AdminRoute({ children, ...rest }) {
	const authCtx = useContext(AuthContext);

	const render = () => {
		const { user } = authCtx;
		if (user && user.isAdmin) {
			return children;
		} else {
			return (
				<Redirect
					to={{
						pathname: '/',
					}}
				/>
			);
		}
	};

	return <Route {...rest} render={render} />;
}
