import { useReducer } from 'react';
import AuthContext from './auth-context';

const DEFAULT_AUTH_STATE = {
	user: null,
};

const SET_ACTION = 'SET_USER';
const REMOVE_ACTION = 'REMOVE_USER';

const authReducer = (state, action) => {
	switch (action.type) {
		case SET_ACTION:
			return DEFAULT_AUTH_STATE;
		case REMOVE_ACTION:
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

	const setUserHandler = (user) => {
		dispatchAuthAction({
			type: SET_ACTION,
			user,
		});
	};

	const removeUserHandler = () => {
		dispatchAuthAction({
			type: REMOVE_ACTION,
		});
	};

	const authContext = {
		user: authState.user,
		setUser: setUserHandler,
		removeUser: removeUserHandler,
	};

	return (
		<AuthContext.Provider value={authContext}>
			{props.children}
		</AuthContext.Provider>
	);
}
