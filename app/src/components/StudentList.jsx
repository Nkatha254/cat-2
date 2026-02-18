import React from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css";

/**
 * StudentList Component
 * Displays all students in the system
 * Demonstrates list rendering and props drilling
 */

const StudentList = ({ students, onUpdate, onDelete, searchTerm }) => {
  // Filter students based on search term
  const filteredStudents = students.filter(student => {
    const profile = student.displayFullProfile();
    const searchLower = searchTerm.toLowerCase();

    return (
      profile.studentId.toLowerCase().includes(searchLower) ||
      profile.studentName.toLowerCase().includes(searchLower) ||
      profile.courseName.toLowerCase().includes(searchLower)
    );
  });

  if (students.length === 0) {
    return (
      <div className="empty-state">
        <p>No students enrolled yet. Add your first student to get started!</p>
      </div>
    );
  }

  if (filteredStudents.length === 0) {
    return (
      <div className="empty-state">
        <p>No students found matching "{searchTerm}"</p>
      </div>
    );
  }

  return (
    <div className="student-list">
      <div className="list-header">
        <h2>Enrolled Students ({filteredStudents.length})</h2>
      </div>
      <div className="cards-grid">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.getId()}
            student={student}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
