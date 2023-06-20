import { clientInstance } from "../config/config";

export const loginAPI = async (formData) => {
    return await clientInstance.post("/users/login", formData);
};
