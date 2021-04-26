import { createContext } from 'react';

const AuthContext = createContext({
	user: null,
	signIn: (user, cb) => {},
	signOut: (cb) => {},
});

export default AuthContext;
