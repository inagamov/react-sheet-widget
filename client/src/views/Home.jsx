// Module imports
import {observer} from "mobx-react-lite";
import React, {useState, useContext, useEffect} from "react";

// Requests import
import {fetchSheetRows, createRandomMultipleSheetRows} from "../http/SheetAPI";

// Components imports
import MyButton from "../components/UI/MyButton";
import Filter from "../components/Filter";
import Sheet from "../components/Sheet";
import Pagination from "../components/Pagination";

// Other imports
import {Context} from "..";

const Home = observer(() => {
	// Init loading state to track the load
	const [loading, setLoading] = useState(true);

	// Retrieve the context
	const {sheet} = useContext(Context);

	function loadSheet() {
		// Set loading state to true to show that request is being made
		setLoading(true);

		// Fetch all sheet rows
		fetchSheetRows(sheet._page, sheet._limit, sheet._filter)
			.then((data) => {
				// Use store setters to save received data
				sheet.setRows(data.rows);
				sheet.setTotalCount(data.count);
			})
			// Set loading state to false to show that request has been completed
			.finally(() => setLoading(false));
	}

	// First render
	useEffect(() => {
		loadSheet();
	}, []);

	// On page (pagination component) change
	useEffect(() => {
		loadSheet();
	}, [sheet._page]);

	const addRows = () => {
		createRandomMultipleSheetRows(10).then(() => {
			loadSheet();
		});
	};

	return (
		<div className="container">
			<h1 className="container__title">Add rows.</h1>
			<MyButton onClick={addRows}>+ 10 rows</MyButton>

			<h1 className="container__title">Filter.</h1>
			<Filter></Filter>

			<h1 className="container__title">Sheet.</h1>
			<Sheet loading={loading}></Sheet>
			<Pagination></Pagination>
		</div>
	);
});

export default Home;
