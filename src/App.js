import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  // Dummy data to be passed to components
  const courses = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://devtop.io/wp-content/uploads/2022/10/react-native-1.png',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native, setting up your development environment.' },
        { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app using React Native components.' },
      ],
    },
    {
      id: 2,
      name: 'Advanced React',
      instructor: 'Jane Smith',
      description: 'Dive deep into React and learn advanced concepts and patterns.',
      enrollmentStatus: 'In Progress',
      thumbnail: 'https://via.placeholder.com/150',
      duration: '6 weeks',
      schedule: 'Mondays and Wednesdays, 5:00 PM - 7:00 PM',
      location: 'Online',
      prerequisites: ['Basic React knowledge'],
      syllabus: [
        { week: 1, topic: 'Hooks in Depth', content: 'Understanding the power of hooks in React.' },
        { week: 2, topic: 'Context API and Reducers', content: 'Managing state with Context API and reducers.' },
      ],
    },
  ];

  const enrolledCourses = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      dueDate: '2024-12-01',
      progress: 50,
      completed: false,
      thumbnail: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Advanced React',
      instructor: 'Jane Smith',
      dueDate: '2024-11-15',
      progress: 80,
      completed: false,
      thumbnail: 'https://via.placeholder.com/150'
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetails courses={courses} />} />
        <Route path="/dashboard" element={<StudentDashboard enrolledCourses={enrolledCourses} />} />
      </Routes>
    </Router>
  );
};

export default App;
