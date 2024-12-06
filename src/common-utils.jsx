import { message } from "antd";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const API_URL = `${API_BASE_URL}/api`;

export let screenHeight = window?.flutter_inappwebview?.callHandler ? "100vh" : `${window.innerHeight}px`;
export const ItemUnits = ['box', 'Thbox', 'dz', 'g', 'kg', 'pcs'];
export const ContainerTypes = ['whiteBox', 'Thbox', 'bhindiBox'];

// Axios request Interceptors Configuration
axios.interceptors.request.use(
    (config) => {
        // TODO
        // const token = getAccessToken();
        // config.headers["platform"] = "Web";
        // config.headers["Content-Type"] = "application/json";
        // if (token) {
        //     config.headers["Authorization"] = token;
        // }
        const userId = window.localStorage.getItem("userId");
        if (userId) {
            config.headers["userId"] = userId;
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

export function isAuthenticated() {
  let userId = window.localStorage.getItem("userId");
    return userId ? true : false;
}

export function request(config) {
    return axios.request(config);
}

export const handleTableChange = (pagination, setCurrentPage) => {
    setCurrentPage(pagination.current);
};

export const getInitials = (name) => {
    const words = name.split(' ');
    if (words.length === 1) {
        return name.slice(0, 2).toUpperCase();
    }
    return words.slice(0, 2).map(word => word[0].toUpperCase()).join('');
};

// const getItemFromLocalStorage = (key) => {
//     const item = window.localStorage.getItem(key);
//     return item? JSON.parse(item) : null;
// }

let cachedPermissions = null;

// Utility to get permissions
const getPermissions = () => {
  if (cachedPermissions === null) {
    const permissions = window.localStorage.getItem("permissions");
    cachedPermissions = permissions ? JSON.parse(permissions) : [];
  }
  return cachedPermissions;
};

export const checkAccess = (name) => {
  const permissions = getPermissions();
  return Array.isArray(permissions) && permissions.includes(name);
};

export const handleCatch = (err) => {
    if (err.response && err.response.data === "Access denied. No token provided") return;
    if (typeof err === "string") {
        message.error(err);
    } else if (err?.response?.status === 403) {
        return;
    } else if (err?.response?.status === 404) {
        message.error("Not Found");
    } else if (typeof err.response === "string") {
        message.error(err.response);
    } else if (err.response && err.response.data && err.response.data.error) {
        message.error(err.response.data.error);
    } else if (err.response && err.response.data) {
        message.error(err.response.data);
    } else {
        message.error("Some error has occured please refresh...");
    }
};