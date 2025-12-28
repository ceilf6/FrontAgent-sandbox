import { create } from 'zustand';
import type { IUser } from '@/types';

interface IUserStore {
  user: IUser | null;
  isAuthenticated: boolean;
  setUser: (user: IUser | null) => void;
  logout: () => void;
}

/**
 * 用户状态管理 Store
 */
export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user: IUser | null) => {
    set({
      user,
      isAuthenticated: user !== null,
    });
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));
