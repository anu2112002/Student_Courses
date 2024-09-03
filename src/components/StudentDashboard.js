import React, { useState } from 'react';

const StudentDashboard = ({ enrolledCourses }) => {
  const [courses, setCourses] = useState(enrolledCourses);

  const markAsCompleted = (courseId) => {
    setCourses(
      courses.map(course =>
        course.id === courseId ? { ...course, completed: true } : course
      )
    );
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      {courses.length === 0 ? (
        <p>You are not enrolled in any courses.</p>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.id} style={{ marginBottom: '20px' }}>
              <div>
                <img src={course.thumbnail} alt={course.name} style={{ width: '100px', height: '100px' }} />
                <div>
                  <h3>{course.name}</h3>
                  <p><strong>Instructor:</strong> {course.instructor}</p>
                  <p><strong>Due Date:</strong> {course.dueDate}</p>
                  <div>
                    <strong>Progress:</strong>
                    <progress value={course.progress} max="100"></progress>
                  </div>
                  {course.completed ? (
                    <p style={{ color: 'green' }}>Completed</p>
                  ) : (
                    <button onClick={() => markAsCompleted(course.id)}>Mark as Completed</button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentDashboard;
