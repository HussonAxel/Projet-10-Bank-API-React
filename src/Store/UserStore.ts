import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  LoginFormData,
  LoginResponse,
  UserProfileResponse,
  userData,
} from "./Store.type";
import axios, { AxiosError } from "axios";
import { RootState } from "../Store/index";


axios.defaults.baseURL = "http://localhost:3001/api/v1";


export const userLogin = createAsyncThunk<LoginResponse, LoginFormData>(
  "user/userLogin",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post<LoginResponse>(
        `/user/login`,
        formData
      );
      return {...response.data, body: {...response.data.body, rememberMe: formData.rememberMe}};
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
  UserProfileResponse,
  void,
  { state: RootState }
>("user/userFetchData", async (_, { getState, rejectWithValue }) => {
  const token = getState().token;

  if (!token) {
    return rejectWithValue("No token found in store");
  }

  try {
    const response = await axios.post<UserProfileResponse>(
      `/user/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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

export const editUserProfileAPI = createAsyncThunk<
  userData,
  UserProfileResponse["body"],
  { state: RootState }
>("user/userEditData", async (formData, { getState, rejectWithValue }) => {
  const token = getState().token;

  if (!token) {
    return rejectWithValue("No token found in store");
  }

  try {
    const response = await axios.put<UserProfileResponse>(
      `/user/profile`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.body;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(
        (error as AxiosError).response?.data || "Une erreur est survenue"
      );
    }
    return rejectWithValue("Une erreur est survenue");
  }
});