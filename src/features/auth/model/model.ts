export interface AuthState {
  user: { id: string; email: string } | null;
  isAuthenticated: boolean;
  login: (user: any) => void;
  logout: () => void;
}