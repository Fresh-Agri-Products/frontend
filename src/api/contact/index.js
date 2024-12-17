import { API_URL, request } from "../../common-utils";

export const addContact = (payload) => {
    const url = `${API_URL}/contact/add-contact`;

    return request({
        url: url,
        method: "post",
        data: payload,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
