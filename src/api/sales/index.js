import { API_URL, request } from "../../common-utils";

export const fetchSalesOrder = (payload) => {
    const url = `${API_URL}/saleOrder/list-all`;

    return request({
        url: url,
        method: "post",
        data: payload,
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const fetchAllContacts = () => {
    const url = `${API_URL}/contact/list-all`;

    return request({
        url: url,
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const fetchAllItems = () => {
    const url = `${API_URL}/item/list-all`;

    return request({
        url: url,
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const addSaleOrder = (payload) => {
    const url = `${API_URL}/saleOrder/add-sale-order`;

    return request({
        url: url,
        method: "post",
        data: payload,
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const updateSaleOrder = (id, payload) => {
    const url = `${API_URL}/saleOrder/update-sale-order/${id}`;

    return request({
        url: url,
        method: "post",
        data: payload,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
