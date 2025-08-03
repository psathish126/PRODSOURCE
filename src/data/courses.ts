import { Subject } from '../types';

export const courses: Subject[] = [
  // Semester I
  { _id: '1', name: 'Calculus and its Applications', code: 'PE101', semester: 1, description: 'Fundamental calculus concepts', category: 'core' },
  { _id: '2', name: 'Physics', code: 'PE102', semester: 1, description: 'Basic physics principles', category: 'core' },
  { _id: '3', name: 'Chemistry of Engineering Materials', code: 'PE103', semester: 1, description: 'Material chemistry', category: 'core' },
  { _id: '4', name: 'Engineering Materials and Metallurgy', code: 'PE104', semester: 1, description: 'Material science basics', category: 'core' },
  { _id: '5', name: 'English Language Proficiency', code: 'PE105', semester: 1, description: 'English communication', category: 'core' },
  { _id: '6', name: 'Basic Sciences Laboratory', code: 'PE106', semester: 1, description: 'Laboratory practices', category: 'core' },
  { _id: '7', name: 'Engineering Practices Laboratory', code: 'PE107', semester: 1, description: 'Practical engineering', category: 'core' },
  { _id: '8', name: 'Induction Programme', code: 'PE108', semester: 1, description: 'Orientation program', category: 'core' },

  // Semester II
  { _id: '9', name: 'Complex Variables and Transforms', code: 'PE201', semester: 2, description: 'Advanced mathematics', category: 'core' },
  { _id: '10', name: 'Casting Technology', code: 'PE202', semester: 2, description: 'Metal casting processes', category: 'core' },
  { _id: '11', name: 'Engineering Mechanics', code: 'PE203', semester: 2, description: 'Mechanics principles', category: 'core' },
  { _id: '12', name: 'Basics of Electrical and Electronics Engineering', code: 'PE204', semester: 2, description: 'EEE fundamentals', category: 'core' },
  { _id: '13', name: 'Language Elective', code: 'PE205', semester: 2, description: 'Language skills', category: 'core' },
  { _id: '14', name: 'Engineering Graphics', code: 'PE206', semester: 2, description: 'Technical drawing', category: 'core' },

  // Semester III
  { _id: '15', name: 'Matrix Theory and Numerical Methods', code: 'PE301', semester: 3, description: 'Advanced mathematics', category: 'core' },
  { _id: '16', name: 'Strength of Materials', code: 'PE302', semester: 3, description: 'Material strength analysis', category: 'core' },
  { _id: '17', name: 'Fluid Mechanics and Machinery', code: 'PE303', semester: 3, description: 'Fluid dynamics', category: 'core' },
  { _id: '18', name: 'Welding Technology', code: 'PE304', semester: 3, description: 'Welding processes', category: 'core' },
  { _id: '19', name: 'Engineering Economics', code: 'PE305', semester: 3, description: 'Economic principles', category: 'core' },

  // Semester IV
  { _id: '20', name: 'Probability and Statistical Methods', code: 'PE401', semester: 4, description: 'Statistics and probability', category: 'core' },
  { _id: '21', name: 'Thermal Engineering', code: 'PE402', semester: 4, description: 'Heat transfer and thermodynamics', category: 'core' },
  { _id: '22', name: 'Mechanics of Machines', code: 'PE403', semester: 4, description: 'Machine mechanics', category: 'core' },
  { _id: '23', name: 'Design of Machine Elements', code: 'PE404', semester: 4, description: 'Machine design principles', category: 'core' },
  { _id: '24', name: 'Machining Technology', code: 'PE405', semester: 4, description: 'Manufacturing processes', category: 'core' },

  // Professional Electives
  { _id: '25', name: 'Additive Manufacturing', code: 'PEE01', semester: 0, description: '3D printing technologies', category: 'professional_elective' },
  { _id: '26', name: 'Design and Manufacture of Gears', code: 'PEE02', semester: 0, description: 'Gear systems', category: 'professional_elective' },
  { _id: '27', name: 'Lean Manufacturing', code: 'PEE12', semester: 0, description: 'Lean principles', category: 'professional_elective' },
  { _id: '28', name: 'Six Sigma', code: 'PEE18', semester: 0, description: 'Quality improvement', category: 'professional_elective' },

  // Open Electives
  { _id: '29', name: 'Digital Marketing for Engineers', code: 'PEO02', semester: 0, description: 'Marketing fundamentals', category: 'open_elective' },
  { _id: '30', name: 'Financial Management', code: 'PEO03', semester: 0, description: 'Finance basics', category: 'open_elective' },
  { _id: '31', name: 'Industrial Internet of Things', code: 'PEO04', semester: 0, description: 'IoT applications', category: 'open_elective' },
];

export const getCoursesBySemester = (semester: number): Subject[] => {
  return courses.filter(course => course.semester === semester);
};

export const getCourseByCode = (code: string): Subject | undefined => {
  return courses.find(course => course.code === code);
};

export const searchCourses = (query: string): Subject[] => {
  const searchTerm = query.toLowerCase();
  return courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm) ||
    course.code.toLowerCase().includes(searchTerm) ||
    course.description.toLowerCase().includes(searchTerm)
  );
};