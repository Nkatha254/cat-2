import React from "react";
import "./StudentCard.css";

/**
 * StudentCard Component
 * Displays individual student information
 * Demonstrates component composition and props usage
 */

const StudentCard = ({ student, onUpdate, onDelete }) => {
  const profile = student.displayFullProfile();

  return (
    <div className="student-card">
      <div className="card-header">
        <h3>{profile.studentName}</h3>
        <span className={`grade-badge grade-${profile.gradeAchieved}`}>
          {profile.gradeAchieved}
        </span>
      </div>

      <div className="card-content">
        <div className="info-group">
          <label>Student ID:</label>
          <span>{profile.studentId}</span>
        </div>

        <div className="info-group">
          <label>Course:</label>
          <span>{profile.courseName}</span>
        </div>

        <div className="info-group">
          <label>Marks:</label>
          <span className="marks">{profile.marksObtained}/100</span>
        </div>

        <div className="info-group">
          <label>Performance:</label>
          <span className="performance">{profile.performance}</span>
        </div>
      </div>

      <div className="card-footer">
        <button
          onClick={() => onUpdate(student)}
          className="btn btn-primary"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(student.getId())}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
