// Import templates from ../views/ folder
import NotFound from "../views/NotFound";
import Home from "../views/Home";

export const routes = [
	{
		path: "*",
		element: <NotFound></NotFound>,
	},

	{
		path: "/",
		element: <Home></Home>,
	},
];
