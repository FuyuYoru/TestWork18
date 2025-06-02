import { IUser } from "@/entities/user/model/model";

export interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  login: (user: IUser) => void;
  logout: () => void;
  initAuth: () => Promise<void>
}