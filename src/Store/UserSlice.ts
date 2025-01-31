import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
    body: {
      token: string;
    };
    status: number;
    message: string;
}

export interface UserState {
  loading: boolean;
  user: LoginResponse | null;
  error: string | null;
}

export const loginUser = createAsyncThunk<LoginResponse, LoginFormData>(
  "user/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post<LoginResponse>(
        `http://localhost:3001/api/v1/user/login`,
        formData
      );
      console.log(response.data);
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

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  } as UserState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, { payload }: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.user = payload;
          state.error = null;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = (action.payload as string) || "Une erreur est survenue";
      });
  },
});

export default userSlice.reducer;
