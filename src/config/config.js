import axios from "axios";

export const API_URL = "http://localhost:5000";

export const clientInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: API_URL,
});