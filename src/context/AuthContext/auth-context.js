import { createContext } from 'react';

const AuthContext = createContext({
	user: null,
	setUser: (user) => {},
	removeUser: () => {},
});

export default AuthContext;
