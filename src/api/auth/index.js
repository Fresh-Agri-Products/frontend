import { API_URL, request } from "../../common-utils";

export const loginUser = (payload) => {
    const url = `${API_URL}/auth/login`;

    return request({
        url: url,
        method: "post",
        data: payload,
        headers: {
            "Content-Type": "application/json"
        }
    });
}