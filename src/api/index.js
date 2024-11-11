import { API_URL, request } from "../common-utils";

export const fetchAllAgents = () => {
    const url = `${API_URL}/contact/list-all-agent`;

    return request({
        url: url,
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    });
}