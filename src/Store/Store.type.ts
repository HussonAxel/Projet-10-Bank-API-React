export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  body: {
    token: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  status: number;
  message: string;
}

export interface UserState {
  loading: boolean;
  user: LoginResponse | null;
  error: string | null;
}

export interface InitialState {
  id: string | null;
  email: string;
  firstName: string;
  lastName: string;
  token: string | undefined;
  loading: boolean;
  error: string | null;
  isConnected: boolean;
  rememberMe: boolean;
}

export interface UserProfileResponse {
  body: {
    token: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  status: number;
  message: string;
}