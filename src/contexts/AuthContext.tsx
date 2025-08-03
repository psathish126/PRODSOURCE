import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthAction {
  type: 'LOGIN' | 'LOGOUT' | 'SET_LOADING' | 'UPDATE_USER';
  payload?: any;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<{
  state: AuthState;
  login: (credentials: { identifier: string; password: string }) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
} | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Mock authentication - replace with actual API calls
  const login = async (credentials: { identifier: string; password: string }) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const mockUser: User = {
        _id: '1',
        rollNumber: credentials.identifier.match(/^\d{2}P\d{3}$/) ? credentials.identifier : undefined,
        staffId: credentials.identifier.startsWith('STAFF') ? credentials.identifier : undefined,
        email: `${credentials.identifier}@college.edu`,
        name: credentials.identifier.match(/^\d{2}P\d{3}$/) ? 'Student User' : 'Admin User',
        batch: credentials.identifier.match(/^\d{2}P\d{3}$/) ? getBatchFromRollNumber(credentials.identifier) : undefined,
        role: credentials.identifier.match(/^\d{2}P\d{3}$/) ? 'student' : 'admin',
        points: 150,
        contributions: 8,
        badges: ['First Post', 'Helper'],
        preferences: {
          theme: 'system',
          notifications: true,
          offlineMode: false,
        },
        created: new Date('2024-01-15'),
        lastActive: new Date(),
      };

      localStorage.setItem('authToken', 'mock-token');
      localStorage.setItem('user', JSON.stringify(mockUser));
      dispatch({ type: 'LOGIN', payload: mockUser });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  const updateUser = (userData: Partial<User>) => {
    if (state.user) {
      const updatedUser = { ...state.user, ...userData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      dispatch({ type: 'UPDATE_USER', payload: updatedUser });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        dispatch({ type: 'LOGIN', payload: user });
      } catch {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const getBatchFromRollNumber = (rollNumber: string): string => {
  const year = parseInt(rollNumber.substring(0, 2));
  const startYear = 2000 + year;
  const endYear = startYear + 4;
  return `${startYear}-${endYear}`;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};