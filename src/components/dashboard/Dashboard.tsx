import React from 'react';
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  BookOpen, 
  Trophy, 
  Star,
  Calendar,
  Target
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { state } = useAuth();

  // Real-time activity will be fetched from API
  const recentActivity: any[] = [];

  // Events will be fetched from API
  const upcomingEvents: any[] = [];

  // Contributors will be fetched from API
  const topContributors: any[] = [];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome back, {state.user?.name}!
            </h1>
            <p className="text-blue-100 mt-1">
              Ready to continue your learning journey in Production Engineering?
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{state.user?.points}</div>
            <div className="text-blue-100">Total Points</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Questions</h3>
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-sm text-gray-500">You've asked</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
              <p className="text-2xl font-bold text-green-600">8</p>
              <p className="text-sm text-gray-500">You've shared</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Trophy className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Rank</h3>
              <p className="text-2xl font-bold text-purple-600">#24</p>
              <p className="text-sm text-gray-500">In your batch</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Star className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Badges</h3>
              <p className="text-2xl font-bold text-orange-600">{state.user?.badges.length}</p>
              <p className="text-sm text-gray-500">Earned</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Recent Activity
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentActivity.length > 0 ? recentActivity.map((activity) => (
              <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {activity.course}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        activity.type === 'question' ? 'bg-orange-100 text-orange-800' :
                        activity.type === 'resource' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {activity.type}
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.author} • {activity.time}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {activity.votes ? `${activity.votes} votes` : `${activity.downloads} downloads`}
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="p-6 text-center text-gray-500">
                <MessageSquare className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p>No recent activity</p>
                <p className="text-sm">Start by asking a question or sharing a resource!</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Top Contributors */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Top Contributors
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {topContributors.length > 0 ? topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium ${
                      index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{contributor.name}</p>
                      <p className="text-xs text-gray-500">{contributor.badge}</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-blue-600">
                    {contributor.points} pts
                  </div>
                </div>
              )) : (
                <div className="text-center text-gray-500">
                  <Users className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p>No contributors yet</p>
                  <p className="text-sm">Be the first to contribute!</p>
                </div>
              )}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {upcomingEvents.length > 0 ? upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start space-x-3">
                  <div className={`p-1 rounded ${
                    event.type === 'deadline' ? 'bg-red-100' :
                    event.type === 'exam' ? 'bg-orange-100' : 'bg-blue-100'
                  }`}>
                    <Target className={`h-4 w-4 ${
                      event.type === 'deadline' ? 'text-red-600' :
                      event.type === 'exam' ? 'text-orange-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.date}</p>
                  </div>
                </div>
              )) : (
                <div className="text-center text-gray-500">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p>No upcoming events</p>
                  <p className="text-sm">Check back later for updates!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;