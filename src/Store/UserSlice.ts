import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse, InitialState } from "./Store.type";
import {fetchUserProfileRedux}  from "./UserStore";
import {UserProfileResponse} from "./Store.type";
import { userLogin } from "./UserStore";

const initialState: InitialState = {
  id: null,
  email: "",
  firstName: "",
  lastName: "",
  token: undefined,
  loading: false,
  error: null,
  isConnected: false,
  rememberMe: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userLogin.fulfilled,
        (state, { payload }: PayloadAction<LoginResponse>) => {
          // BASE DATA FOR USER
          state.loading = false;
          state.error = null;
          state.isConnected = true;

          // DYNAMIC DATA FOR USER
          state.token = payload.body.token;
        }
      )
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Une erreur est survenue";
      })
      .addCase(
        fetchUserProfileRedux.fulfilled,
        (state, { payload }: PayloadAction<UserProfileResponse>) => {
          state.firstName = payload.body.firstName
          state.lastName = payload.body.lastName;
        }
      );



  },
});

export default userSlice.reducer;
