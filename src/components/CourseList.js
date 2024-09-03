import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data to simulate API response
  const dummyCourses = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://via.placeholder.com/150',
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

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setCourses(dummyCourses);
    }, 500);
  }, []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Course List</h2>
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCourses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <div>
                <img src={course.thumbnail} alt={course.name} style={{ width: '100px', height: '100px' }} />
                <div>
                  <h3>{course.name}</h3>
                  <p>{course.instructor}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
