// Import ApiError class
const ApiError = require("../error/ApiError");

// Export the middleware
module.exports = function (error, request, response, next) {
	// If the error is an instance of ApiError class, then response with error data from ApiError
	if (error instanceof ApiError) {
		return response.status(error.status).json({message: error.message});
	}

	// Else, response with internal error ()
	return response.status(500).json({message: "Internal Server Error"});
};
