import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      (set) => ({
        // State
        user: null,
        theme: 'light',
        notifications: [],

        // Actions
        setUser: (user) => set({ user }),
        setTheme: (theme) => set({ theme }),
        addNotification: (notification) => 
          set((state) => ({
            notifications: [...state.notifications, notification]
          })),
        clearNotifications: () => set({ notifications: [] }),
      }),
      {
        name: 'app-storage', // localStorage key
        partialize: (state) => ({ theme: state.theme }), // Only persist theme
      }
    )
  )
);

export default useStore;

// Usage in components:
// const user = useStore(state => state.user); // Only re-renders when user changes
// const setUser = useStore(state => state.setUser); // Stable reference
