// Import axios instance
import {$host} from "./index";

// Fetch all sheet rows
export const fetchSheetRows = async (page, limit, filter) => {
	// Make async axios (post) request to the server
	const {data} = await $host.post("api/sheet/get", {
		// Request query
		params: {
			page,
			limit,
		},
		// Request body
		filter: filter,
	});

	// Return with fetched data
	return data;
};

// Create random multiple sheet rows
export const createRandomMultipleSheetRows = async (number) => {
	// Make async axios (get) request to the server
	const {data} = await $host.get(`api/sheet/create/${number}`);

	// Return created row data
	return data;
};
