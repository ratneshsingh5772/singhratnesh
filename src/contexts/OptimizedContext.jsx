import { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const StateContext = createContext(null);
const ActionsContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  // Memoize actions so they don't cause re-renders
  const actions = useMemo(() => ({
    setUser: (newUser) => setUser(newUser),
    setTheme: (newTheme) => setTheme(newTheme),
    logout: () => setUser(null),
  }), []); // Empty deps - functions never change

  // Memoize state to prevent unnecessary re-renders
  const state = useMemo(() => ({
    user,
    theme,
  }), [user, theme]);

  return (
    <StateContext.Provider value={state}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
};

// Separate hooks for state and actions
export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) throw new Error('useAppState must be used within AppProvider');
  return context;
};

export const useAppActions = () => {
  const context = useContext(ActionsContext);
  if (!context) throw new Error('useAppActions must be used within AppProvider');
  return context;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
