import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext(null);

const UserContextProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);

	const contextValue = {
		userData: { get: userData, set: setUserData },
	};

	return (
		<userContext.Provider value={contextValue}>{children}</userContext.Provider>
	);
};

export default UserContextProvider;
