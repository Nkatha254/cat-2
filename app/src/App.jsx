import React, { useState } from "react";
import { Student, Course } from "./classes";
import {
  StudentForm,
  StudentList,
  Statistics
} from "./components";
import "./App.css";

/**
 * Main App Component
 * Orchestrates the Student Management System
 * Demonstrates OOP concepts in a React application
 */

function App() {
  // Initialize courses - demonstrates composition
  const [courses] = useState([
    new Course("CS101", "Introduction to Programming"),
    new Course("CS201", "Object-Oriented Design"),
    new Course("CS301", "Data Structures"),
    new Course("CS401", "Web Development")
  ]);

  // Initialize students with sample data
  const [students, setStudents] = useState([
    new Student("STU001", "Alice Johnson", courses[0], 95),
    new Student("STU002", "Bob Smith", courses[1], 87),
    new Student("STU003", "Charlie Brown", courses[2], 72),
    new Student("STU004", "Diana Prince", courses[0], 45)
  ]);

  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("students");

  // Handle adding new student
  const handleAddStudent = (newStudent) => {
    // Check if student with same ID exists
    const existingIndex = students.findIndex(s => s.getId() === newStudent.getId());

    if (existingIndex >= 0) {
      // Update existing student
      const updatedStudents = [...students];
      updatedStudents[existingIndex] = newStudent;
      setStudents(updatedStudents);
      setEditingStudent(null);
      alert("Student updated successfully!");
    } else {
      // Add new student
      setStudents([...students, newStudent]);
      alert("Student added successfully!");
    }
  };

  // Handle updating student
  const handleUpdateStudent = (student) => {
    setEditingStudent(student);
    setActiveTab("form");
  };

  // Handle deleting student
  const handleDeleteStudent = (studentId) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter(s => s.getId() !== studentId));
      alert("Student deleted successfully!");
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1>📚 Student Management System</h1>
          <p>Built with React & Object-Oriented Design Principles</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="app-nav">
        <button
          className={`nav-tab ${activeTab === "students" ? "active" : ""}`}
          onClick={() => setActiveTab("students")}
        >
          👥 Students ({students.length})
        </button>
        <button
          className={`nav-tab ${activeTab === "form" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("form");
            setEditingStudent(null);
          }}
        >
          ➕ Add Student
        </button>
        <button
          className={`nav-tab ${activeTab === "stats" ? "active" : ""}`}
          onClick={() => setActiveTab("stats")}
        >
          📊 Statistics
        </button>
      </nav>

      <main className="app-main">
        {/* Students Tab */}
        {activeTab === "students" && (
          <div className="tab-content">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search by ID, name, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <StudentList
              students={students}
              onUpdate={handleUpdateStudent}
              onDelete={handleDeleteStudent}
              searchTerm={searchTerm}
            />
          </div>
        )}

        {/* Form Tab */}
        {activeTab === "form" && (
          <div className="tab-content">
            <StudentForm
              onSubmit={handleAddStudent}
              editingStudent={editingStudent}
              courses={courses}
            />
          </div>
        )}

        {/* Statistics Tab */}
        {activeTab === "stats" && (
          <div className="tab-content">
            <Statistics students={students} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          OOP Concepts Demonstrated: Encapsulation, Inheritance,
          Polymorphism, Abstraction
        </p>
        <p>© 2026 CAT 2 OOD Project</p>
      </footer>
    </div>
  );
}

export default App;
