// Module imports
import React, {useContext} from "react";
import {observer} from "mobx-react-lite";

// Components imports
import SheetColumns from "./SheetColumns";
import SheetRow from "./SheetRow";

// Other imports
import {Context} from "..";

const Sheet = observer(() => {
	// Retrieve the context
	const {sheet} = useContext(Context);

	return (
		<div className="sheet">
			{/* Columns */}
			<SheetColumns></SheetColumns>

			{/* Rows */}
			{sheet.rows.length !== 0 ? (
				<div className="sheet__rows">
					{sheet.rows.map((row) => (
						<SheetRow key={row.id} row={row}></SheetRow>
					))}
				</div>
			) : (
				<div className="sheet__no_matches">No matches.</div>
			)}
		</div>
	);
});

export default Sheet;
