import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  LoginFormData,
  LoginResponse,
  UserProfileResponse,
} from "./Store.type";
import axios, { AxiosError } from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/v1";


export const userLogin = createAsyncThunk<LoginResponse, LoginFormData>(
  "user/userLogin",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post<LoginResponse>(
        `/user/login`,
        formData
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(
          (error as AxiosError).response?.data || "Une erreur est survenue"
        );
      }
      return rejectWithValue("Une erreur est survenue");
    }
  }
);

export const fetchUserProfileRedux = createAsyncThunk<
  UserProfileResponse
>("user/userFetchData", async (_token, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post<LoginResponse>(`/user/profile` ,{}, {
      headers: {
        Authorization: `Bearer ${token}`,}},
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(
        (error as AxiosError).response?.data || "Une erreur est survenue"
      );
    }
    return rejectWithValue("Une erreur est survenue");
  }
});

const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found in local storage");
    return null;
  }

  try {
    const response = await axios.post(
      "/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.setItem("firstName", response.data.body.firstName);
    localStorage.setItem("lastName", response.data.body.lastName);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export default fetchUserProfile;
