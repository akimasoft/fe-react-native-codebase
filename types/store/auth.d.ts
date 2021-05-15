/*
 * Project: Akimasoft-Mobile
 * Author: Akimabs
 * -----
 * Modified By: the developer formerly known as akimabs at <ahakimabs@gmail.com>
 * -----
 * Copyright (c) 2021 Akimasoft
 */
interface UserData {
  username: string;
  [key: string]: any;
}

export interface AuthState {
  user_data: UserData;
  token: string;
}
