// Import router components
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./router/index";

// Import styles file
import "./styles/App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({path, element}, key) => (
					<Route exact path={path} element={element} key={key} />
				))}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
