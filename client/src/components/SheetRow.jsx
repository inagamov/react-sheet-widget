import React from "react";

const SheetRow = ({row}) => {
	return (
		<div>
			<ul className="sheet__row">
				<li>{row.date}</li>
				<li>{row.name}</li>
				<li>{row.amount}</li>
				<li>{row.distance}</li>
			</ul>
		</div>
	);
};

export default SheetRow;
