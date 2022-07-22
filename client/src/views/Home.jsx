// Module imports
import {observer} from "mobx-react-lite";
import React, {useContext, useEffect} from "react";

// Requests import
import {fetchSheetRows, createRandomMultipleSheetRows} from "../http/SheetAPI";

// Components imports
import Sheet from "../components/Sheet";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import MyButton from "../components/UI/MyButton";

// Other imports
import {Context} from "..";

const Home = observer(() => {
	// Retrieve the context
	const {sheet} = useContext(Context);

	function loadSheet() {
		// Fetch all sheet rows
		fetchSheetRows(sheet._page, sheet._limit, sheet._filter).then((data) => {
			// Use store setters to save received data
			sheet.setRows(data.rows);
			sheet.setTotalCount(data.count);
		});
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
			<Sheet></Sheet>
			<Pagination></Pagination>
		</div>
	);
});

export default Home;
