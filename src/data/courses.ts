import { Subject } from '../types';

export const courses: Subject[] = [
  // Semester I
  { _id: '1', name: 'Calculus and its Applications', code: 'PE101', semester: 1, description: 'Fundamental calculus concepts and applications', category: 'core' },
  { _id: '2', name: 'Physics', code: 'PE102', semester: 1, description: 'Basic physics principles and applications', category: 'core' },
  { _id: '3', name: 'Chemistry of Engineering Materials', code: 'PE103', semester: 1, description: 'Chemical properties of engineering materials', category: 'core' },
  { _id: '4', name: 'Engineering Materials and Metallurgy', code: 'PE104', semester: 1, description: 'Material science and metallurgical principles', category: 'core' },
  { _id: '5', name: 'English Language Proficiency', code: 'PE105', semester: 1, description: 'English communication and language skills', category: 'core' },
  { _id: '6', name: 'Basic Sciences Laboratory', code: 'PE106', semester: 1, description: 'Laboratory practices in basic sciences', category: 'core' },
  { _id: '7', name: 'Engineering Practices Laboratory', code: 'PE107', semester: 1, description: 'Practical engineering laboratory work', category: 'core' },
  { _id: '8', name: 'Induction Programme', code: 'PE108', semester: 1, description: 'Orientation and induction program', category: 'core' },

  // Semester II
  { _id: '9', name: 'Complex Variables and Transforms', code: 'PE201', semester: 2, description: 'Advanced mathematics with complex variables', category: 'core' },
  { _id: '10', name: 'Casting Technology', code: 'PE202', semester: 2, description: 'Metal casting processes and technology', category: 'core' },
  { _id: '11', name: 'Engineering Mechanics', code: 'PE203', semester: 2, description: 'Fundamental principles of mechanics', category: 'core' },
  { _id: '12', name: 'Basics of Electrical and Electronics Engineering', code: 'PE204', semester: 2, description: 'Fundamentals of electrical and electronics', category: 'core' },
  { _id: '13', name: 'Language Elective', code: 'PE205', semester: 2, description: 'Language skills development', category: 'core' },
  { _id: '14', name: 'Engineering Graphics', code: 'PE206', semester: 2, description: 'Technical drawing and graphics', category: 'core' },
  { _id: '15', name: 'Electrical and Electronics Engineering Laboratory', code: 'PE207', semester: 2, description: 'EEE laboratory practices', category: 'core' },
  { _id: '16', name: 'Foundations of Problem Solving', code: 'PE208', semester: 2, description: 'Problem solving methodologies', category: 'core' },
  { _id: '17', name: 'Activity Point Programme', code: 'PE209', semester: 2, description: 'Co-curricular activity program', category: 'core' },

  // Semester III
  { _id: '18', name: 'Matrix Theory and Numerical Methods', code: 'PE301', semester: 3, description: 'Advanced mathematics and numerical analysis', category: 'core' },
  { _id: '19', name: 'Strength of Materials', code: 'PE302', semester: 3, description: 'Material strength and stress analysis', category: 'core' },
  { _id: '20', name: 'Fluid Mechanics and Machinery', code: 'PE303', semester: 3, description: 'Fluid dynamics and machinery', category: 'core' },
  { _id: '21', name: 'Welding Technology', code: 'PE304', semester: 3, description: 'Welding processes and technology', category: 'core' },
  { _id: '22', name: 'Engineering Economics', code: 'PE305', semester: 3, description: 'Economic principles in engineering', category: 'core' },
  { _id: '23', name: 'Machine Drawing', code: 'PE306', semester: 3, description: 'Technical drawing for machines', category: 'core' },
  { _id: '24', name: 'Metallurgy and Strength of Materials Laboratory', code: 'PE307', semester: 3, description: 'Laboratory work in metallurgy', category: 'core' },
  { _id: '25', name: 'Building Communication Skills', code: 'PE308', semester: 3, description: 'Communication skills development', category: 'core' },
  { _id: '26', name: 'Environmental Science', code: 'PE309', semester: 3, description: 'Environmental science principles', category: 'core' },
  { _id: '27', name: 'Activity Point Programme', code: 'PE310', semester: 3, description: 'Co-curricular activity program', category: 'core' },
  { _id: '28', name: 'Heritage of Tamils / தமிழர் மரபு', code: 'PE311', semester: 3, description: 'Tamil heritage and culture', category: 'core' },

  // Semester IV
  { _id: '29', name: 'Probability and Statistical Methods', code: 'PE401', semester: 4, description: 'Statistics and probability theory', category: 'core' },
  { _id: '30', name: 'Thermal Engineering', code: 'PE402', semester: 4, description: 'Heat transfer and thermodynamics', category: 'core' },
  { _id: '31', name: 'Mechanics of Machines', code: 'PE403', semester: 4, description: 'Machine mechanics and dynamics', category: 'core' },
  { _id: '32', name: 'Design of Machine Elements', code: 'PE404', semester: 4, description: 'Machine design principles', category: 'core' },
  { _id: '33', name: 'Machining Technology', code: 'PE405', semester: 4, description: 'Manufacturing and machining processes', category: 'core' },
  { _id: '34', name: 'Thermal Engineering and Fluid Machinery Laboratory', code: 'PE406', semester: 4, description: 'Thermal engineering laboratory', category: 'core' },
  { _id: '35', name: 'Manufacturing Processes Laboratory - I', code: 'PE407', semester: 4, description: 'Manufacturing processes lab work', category: 'core' },
  { _id: '36', name: 'Python Programming Laboratory', code: 'PE408', semester: 4, description: 'Python programming practical', category: 'core' },
  { _id: '37', name: 'Problem Solving', code: 'PE409', semester: 4, description: 'Advanced problem solving techniques', category: 'core' },
  { _id: '38', name: 'Indian Constitution', code: 'PE410', semester: 4, description: 'Constitutional studies', category: 'core' },
  { _id: '39', name: 'Activity Point Programme', code: 'PE411', semester: 4, description: 'Co-curricular activity program', category: 'core' },
  { _id: '40', name: 'Tamils and Technology / தமிழரும் தொழில்நுட்பமும்', code: 'PE412', semester: 4, description: 'Tamil contributions to technology', category: 'core' },

  // Semester V
  { _id: '41', name: 'CNC Machines and Robotics', code: 'PE501', semester: 5, description: 'Computer numerical control and robotics', category: 'core' },
  { _id: '42', name: 'Process Planning and Cost Estimation', code: 'PE502', semester: 5, description: 'Manufacturing process planning', category: 'core' },
  { _id: '43', name: 'Metrology and Quality Control', code: 'PE503', semester: 5, description: 'Measurement and quality systems', category: 'core' },
  { _id: '44', name: 'Production Tooling', code: 'PE504', semester: 5, description: 'Production tools and fixtures', category: 'core' },
  { _id: '45', name: 'Fluid Power Automation', code: 'PE505', semester: 5, description: 'Hydraulic and pneumatic systems', category: 'core' },
  { _id: '46', name: 'Manufacturing Processes Laboratory - II', code: 'PE506', semester: 5, description: 'Advanced manufacturing lab', category: 'core' },
  { _id: '47', name: 'Metrology Laboratory', code: 'PE507', semester: 5, description: 'Measurement and inspection lab', category: 'core' },
  { _id: '48', name: 'Aptitude Skills', code: 'PE508', semester: 5, description: 'Aptitude and reasoning skills', category: 'core' },
  { _id: '49', name: 'Activity Point Programme', code: 'PE509', semester: 5, description: 'Co-curricular activity program', category: 'core' },

  // Semester VI
  { _id: '50', name: 'Quantitative Methods in Management', code: 'PE601', semester: 6, description: 'Quantitative management techniques', category: 'core' },
  { _id: '51', name: 'Metal Forming Processes', code: 'PE602', semester: 6, description: 'Metal forming and shaping processes', category: 'core' },
  { _id: '52', name: 'Design for Manufacture and Assembly', code: 'PE603', semester: 6, description: 'DFM and DFA principles', category: 'core' },
  { _id: '53', name: 'Professional Elective - 1', code: 'PE604', semester: 6, description: 'First professional elective', category: 'professional_elective' },
  { _id: '54', name: 'Open Elective - 1', code: 'PE605', semester: 6, description: 'First open elective', category: 'open_elective' },
  { _id: '55', name: 'Fluid Power Automation Laboratory', code: 'PE606', semester: 6, description: 'Fluid power systems lab', category: 'core' },
  { _id: '56', name: 'CAD, CAM, CAE Laboratory', code: 'PE607', semester: 6, description: 'Computer-aided design and manufacturing lab', category: 'core' },
  { _id: '57', name: 'Enhancing Problem Solving Ability with Code', code: 'PE608', semester: 6, description: 'Programming for problem solving', category: 'core' },
  { _id: '58', name: 'Activity Point Programme', code: 'PE609', semester: 6, description: 'Co-curricular activity program', category: 'core' },

  // Semester VII
  { _id: '59', name: 'Production and Operations Management', code: 'PE701', semester: 7, description: 'Production management principles', category: 'core' },
  { _id: '60', name: 'Professional Elective - 2', code: 'PE702', semester: 7, description: 'Second professional elective', category: 'professional_elective' },
  { _id: '61', name: 'Professional Elective - 3', code: 'PE703', semester: 7, description: 'Third professional elective', category: 'professional_elective' },
  { _id: '62', name: 'Professional Elective - 4', code: 'PE704', semester: 7, description: 'Fourth professional elective', category: 'professional_elective' },
  { _id: '63', name: 'Open Elective - 2', code: 'PE705', semester: 7, description: 'Second open elective', category: 'open_elective' },
  { _id: '64', name: 'Industrial Engineering Laboratory', code: 'PE706', semester: 7, description: 'Industrial engineering lab work', category: 'core' },
  { _id: '65', name: 'Innovation Practices', code: 'PE707', semester: 7, description: 'Innovation and entrepreneurship', category: 'core' },
  { _id: '66', name: 'Project Work I', code: 'PE708', semester: 7, description: 'First phase of final project', category: 'core' },

  // Semester VIII
  { _id: '67', name: 'Professional Elective - 5', code: 'PE801', semester: 8, description: 'Fifth professional elective', category: 'professional_elective' },
  { _id: '68', name: 'Professional Elective - 6', code: 'PE802', semester: 8, description: 'Sixth professional elective', category: 'professional_elective' },
  { _id: '69', name: 'Project Work II', code: 'PE803', semester: 8, description: 'Final phase of project work', category: 'core' },

  // Professional Elective Courses
  { _id: '70', name: 'Additive Manufacturing', code: 'PEE01', semester: 0, description: '3D printing and additive manufacturing technologies', category: 'professional_elective' },
  { _id: '71', name: 'Design and Manufacture of Gears', code: 'PEE02', semester: 0, description: 'Gear design and manufacturing processes', category: 'professional_elective' },
  { _id: '72', name: 'Manufacture of Automotive Components', code: 'PEE03', semester: 0, description: 'Automotive component manufacturing', category: 'professional_elective' },
  { _id: '73', name: 'Mechanical Vibrations', code: 'PEE04', semester: 0, description: 'Vibration analysis and control', category: 'professional_elective' },
  { _id: '74', name: 'Product Development Strategies', code: 'PEE05', semester: 0, description: 'Product development methodologies', category: 'professional_elective' },
  { _id: '75', name: 'Product Lifecycle Management', code: 'PEE06', semester: 0, description: 'PLM systems and strategies', category: 'professional_elective' },
  { _id: '76', name: 'Non-Traditional Machining Techniques', code: 'PEE07', semester: 0, description: 'Advanced machining processes', category: 'professional_elective' },
  { _id: '77', name: 'Environment Conscious Manufacturing', code: 'PEE08', semester: 0, description: 'Sustainable manufacturing practices', category: 'professional_elective' },
  { _id: '78', name: 'Enterprise Resource Planning', code: 'PEE09', semester: 0, description: 'ERP systems and implementation', category: 'professional_elective' },
  { _id: '79', name: 'Supply Chain Management', code: 'PEE10', semester: 0, description: 'Supply chain optimization', category: 'professional_elective' },
  { _id: '80', name: 'Sustainable Mobility and Logistics', code: 'PEE11', semester: 0, description: 'Sustainable transportation systems', category: 'professional_elective' },
  { _id: '81', name: 'Lean Manufacturing', code: 'PEE12', semester: 0, description: 'Lean production principles', category: 'professional_elective' },
  { _id: '82', name: 'Maintenance and Safety Engineering', code: 'PEE13', semester: 0, description: 'Maintenance strategies and safety', category: 'professional_elective' },
  { _id: '83', name: 'Industrial Ergonomics', code: 'PEE14', semester: 0, description: 'Workplace ergonomics and design', category: 'professional_elective' },
  { _id: '84', name: 'Work System Design', code: 'PEE15', semester: 0, description: 'Work system optimization', category: 'professional_elective' },
  { _id: '85', name: 'Measurement Systems', code: 'PEE16', semester: 0, description: 'Advanced measurement techniques', category: 'professional_elective' },
  { _id: '86', name: 'Statistical Quality Control', code: 'PEE17', semester: 0, description: 'Statistical process control', category: 'professional_elective' },
  { _id: '87', name: 'Six Sigma', code: 'PEE18', semester: 0, description: 'Six Sigma quality methodology', category: 'professional_elective' },
  { _id: '88', name: 'Modeling and Control of Dynamic Systems', code: 'PEE19', semester: 0, description: 'Dynamic system modeling', category: 'professional_elective' },
  { _id: '89', name: 'PLC Programming and Applications', code: 'PEE20', semester: 0, description: 'Programmable logic controllers', category: 'professional_elective' },
  { _id: '90', name: 'Factory Automation', code: 'PEE21', semester: 0, description: 'Industrial automation systems', category: 'professional_elective' },

  // Professional Elective Verticals for Honors - Vertical I
  { _id: '91', name: 'Composite Materials Processing', code: 'PEV01', semester: 0, description: 'Composite material manufacturing', category: 'professional_elective', vertical: 'Product Design and Manufacturing' },
  { _id: '92', name: 'Computational Fluid Dynamics', code: 'PEV02', semester: 0, description: 'CFD analysis and simulation', category: 'professional_elective', vertical: 'Product Design and Manufacturing' },
  { _id: '93', name: 'Computer Aided Design and Analysis', code: 'PEV03', semester: 0, description: 'CAD and CAE systems', category: 'professional_elective', vertical: 'Product Design and Manufacturing' },
  { _id: '94', name: 'Finite Element Applications in Manufacturing', code: 'PEV04', semester: 0, description: 'FEA in manufacturing processes', category: 'professional_elective', vertical: 'Product Design and Manufacturing' },
  { _id: '95', name: 'Precision Manufacturing', code: 'PEV05', semester: 0, description: 'High-precision manufacturing techniques', category: 'professional_elective', vertical: 'Product Design and Manufacturing' },
  { _id: '96', name: 'Surface Engineering and Tribology', code: 'PEV06', semester: 0, description: 'Surface treatments and tribology', category: 'professional_elective', vertical: 'Product Design and Manufacturing' },

  // Professional Elective Verticals for Honors - Vertical II
  { _id: '97', name: 'Automated Assembly System Design', code: 'PEV07', semester: 0, description: 'Automated assembly systems', category: 'professional_elective', vertical: 'Industrial Automation' },
  { _id: '98', name: 'Computer Integrated Manufacturing', code: 'PEV08', semester: 0, description: 'CIM systems and integration', category: 'professional_elective', vertical: 'Industrial Automation' },
  { _id: '99', name: 'Mechatronics', code: 'PEV09', semester: 0, description: 'Mechatronic system design', category: 'professional_elective', vertical: 'Industrial Automation' },
  { _id: '100', name: 'Material Handling Systems', code: 'PEV10', semester: 0, description: 'Automated material handling', category: 'professional_elective', vertical: 'Industrial Automation' },
  { _id: '101', name: 'Sensors for Condition Monitoring', code: 'PEV11', semester: 0, description: 'Sensor systems for monitoring', category: 'professional_elective', vertical: 'Industrial Automation' },
  { _id: '102', name: 'Sensors and Control Systems in Manufacturing', code: 'PEV12', semester: 0, description: 'Control systems in manufacturing', category: 'professional_elective', vertical: 'Industrial Automation' },

  // Language Electives
  { _id: '103', name: 'Communication Skills for Engineers', code: 'PEL01', semester: 0, description: 'Engineering communication skills', category: 'language_elective' },
  { _id: '104', name: 'Basic German', code: 'PEL02', semester: 0, description: 'German language fundamentals', category: 'language_elective' },
  { _id: '105', name: 'Basic French', code: 'PEL03', semester: 0, description: 'French language fundamentals', category: 'language_elective' },
  { _id: '106', name: 'Basic Japanese', code: 'PEL04', semester: 0, description: 'Japanese language fundamentals', category: 'language_elective' },

  // Open Electives
  { _id: '107', name: 'Battery Technology', code: 'PEO01', semester: 0, description: 'Battery systems and technology', category: 'open_elective' },
  { _id: '108', name: 'Digital Marketing for Engineers', code: 'PEO02', semester: 0, description: 'Digital marketing principles', category: 'open_elective' },
  { _id: '109', name: 'Financial Management', code: 'PEO03', semester: 0, description: 'Financial management principles', category: 'open_elective' },
  { _id: '110', name: 'Industrial Internet of Things', code: 'PEO04', semester: 0, description: 'IoT applications in industry', category: 'open_elective' },
  { _id: '111', name: 'Innovation and Leadership Management', code: 'PEO05', semester: 0, description: 'Innovation and leadership skills', category: 'open_elective' },
  { _id: '112', name: 'Professional Ethics', code: 'PEO06', semester: 0, description: 'Ethics in professional practice', category: 'open_elective' },
  { _id: '113', name: 'Sustainable Development Goals for Manufacturing Industries', code: 'PEO07', semester: 0, description: 'SDGs in manufacturing', category: 'open_elective' },
  { _id: '114', name: 'Virtual Reality Systems and Applications', code: 'PEO08', semester: 0, description: 'VR technology and applications', category: 'open_elective' },

  // One-Credit Courses
  { _id: '115', name: 'Advanced Materials for Armour Applications', code: 'PEC01', semester: 0, description: 'Advanced armor materials', category: 'one_credit' },
  { _id: '116', name: 'Introduction to Design and Manufacture of Armour Systems', code: 'PEC02', semester: 0, description: 'Armor system design', category: 'one_credit' },
  { _id: '117', name: 'Non Destructive Testing of Aircraft Structures', code: 'PEC03', semester: 0, description: 'NDT for aircraft structures', category: 'one_credit' },
  { _id: '118', name: 'Precision Machining', code: 'PEC04', semester: 0, description: 'Precision machining techniques', category: 'one_credit' },
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
    course.description.toLowerCase().includes(searchTerm) ||
    (course.vertical && course.vertical.toLowerCase().includes(searchTerm))
  );
};

export const getCoursesByCategory = (category: string): Subject[] => {
  return courses.filter(course => course.category === category);
};

export const getAllSemesters = (): number[] => {
  const semesters = [...new Set(courses.filter(c => c.semester > 0).map(c => c.semester))];
  return semesters.sort((a, b) => a - b);
};

export const getCourseStats = () => {
  const totalCourses = courses.length;
  const coreSubjects = courses.filter(c => c.category === 'core').length;
  const professionalElectives = courses.filter(c => c.category === 'professional_elective').length;
  const openElectives = courses.filter(c => c.category === 'open_elective').length;
  const languageElectives = courses.filter(c => c.category === 'language_elective').length;
  const oneCreditCourses = courses.filter(c => c.category === 'one_credit').length;

  return {
    totalCourses,
    coreSubjects,
    professionalElectives,
    openElectives,
    languageElectives,
    oneCreditCourses
  };
};