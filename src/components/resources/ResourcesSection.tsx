import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  FileText, 
  Video, 
  Image, 
  Archive,
  Star,
  Filter,
  Search,
  Upload
} from 'lucide-react';
import { courses } from '../../data/courses';

interface Resource {
  _id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'image' | 'archive';
  fileUrl: string;
  courseCode: string;
  courseName: string;
  semester: number;
  uploader: string;
  uploaderId: string;
  downloads: number;
  rating: number;
  reviews: number;
  tags: string[];
  uploadDate: Date;
  fileSize: string;
}

const ResourcesSection: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'rating'>('newest');

  // Mock resources data
  const mockResources: Resource[] = [
    {
      _id: '1',
      title: 'PE101 - Calculus Formula Sheet',
      description: 'Comprehensive formula sheet covering differentiation, integration, and applications of calculus.',
      type: 'pdf',
      fileUrl: 'https://example.com/calculus-formulas.pdf',
      courseCode: 'PE101',
      courseName: 'Calculus and its Applications',
      semester: 1,
      uploader: 'Priya Sharma',
      uploaderId: '2',
      downloads: 89,
      rating: 4.8,
      reviews: 15,
      tags: ['formulas', 'calculus', 'reference', 'differentiation', 'integration'],
      uploadDate: new Date('2025-01-09T14:20:00'),
      fileSize: '2.4 MB'
    },
    {
      _id: '2',
      title: 'PE302 - Stress-Strain Diagrams',
      description: 'Collection of stress-strain diagrams for different materials including steel, aluminum, and composites.',
      type: 'pdf',
      fileUrl: 'https://example.com/stress-strain-diagrams.pdf',
      courseCode: 'PE302',
      courseName: 'Strength of Materials',
      semester: 3,
      uploader: 'Arjun Patel',
      uploaderId: '3',
      downloads: 67,
      rating: 4.6,
      reviews: 12,
      tags: ['stress', 'strain', 'materials', 'diagrams', 'steel', 'aluminum'],
      uploadDate: new Date('2025-01-08T10:15:00'),
      fileSize: '1.8 MB'
    },
    {
      _id: '3',
      title: 'PE304 - Welding Techniques Video',
      description: 'Step-by-step video tutorial covering basic welding techniques including MIG, TIG, and Arc welding.',
      type: 'video',
      fileUrl: 'https://example.com/welding-techniques.mp4',
      courseCode: 'PE304',
      courseName: 'Welding Technology',
      semester: 3,
      uploader: 'Dr. Rajesh Kumar',
      uploaderId: '4',
      downloads: 123,
      rating: 4.9,
      reviews: 28,
      tags: ['welding', 'techniques', 'MIG', 'TIG', 'arc-welding', 'practical'],
      uploadDate: new Date('2025-01-07T16:30:00'),
      fileSize: '45.2 MB'
    },
    {
      _id: '4',
      title: 'PE401 - Statistics Problem Set',
      description: 'Practice problems with solutions for probability and statistical methods. Includes hypothesis testing and regression analysis.',
      type: 'pdf',
      fileUrl: 'https://example.com/statistics-problems.pdf',
      courseCode: 'PE401',
      courseName: 'Probability and Statistical Methods',
      semester: 4,
      uploader: 'Sneha Rao',
      uploaderId: '5',
      downloads: 45,
      rating: 4.5,
      reviews: 8,
      tags: ['statistics', 'probability', 'problems', 'solutions', 'hypothesis-testing'],
      uploadDate: new Date('2025-01-06T11:45:00'),
      fileSize: '3.1 MB'
    }
  ];

  const filteredResources = mockResources.filter(resource => {
    const semesterMatch = !selectedSemester || resource.semester === selectedSemester;
    const typeMatch = selectedType === 'all' || resource.type === selectedType;
    const searchMatch = !searchTerm || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return semesterMatch && typeMatch && searchMatch;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return b.uploadDate.getTime() - a.uploadDate.getTime();
    }
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="h-5 w-5 text-red-600" />;
      case 'video': return <Video className="h-5 w-5 text-purple-600" />;
      case 'image': return <Image className="h-5 w-5 text-green-600" />;
      case 'archive': return <Archive className="h-5 w-5 text-orange-600" />;
      default: return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'bg-red-100 text-red-800';
      case 'video': return 'bg-purple-100 text-purple-800';
      case 'image': return 'bg-green-100 text-green-800';
      case 'archive': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
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
          <h1 className="text-2xl font-bold text-gray-900">Resource Bank</h1>
          <p className="text-gray-600 mt-1">Access and share study materials, notes, and educational content</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Upload className="h-4 w-4" />
          <span>Upload Resource</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{mockResources.length}</p>
              <p className="text-sm text-gray-600">Total Resources</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Download className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {mockResources.reduce((sum, r) => sum + r.downloads, 0)}
              </p>
              <p className="text-sm text-gray-600">Total Downloads</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Star className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {(mockResources.reduce((sum, r) => sum + r.rating, 0) / mockResources.length).toFixed(1)}
              </p>
              <p className="text-sm text-gray-600">Avg Rating</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <FileText className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {new Set(mockResources.map(r => r.courseCode)).size}
              </p>
              <p className="text-sm text-gray-600">Courses Covered</p>
            </div>
          </div>
        </div>
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
                placeholder="Search resources, courses, tags..."
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
              onChange={(e) => setSelectedType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="pdf">PDF Documents</option>
              <option value="video">Videos</option>
              <option value="image">Images</option>
              <option value="archive">Archives</option>
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

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="newest">Newest First</option>
            <option value="popular">Most Downloaded</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedResources.map((resource) => (
          <div key={resource._id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Resource Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getFileIcon(resource.type)}
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getTypeColor(resource.type)}`}>
                    {resource.type.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{resource.rating}</span>
                  <span>({resource.reviews})</span>
                </div>
              </div>

              {/* Course Info */}
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  {resource.courseCode}
                </span>
                <span className="text-xs text-gray-500">Sem {resource.semester}</span>
              </div>

              {/* Resource Content */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">{resource.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {resource.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    #{tag}
                  </span>
                ))}
                {resource.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    +{resource.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Resource Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{resource.downloads}</span>
                  </div>
                  <span>{resource.fileSize}</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                  Download
                </button>
              </div>

              {/* Upload Info */}
              <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
                <span>by {resource.uploader}</span>
                <span>{formatTimeAgo(resource.uploadDate)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedResources.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
          <p className="text-gray-600">Try adjusting your filters or be the first to upload a resource!</p>
        </div>
      )}
    </div>
  );
};

export default ResourcesSection;