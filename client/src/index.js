// Module imports
import React, {createContext} from "react";
import ReactDOM from "react-dom/client";

// Other imports
import App from "./App";
import SheetStore from "./store/SheetStore";

// Export new Context
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Context.Provider
		value={{
			sheet: new SheetStore(),
		}}
	>
		<App />
	</Context.Provider>
);
