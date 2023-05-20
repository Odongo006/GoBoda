import React from 'react';
import { FaMotorcycle, FaWrench, FaUserFriends } from 'react-icons/fa';
import './course.css';

const CoursesSection = () => {
  const courses = [
    {
      title: 'Basic Riding Skills',
      description: 'Learn essential riding techniques, road safety rules, and defensive driving strategies.',
      duration: '2 weeks',
      benefits: 'Enhanced riding skills and increased safety on the road.',
      icon: <FaMotorcycle />,
    },
    {
      title: 'Mechanical Maintenance',
      description: 'Gain knowledge of basic bike maintenance, including oil changes, tire checks, and troubleshooting common issues.',
      duration: '1 week',
      benefits: 'Reduced breakdowns and cost savings on repairs.',
      icon: <FaWrench />,
    },
    {
      title: 'Customer Service and Communication',
      description: 'Develop interpersonal skills, effective communication, and strategies for providing excellent customer service.',
      duration: '1 week',
      benefits: 'Improved customer satisfaction and increased earning potential.',
      icon: <FaUserFriends />,
    },
    // Add more courses as needed
  ];

  return (
    <section>
      <div className="container">
        <h2>Course Offerings</h2>
        <p>
          We offer a range of courses specifically designed for bodaboda
          riders to enhance their skills and professional growth.
        </p>
        <div className="course-grid">
          {courses.map((course, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="course-card" key={index}>
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>
                <strong>Duration:</strong>
                {' '}
                {course.duration}
              </p>
              <p>
                <strong>Benefits:</strong>
                {' '}
                {course.benefits}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
