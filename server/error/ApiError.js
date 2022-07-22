// Create a class for errors
class ApiError extends Error {
	constructor(status, message) {
		// Call parent constructor because class ApiError extends the Error class
		super();

		// Init params
		this.status = status;
		this.message = message;
	}

	// Create functions for error (static because they allow you not to create an object)

	// 404 Not Found
	static badRequest(message) {
		return new ApiError(404, message);
	}

	// 500 Internal Server Error
	static internal(message) {
		return new ApiError(500, message);
	}

	// 403 Forbidden
	static forbidden(message) {
		return new ApiError(403, message);
	}
}

// Export the class
module.exports = ApiError;
