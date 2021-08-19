interface UserData {
  username: string;
  [key: string]: any;
}

export interface AuthState {
  user_data: UserData;
  token: string;
}
