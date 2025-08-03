import React, { useState } from 'react';
import { 
  Plus, 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  Eye, 
  Clock,
  Filter,
  Search
} from 'lucide-react';
import { Post } from '../../types';
import { courses } from '../../data/courses';

const ForumSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'question' | 'answer' | 'resource'>('all');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock posts data
  const mockPosts: Post[] = [
    {
      _id: '1',
      type: 'question',
      authorId: '1',
      author: {
        _id: '1',
        name: 'Raj Kumar',
        email: 'raj@college.edu',
        rollNumber: '2P23P042',
        role: 'student',
        points: 75,
        contributions: 3,
        badges: ['First Post'],
        preferences: { theme: 'light', notifications: true, offlineMode: false },
        created: new Date(),
        lastActive: new Date(),
      },
      subjectId: '16',
      subject: courses.find(c => c._id === '16')!,
      title: 'Doubt in PE302 - Stress-Strain relationship',
      content: 'I am having trouble understanding the relationship between stress and strain in different materials. Can someone explain with examples?',
      fileUrls: [],
      tags: ['stress', 'strain', 'materials'],
      status: 'approved',
      views: 24,
      votes: 5,
      comments: [],
      created: new Date('2025-01-10T10:30:00'),
    },
    {
      _id: '2',
      type: 'resource',
      authorId: '2',
      author: {
        _id: '2',
        name: 'Priya Sharma',
        email: 'priya@college.edu',
        rollNumber: '2P22P018',
        role: 'student',
        points: 120,
        contributions: 8,
        badges: ['Helper', 'Resource Creator'],
        preferences: { theme: 'light', notifications: true, offlineMode: false },
        created: new Date(),
        lastActive: new Date(),
      },
      subjectId: '1',
      subject: courses.find(c => c._id === '1')!,
      title: 'PE101 - Calculus Formula Sheet',
      content: 'Comprehensive formula sheet for calculus covering all important formulas and theorems.',
      fileUrls: ['https://example.com/calculus-formulas.pdf'],
      tags: ['calculus', 'formulas', 'reference'],
      status: 'approved',
      views: 89,
      votes: 15,
      comments: [],
      created: new Date('2025-01-09T14:20:00'),
    },
    {
      _id: '3',
      type: 'question',
      authorId: '3',
      author: {
        _id: '3',
        name: 'Arjun Patel',
        email: 'arjun@college.edu',
        rollNumber: '2P23P015',
        role: 'student',
        points: 200,
        contributions: 12,
        badges: ['Course Expert', 'Helper'],
        preferences: { theme: 'light', notifications: true, offlineMode: false },
        created: new Date(),
        lastActive: new Date(),
      },
      subjectId: '18',
      subject: courses.find(c => c._id === '18')!,
      title: 'Welding defects in PE304 - Common causes?',
      content: 'What are the most common welding defects and their causes? Preparing for upcoming lab session.',
      fileUrls: [],
      tags: ['welding', 'defects', 'lab'],
      status: 'approved',
      views: 42,
      votes: 8,
      comments: [],
      created: new Date('2025-01-08T16:45:00'),
    },
  ];

  const filteredPosts = mockPosts.filter(post => {
    const typeMatch = selectedType === 'all' || post.type === selectedType;
    const semesterMatch = !selectedSemester || post.subject.semester === selectedSemester;
    const searchMatch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.subject.code.toLowerCase().includes(searchTerm.toLowerCase());
    
    return typeMatch && semesterMatch && searchMatch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'question': return 'bg-orange-100 text-orange-800';
      case 'resource': return 'bg-green-100 text-green-800';
      case 'answer': return 'bg-purple-100 text-purple-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Q&A Forum</h1>
          <p className="text-gray-600 mt-1">Ask questions, share knowledge, and help your peers</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>New Post</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts, courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Type Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="question">Questions</option>
              <option value="resource">Resources</option>
              <option value="answer">Answers</option>
            </select>
          </div>

          {/* Semester Filter */}
          <select
            value={selectedSemester || ''}
            onChange={(e) => setSelectedSemester(e.target.value ? parseInt(e.target.value) : null)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Semesters</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
              <option key={sem} value={sem}>Semester {sem}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getTypeColor(post.type)}`}>
                    {post.type}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    {post.subject.code}
                  </span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">Sem {post.subject.semester}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{formatTimeAgo(post.created)}</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">{post.content}</p>
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Post Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{post.votes}</span>
                    </button>
                    <button className="text-gray-500 hover:text-red-600 transition-colors">
                      <ThumbsDown className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.comments.length} replies</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>by</span>
                  <span className="font-medium">{post.author.name}</span>
                  <span>({post.author.rollNumber})</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">Try adjusting your filters or be the first to post!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumSection;