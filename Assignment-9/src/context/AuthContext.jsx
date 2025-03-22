import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const register = (username, password) => {
    if (!username.trim() || !password.trim()) {
      toast.error('Username and password are required!');
      return false;
    }

    if (users.some((u) => u.username === username)) {
      toast.error('Username already exists!');
      return false;
    }

    const newUser = { id: Date.now(), username, password };
    setUsers([...users, newUser]);
    toast.success('Registration successful! Please login.');
    navigate('/login');
    return true;
  };

  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      setUser({ id: foundUser.id, username: foundUser.username });
      toast.success('Login successful!');
      navigate('/todo');
    } else {
      toast.error('Invalid username or password');
    }
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, users, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};