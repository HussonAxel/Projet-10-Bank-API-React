import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse, InitialState } from "./Store.type";
import { fetchUserProfileRedux } from "./UserStore";
import { UserProfileResponse, userData } from "./Store.type";
import { userLogin } from "./UserStore";
import { revertAll, updateName } from "./actions";

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
  reducers: {
    reset: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userLogin.fulfilled,
        (state, { payload }: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.error = null;
          state.isConnected = true;
          state.token = payload.body.token;
          state.rememberMe = payload.body.rememberMe;
        }
      )
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Une erreur est survenue";
      })
      .addCase(
        fetchUserProfileRedux.fulfilled,
        (state, { payload }: PayloadAction<UserProfileResponse>) => {
          state.firstName = payload.body.firstName;
          state.lastName = payload.body.lastName;
        }
      )
      .addCase(revertAll, () => initialState)
      .addCase(updateName, (state, { payload }: PayloadAction<userData>) => {
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
      },)
  },
});

export default userSlice.reducer;
