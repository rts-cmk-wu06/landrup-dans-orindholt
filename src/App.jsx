import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CalenderDetail from "./pages/CalenderDetail";
import Layout from "./components/Layout";
import Activities from "./pages/Activities";
import AcitivityDetail from "./pages/ActivityDetails";
import Calender from "./pages/Calender";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Welcome from "./pages/Welcome";
import UserContextProvider from "./util/UserContext";

const App = () => {
	return (
		<div className="App">
			<UserContextProvider>
				<Router>
					<Layout>
						<Routes>
							<Route index element={<Welcome />} />
							<Route path="/aktiviteter" element={<Activities />} />
							<Route path="/aktiviteter/:id" element={<AcitivityDetail />} />
							<Route path="/soeg" element={<Search />} />
							<Route path="/kalender" element={<Calender />} />
							<Route path="/kalender/:id" element={<CalenderDetail />} />
							<Route path="/login" element={<Login />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Layout>
				</Router>
			</UserContextProvider>
		</div>
	);
};

export default App;
