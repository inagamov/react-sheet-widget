// Module Imports
import React, {useContext} from "react";
import {observer} from "mobx-react-lite";

// Other imports
import {Context} from "..";

const Pagination = observer(() => {
	// Retrieve the context
	const {sheet} = useContext(Context);

	// Count pages
	const pagesCount = Math.ceil(sheet.totalCount / sheet.limit);

	// Make pagination, starting with "1" page
	let pages = [];
	for (let i = 0; i < pagesCount; i++) {
		pages.push(i + 1); // i + 1 because loop starts with i = 0. Pages should start with "1", not "0"
	}

	return (
		<div className="pagination">
			{pages.map((number) => (
				<span
					className={
						number === sheet._page
							? "pagination__item pagination__item__current"
							: "pagination__item"
					}
					onClick={() => sheet.setPage(number)}
					key={number}
				>
					{number}
				</span>
			))}
		</div>
	);
});

export default Pagination;
