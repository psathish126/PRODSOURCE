import React from 'react';
import { 
  Home, 
  MessageSquare, 
  BookOpen, 
  Trophy, 
  Settings, 
  BarChart3,
  Users,
  Filter
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const { state } = useAuth();

  const studentNavItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'forum', icon: MessageSquare, label: 'Q&A Forum' },
    { id: 'resources', icon: BookOpen, label: 'Resources' },
    { id: 'leaderboard', icon: Trophy, label: 'Leaderboard' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const adminNavItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'forum', icon: MessageSquare, label: 'Q&A Forum' },
    { id: 'resources', icon: BookOpen, label: 'Resources' },
    { id: 'moderation', icon: Filter, label: 'Moderation' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'users', icon: Users, label: 'User Management' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const navItems = state.user?.role === 'admin' ? adminNavItems : studentNavItems;

  return (
    <div className="bg-white w-64 min-h-screen border-r border-gray-200 fixed left-0 top-16 overflow-y-auto">
      <div className="p-4">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Points</span>
              <span className="font-medium text-blue-600">{state.user?.points}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Contributions</span>
              <span className="font-medium text-green-600">{state.user?.contributions}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Badges</span>
              <span className="font-medium text-purple-600">{state.user?.badges.length}</span>
            </div>
          </div>
        </div>

        {/* Semester Filter */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Filter by Semester</h3>
          <div className="grid grid-cols-2 gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <button
                key={sem}
                className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                Sem {sem}
              </button>
            ))}
          </div>
          
          {/* Course Categories */}
          <div className="mt-4">
            <h4 className="text-xs font-medium text-gray-700 mb-2">Categories</h4>
            <div className="space-y-1">
              <button className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:bg-blue-50 rounded transition-colors">
                Core Subjects
              </button>
              <button className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:bg-blue-50 rounded transition-colors">
                Professional Electives
              </button>
              <button className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:bg-blue-50 rounded transition-colors">
                Open Electives
              </button>
              <button className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:bg-blue-50 rounded transition-colors">
                Language Electives
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;