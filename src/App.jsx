import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Activities from "./pages/Activities";
import AcitivityDetail from "./pages/ActivityDetails";
import Welcome from "./pages/Welcome";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route path="/aktiviteter" element={<Activities />} />
						<Route path="/aktiviteter/:id" element={<AcitivityDetail />} />
					</Routes>
				</Layout>
			</Router>
		</div>
	);
};

export default App;
