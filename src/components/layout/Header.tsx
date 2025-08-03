import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Bell, 
  User, 
  LogOut, 
  Settings,
  Trophy,
  Download
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { searchCourses } from '../../data/courses';

interface HeaderProps {
  onSearchResults: (results: any[]) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchResults }) => {
  const { state, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<any[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = searchCourses(query);
      setSearchSuggestions(results.slice(0, 5));
      onSearchResults(results);
    } else {
      setSearchSuggestions([]);
      onSearchResults([]);
    }
  };

  const mockNotifications = [
    { id: 1, title: 'New answer to your question', content: 'PE101 - Calculus doubt resolved', time: '2 hours ago', read: false },
    { id: 2, title: 'Achievement unlocked!', content: 'You earned the "Helper" badge', time: '1 day ago', read: false },
    { id: 3, title: 'New resource uploaded', content: 'PE302 - Strength of Materials notes', time: '2 days ago', read: true },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">PRODSOURCE</h1>
                <p className="text-xs text-gray-500">Production Engineering Hub</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, questions, resources... (e.g., PE101)"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Search Suggestions */}
            {searchSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {searchSuggestions.map((course) => (
                  <div
                    key={course._id}
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    onClick={() => {
                      setSearchQuery(course.code);
                      setSearchSuggestions([]);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-blue-600">{course.code}</span>
                        <span className="ml-2 text-gray-900">{course.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">Sem {course.semester}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            {/* Offline Mode Toggle */}
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Download className="h-5 w-5" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {mockNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 ${
                          !notification.read ? 'bg-blue-50' : ''
                        }`}
                      >
                        <h4 className="font-medium text-sm text-gray-900">{notification.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                        <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-900">{state.user?.name}</p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Trophy className="h-3 w-3 mr-1" />
                      {state.user?.points} points
                    </p>
                  </div>
                </div>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-gray-200">
                    <p className="font-medium text-gray-900">{state.user?.name}</p>
                    <p className="text-xs text-gray-500">
                      {state.user?.rollNumber || state.user?.staffId}
                    </p>
                  </div>
                  <div className="py-2">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </button>
                    <button 
                      onClick={logout}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;