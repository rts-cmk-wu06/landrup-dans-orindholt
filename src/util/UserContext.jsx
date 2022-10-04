import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext(null);

const UserContextProvider = ({ children }) => {
	const [userData, setUserData] = useState({
		userId: 1,
		token:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6Imluc3RydWN0b3IxIiwicGFzc3dvcmQiOiIkMmEkMTUkejhiMVptcmtadlB4c3NzLlR6WkxBT215dUFMSDJ5dTR2dVc0VzUwM3hVMDBMZ3htLnJYNUsiLCJmaXJzdG5hbWUiOiJTb2ZpZSIsImxhc3RuYW1lIjoiU2NobWlkdCIsImFnZSI6MjQsInJvbGUiOiJpbnN0cnVjdG9yIiwiY3JlYXRlZEF0IjoiMjAyMS0wOS0yM1QwODowOTo1NC40NDBaIiwidXBkYXRlZEF0IjoiMjAyMS0wOS0yM1QwODowOTo1NC40NDBaIn0sImlhdCI6MTY2NDg4Njc2NSwiZXhwIjoxNjY0ODkwMzY1fQ.MXctZZO6K4zmCD09q2xAj2J4dZSAjhY2tnUWo0ZIwpw",
	});

	const contextValue = {
		userData: { get: userData, set: setUserData },
	};

	return (
		<userContext.Provider value={contextValue}>{children}</userContext.Provider>
	);
};

export default UserContextProvider;
