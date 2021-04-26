import { useReducer } from 'react';
import AuthContext from './auth-context';

const DEFAULT_AUTH_STATE = {
	user: null,
};

const SIGNIN_ACTION = 'SIGNIN';
const SIGNOUT = 'SIGNOUT';

const authReducer = (state, action) => {
	switch (action.type) {
		case SIGNIN_ACTION:
			return {
				user: action.user,
			};
		case SIGNOUT:
			return DEFAULT_AUTH_STATE;
		default:
			return DEFAULT_AUTH_STATE;
	}
};

export default function AuthProvider(props) {
	const [authState, dispatchAuthAction] = useReducer(
		authReducer,
		DEFAULT_AUTH_STATE
	);

	const setUserHandler = (user, cb) => {
		dispatchAuthAction({
			type: SIGNIN_ACTION,
			user,
		});
		cb();
	};

	const removeUserHandler = (cb) => {
		dispatchAuthAction({
			type: SIGNOUT,
		});
		cb();
	};

	const authContext = {
		user: authState.user,
		signIn: setUserHandler,
		signOut: removeUserHandler,
	};

	return (
		<AuthContext.Provider value={authContext}>
			{props.children}
		</AuthContext.Provider>
	);
}
