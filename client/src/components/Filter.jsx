// Modules imports
import {observer} from "mobx-react-lite";
import React, {useContext, useEffect} from "react";

// Components imports
import MySelect from "./UI/MySelect";
import MyInput from "./UI/MyInput";

// Requests import
import {fetchSheetRows} from "../http/SheetAPI";

// Other imports
import {Context} from "..";

const Filter = observer(() => {
	// Retrieve the context
	const {sheet} = useContext(Context);

	// Define conditions for different columns (line: 57-63)
	const stringColumnConditions = [{value: "contains", name: "contains"}];
	const numberColumnConditions = [
		{value: "equal", name: "equal"},
		{value: "more", name: "more"},
		{value: "less", name: "less"},
	];

	// On any filter param update
	useEffect(() => {
		// Check all filter params to be existing
		if (sheet._filter.column && sheet._filter.condition) {
			// Fetch all sheet rows, matching filter params
			fetchSheetRows(sheet._page, sheet._limit, sheet._filter).then((data) => {
				// Use store setters to save received data
				sheet.setRows(data.rows);
				sheet.setTotalCount(data.count);
			});
		}
	}, [sheet._filter]);

	return (
		<div className="filter">
			<MySelect
				defaultValue="Column"
				value={sheet._filter.column}
				onChange={(selected) => sheet.setFilter({...sheet._filter, column: selected})}
				options={[
					{value: "name", name: "name"},
					{value: "amount", name: "amount"},
					{value: "distance", name: "distance"},
				]}
			/>

			<MySelect
				defaultValue="Condition"
				value={sheet._filter.condition}
				onChange={(selected) => sheet.setFilter({...sheet._filter, condition: selected})}
				// Explanations to "options":
				// Disallow user to use conditions that are ment for different type
				// "name" column - "contains" condition only
				// "amount", "distance" columns - "equal", "more" and "less" conditions
				options={
					sheet._filter.column == "name" ? stringColumnConditions : numberColumnConditions
				}
			/>

			<MyInput
				placeholder="Search"
				value={sheet._filter.query}
				onChange={(e) => sheet.setFilter({...sheet._filter, query: e.target.value})}
			/>
		</div>
	);
});

export default Filter;
