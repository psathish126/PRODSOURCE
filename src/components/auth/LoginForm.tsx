import React, { useState } from 'react';
import { BookOpen, Eye, EyeOff, User, Lock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm: React.FC = () => {
  const { login, state } = useAuth();
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.identifier || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await login(formData);
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="p-3 bg-blue-600 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">PRODSOURCE</h1>
              <p className="text-sm text-gray-600">Production Engineering Hub</p>
            </div>
          </div>
          <p className="text-gray-600">
            Sign in to access your academic knowledge platform
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Roll Number / Staff ID Field */}
            <div>
              <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-2">
                Roll Number / Staff ID
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="identifier"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  placeholder="e.g., 2P23P001 or STAFF123"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Students: Use your roll number (2P23P001) • Admins: Use staff ID (STAFF123)
              </p>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {state.isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Demo Credentials:</h3>
            <div className="space-y-1 text-xs text-gray-600">
              <p><strong>Student:</strong> 2P23P001 / password</p>
              <p><strong>Admin:</strong> STAFF123 / password</p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-center space-y-2">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
              Forgot your password?
            </a>
            <p className="text-xs text-gray-500">
              Need help? Contact IT Support at support@college.edu
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-gray-500">
          <p>© 2025 Production Engineering Department. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;