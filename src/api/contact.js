import { Api } from "./api.js";

export const GetAllContacts = async () => {
    const response = await Api.get("/api/texts/contacts");
    return response.data;
};
