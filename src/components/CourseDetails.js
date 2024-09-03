import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) return <div>Course not found</div>;

  return (
    <div>
      <h1>{course.name}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      <div>
        <h3>Syllabus</h3>
        {course.syllabus.map((item, index) => (
          <div key={index}>
            <p><strong>Week {item.week}:</strong> {item.topic}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
