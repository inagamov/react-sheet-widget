// Import axios module
import axios from "axios";

// Init axios, its' default URL (from .env)
const $host = axios.create({baseURL: process.env.REACT_APP_API_URL});

// Export axios instance
export {$host};
