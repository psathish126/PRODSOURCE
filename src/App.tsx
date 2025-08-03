import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginForm from './components/auth/LoginForm';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import ForumSection from './components/forum/ForumSection';
import ResourcesSection from './components/resources/ResourcesSection';
import LeaderboardSection from './components/leaderboard/LeaderboardSection';

const AppContent: React.FC = () => {
  const { state } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  if (state.isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading PRODSOURCE...</p>
        </div>
      </div>
    );
  }

  if (!state.isAuthenticated) {
    return <LoginForm />;
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'forum':
        return <ForumSection />;
      case 'resources':
        return <ResourcesSection />;
      case 'leaderboard':
        return <LeaderboardSection />;
      case 'moderation':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Moderation</h2>
            <p className="text-gray-600">Admin moderation tools will be implemented here.</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h2>
            <p className="text-gray-600">Detailed analytics and reporting will be implemented here.</p>
          </div>
        );
      case 'users':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Management</h2>
            <p className="text-gray-600">User administration tools will be implemented here.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-600">User preferences and system settings will be implemented here.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearchResults={setSearchResults} />
      <div className="flex">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 ml-64 pt-16">
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;