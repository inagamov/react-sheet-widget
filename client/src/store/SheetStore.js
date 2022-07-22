// Import observer from mobx
import {makeAutoObservable} from "mobx";

// Export the class
export default class SheetStore {
	constructor() {
		// Init data
		this._rows = [];
		this._filter = {column: "", condition: "", query: ""};
		this._page = 1;
		this._totalCount = 0;
		this._limit = 10; // CHANGE THE AMOUNT OF ITEMS PER PAGE

		// Make all data observable
		makeAutoObservable(this);
	}

	// Store setters
	setRows(rows) {
		this._rows = rows;
	}
	setFilter(filter) {
		this._filter = filter;
	}
	setPage(number) {
		this._page = number;
	}
	setTotalCount(number) {
		this._totalCount = number;
	}
	setLimit(number) {
		this._limit = number;
	}

	// Store getters
	get rows() {
		return this._rows;
	}
	get filter() {
		return this._rows;
	}
	get pages() {
		return this._pages;
	}
	get totalCount() {
		return this._totalCount;
	}
	get limit() {
		return this._limit;
	}
}
