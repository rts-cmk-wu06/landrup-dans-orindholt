import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Activities from "./pages/Activities";
import Welcome from "./pages/Welcome";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route path="/activities" element={<Activities />} />
					</Routes>
				</Layout>
			</Router>
		</div>
	);
};

export default App;
