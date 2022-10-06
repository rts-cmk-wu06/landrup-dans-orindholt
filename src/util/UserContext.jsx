import { useState } from "react";
import { createContext } from "react";
import { useCookies } from "react-cookie";

export const userContext = createContext(null);

const UserContextProvider = ({ children }) => {
	const [cookies] = useCookies(["user-data"]);
	const [userData, setUserData] = useState(cookies["user-data"] || null);

	const contextValue = {
		userData: { get: userData, set: setUserData },
	};

	return (
		<userContext.Provider value={contextValue}>{children}</userContext.Provider>
	);
};

export default UserContextProvider;
