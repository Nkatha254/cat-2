import React, { useState } from "react";
import { Student, Course } from "../classes";
import "./StudentForm.css";

/**
 * StudentForm Component
 * Handles student creation and updates
 * Demonstrates React state management and form handling
 */

const StudentForm = ({ onSubmit, editingStudent, courses }) => {
  const [formData, setFormData] = useState({
    id: editingStudent?.getId() || "",
    name: editingStudent?.getName() || "",
    course: editingStudent?.getCourse() || courses[0],
    marks: editingStudent?.getMarks() || ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    setError("");
  };

  const handleCourseChange = (e) => {
    const selectedCourse = courses.find(c => c.getCourseCode() === e.target.value);
    setFormData(prev => ({
      ...prev,
      course: selectedCourse
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.id.trim()) {
      setError("Student ID is required");
      return;
    }

    if (!formData.name.trim()) {
      setError("Student name is required");
      return;
    }

    if (formData.marks === "" || formData.marks < 0 || formData.marks > 100) {
      setError("Marks must be between 0 and 100");
      return;
    }

    try {
      // Create or update student
      const student = new Student(
        formData.id,
        formData.name,
        formData.course,
        parseFloat(formData.marks)
      );

      onSubmit(student);

      // Reset form
      setFormData({
        id: "",
        name: "",
        course: courses[0],
        marks: ""
      });
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>{editingStudent ? "Edit Student" : "Add New Student"}</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label htmlFor="id">Student ID</label>
        <input
          id="id"
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="e.g., STU001"
          disabled={!!editingStudent}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Student name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="course">Course</label>
        <select
          id="course"
          value={formData.course.getCourseCode()}
          onChange={handleCourseChange}
        >
          {courses.map(course => (
            <option key={course.getCourseCode()} value={course.getCourseCode()}>
              {course.getCourseName()}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="marks">Marks (0-100)</label>
        <input
          id="marks"
          type="number"
          name="marks"
          value={formData.marks}
          onChange={handleChange}
          placeholder="0"
          min="0"
          max="100"
          step="0.01"
        />
      </div>

      <button type="submit" className="btn btn-success">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
