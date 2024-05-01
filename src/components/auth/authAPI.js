import axios from "axios";
import { toast } from "react-toastify";
import BASEURL from "../../BASEURL";
import {
    loginRequest,
    loginSuccess,
    loginFailure,
    registerRequest,
    registerSuccess,
    registerFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    loadUserSuccess,
    loadUserRequest,
    loadUserFailure,
} from "./authSlice";
import { getStoriesByUser } from "../story/storyAPI";

axios.defaults.baseURL = BASEURL;

axios.defaults.withCredentials = true;
// ===================================== LOAD USER =====================================

export const loadUser = () => async (dispatch) => {
    const username = JSON.parse(localStorage.getItem("username"));
    try {
        dispatch(loadUserRequest());

        const { data } = await axios.post(`/api/user/load/${username}`);

        dispatch(loadUserSuccess(data));

        toast.success(`${username} Login Successfully`, {
            position: "bottom-right",
            autoClose: 500,
        });
    } catch (error) {
        dispatch(loadUserFailure());
        //toast.error(error.response.data);
    }
};

// ===================================== REGISTER ==================================

export const register = (values) => async (dispatch) => {
    try {
        dispatch(registerRequest());
        const { data } = await axios.post(`/api/user/register`, values, {
            withCredentials: true,
        });
        dispatch(registerSuccess(data));
        localStorage.setItem("username", JSON.stringify(data.username));
        toast.success("Register Successful", {
            position: "bottom-right",
            autoClose: 500,
        });
    } catch (error) {
        dispatch(registerFailure(error.response.data));
        //console.log("error", error.response.data);
    }
};

// ===================================== LOGIN =====================================

export const login = (values) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        const { data } = await axios.post(`/api/user/login`, values, {
            withCredentials: true,
        });

        dispatch(loginSuccess(data));

        dispatch(getStoriesByUser(data.userId));
        localStorage.setItem("username", JSON.stringify(data.username));
    } catch (error) {
        dispatch(loginFailure(error.response.data));
        //console.log("error", error.response.data);
    }
};

// ===================================== LOGOUT =====================================

export const logout = () => async (dispatch) => {
    try {
        dispatch(logoutRequest());
        await axios.post(`/api/user/logout`, { withCredentials: true });

        dispatch(logoutSuccess());

        localStorage.removeItem("username");
        toast.success("Logout Successful", {
            position: "bottom-right",
            autoClose: 1000,
        });
    } catch (error) {
        dispatch(logoutFailure(error.response.data));
        toast.error(error.response.data);
    }
};