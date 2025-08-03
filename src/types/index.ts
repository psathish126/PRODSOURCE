export interface User {
  _id: string;
  rollNumber?: string;
  staffId?: string;
  email: string;
  name: string;
  batch?: string;
  role: 'student' | 'admin';
  points: number;
  contributions: number;
  badges: string[];
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    offlineMode: boolean;
  };
  created: Date;
  lastActive: Date;
}

export interface Subject {
  _id: string;
  name: string;
  code: string;
  semester: number;
  description: string;
  category: 'core' | 'professional_elective' | 'open_elective' | 'language_elective' | 'one_credit';
  vertical?: string;
}

export interface Post {
  _id: string;
  type: 'question' | 'answer' | 'resource';
  authorId: string;
  author: User;
  subjectId: string;
  subject: Subject;
  title: string;
  content: string;
  fileUrls: string[];
  tags: string[];
  status: 'pending' | 'approved' | 'rejected';
  views: number;
  votes: number;
  hasVoted?: boolean;
  voteType?: 'up' | 'down';
  comments: Comment[];
  created: Date;
  approved?: Date;
}

export interface Comment {
  _id: string;
  postId: string;
  authorId: string;
  author: User;
  content: string;
  votes: number;
  hasVoted?: boolean;
  voteType?: 'up' | 'down';
  created: Date;
}

export interface Notification {
  _id: string;
  userId: string;
  type: 'approval' | 'comment' | 'achievement' | 'announcement';
  title: string;
  content: string;
  read: boolean;
  entityId?: string;
  created: Date;
}

export interface Analytics {
  totalUsers: number;
  activeUsers: number;
  totalPosts: number;
  totalContributions: number;
  courseEngagement: { [courseCode: string]: number };
  userActivity: { date: string; count: number }[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  type: 'contribution' | 'engagement' | 'special';
}