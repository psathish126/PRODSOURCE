import React, { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Star, 
  TrendingUp, 
  Crown,
  Award,
  Users,
  Target
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface LeaderUser {
  _id: string;
  name: string;
  rollNumber?: string;
  batch?: string;
  points: number;
  contributions: number;
  badges: string[];
  rank: number;
  weeklyPoints: number;
  monthlyPoints: number;
}

const LeaderboardSection: React.FC = () => {
  const { state } = useAuth();
  const [timeframe, setTimeframe] = useState<'all-time' | 'monthly' | 'weekly'>('all-time');
  const [category, setCategory] = useState<'overall' | 'batch' | 'course'>('overall');

  // Leaderboard data will be fetched from API
  const users: LeaderUser[] = [];

  const getPointsForTimeframe = (user: LeaderUser): number => {
    switch (timeframe) {
      case 'weekly': return user.weeklyPoints;
      case 'monthly': return user.monthlyPoints;
      default: return user.points;
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    const aPoints = getPointsForTimeframe(a);
    const bPoints = getPointsForTimeframe(b);
    return bPoints - aPoints;
  }).map((user, index) => ({ ...user, rank: index + 1 }));

  const currentUser = sortedUsers.find(user => user.rollNumber === state.user?.rollNumber);
  const topUsers = sortedUsers.slice(0, 10);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-600" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Award className="h-6 w-6 text-orange-600" />;
      default: return <span className="font-bold text-gray-600 text-lg">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 3: return 'bg-gradient-to-r from-orange-400 to-orange-600';
      default: return 'bg-gray-100';
    }
  };

  const achievements = [
    { icon: Trophy, label: 'Top Contributor', value: topUsers[0]?.name || 'No data yet' },
    { icon: TrendingUp, label: 'Most Active This Week', value: sortedUsers.sort((a, b) => b.weeklyPoints - a.weeklyPoints)[0]?.name || 'No data yet' },
    { icon: Star, label: 'Helpful Member', value: topUsers.find(u => u.badges.includes('Helper'))?.name || 'No data yet' },
    { icon: Target, label: 'Course Expert', value: topUsers.find(u => u.badges.includes('Course Expert'))?.name || 'No data yet' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1>
          <p className="text-gray-600 mt-1">See how you rank among your peers</p>
        </div>
      </div>

      {/* Current User Rank Card */}
      {currentUser && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full">
                {getRankIcon(currentUser.rank)}
              </div>
              <div>
                <h2 className="text-xl font-bold">Your Current Rank</h2>
                <p className="text-blue-100">#{currentUser.rank} out of {sortedUsers.length} students</p>
                <div className="flex items-center space-x-4 mt-2 text-sm">
                  <span>{getPointsForTimeframe(currentUser)} points</span>
                  <span>•</span>
                  <span>{currentUser.contributions} contributions</span>
                  <span>•</span>
                  <span>{currentUser.badges.length} badges</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{getPointsForTimeframe(currentUser)}</div>
              <div className="text-blue-100">Total Points</div>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Timeframe:</label>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all-time">All Time</option>
              <option value="monthly">This Month</option>
              <option value="weekly">This Week</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="overall">Overall</option>
              <option value="batch">My Batch</option>
              <option value="course">By Course</option>
            </select>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{achievement.label}</p>
                  <p className="font-medium text-gray-900">{achievement.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Top 3 Podium */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2" />
          Top Contributors
        </h2>
        
        <div className="flex items-end justify-center space-x-4 mb-8">
          {/* Second Place */}
          {topUsers[1] ? (
            <div className="text-center">
              <div className={`w-20 h-16 ${getRankBadgeColor(2)} rounded-t-lg flex items-center justify-center mb-3`}>
                <Medal className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">{topUsers[1].name}</h3>
                <p className="text-sm text-gray-600">{topUsers[1].rollNumber}</p>
                <p className="text-lg font-bold text-gray-700 mt-2">{getPointsForTimeframe(topUsers[1])}</p>
              </div>
            </div>
          ) : null}

          {/* First Place */}
          {topUsers[0] ? (
            <div className="text-center">
              <div className={`w-24 h-20 ${getRankBadgeColor(1)} rounded-t-lg flex items-center justify-center mb-3`}>
                <Crown className="h-10 w-10 text-white" />
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <h3 className="font-semibold text-gray-900">{topUsers[0].name}</h3>
                <p className="text-sm text-gray-600">{topUsers[0].rollNumber}</p>
                <p className="text-xl font-bold text-yellow-600 mt-2">{getPointsForTimeframe(topUsers[0])}</p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-24 h-20 bg-gray-200 rounded-t-lg flex items-center justify-center mb-3">
                <Trophy className="h-10 w-10 text-gray-400" />
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-500">No leader yet</h3>
                <p className="text-sm text-gray-400">Be the first!</p>
              </div>
            </div>
          )}

          {/* Third Place */}
          {topUsers[2] ? (
            <div className="text-center">
              <div className={`w-20 h-16 ${getRankBadgeColor(3)} rounded-t-lg flex items-center justify-center mb-3`}>
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">{topUsers[2].name}</h3>
                <p className="text-sm text-gray-600">{topUsers[2].rollNumber}</p>
                <p className="text-lg font-bold text-gray-700 mt-2">{getPointsForTimeframe(topUsers[2])}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Full Leaderboard Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Full Rankings
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contributions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Badges</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topUsers.length > 0 ? topUsers.map((user) => (
                <tr key={user._id} className={`hover:bg-gray-50 ${user.rollNumber === state.user?.rollNumber ? 'bg-blue-50' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getRankIcon(user.rank)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.rollNumber} • {user.batch}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-blue-600">{getPointsForTimeframe(user)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.contributions}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {user.badges.slice(0, 2).map((badge) => (
                        <span key={badge} className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded">
                          {badge}
                        </span>
                      ))}
                      {user.badges.length > 2 && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                          +{user.badges.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium">No rankings yet</p>
                    <p>Start contributing to appear on the leaderboard!</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardSection;