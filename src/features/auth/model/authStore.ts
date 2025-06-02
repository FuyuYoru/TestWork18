import { create } from 'zustand';
import { AuthState } from './model';
import { IUser } from '@/entities/user/model/model';
import { getCurrentUser } from '@/entities/user/api/getCurrentUser';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (user: IUser) => {
    set({ user, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    set({ user: null, isAuthenticated: false });
  },

  initAuth: async () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    try {
      const user = await getCurrentUser();
      set({ user, isAuthenticated: true });
    } catch (error) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      set({ user: null, isAuthenticated: false });
    }
  }
},
}));
