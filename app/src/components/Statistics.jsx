import React from "react";
import "./Statistics.css";

/**
 * Statistics Component
 * Displays class statistics and grade distribution
 * Demonstrates data aggregation and visualization
 */

const Statistics = ({ students }) => {
  // Calculate statistics
  const calculateStats = () => {
    if (students.length === 0) {
      return {
        totalStudents: 0,
        averageMarks: 0,
        highestMarks: 0,
        lowestMarks: 0,
        topStudent: null,
        lowestStudent: null,
        grades: {
          A: 0,
          B: 0,
          C: 0,
          D: 0,
          F: 0
        }
      };
    }

    let totalMarks = 0;
    let highestMarks = -1;
    let lowestMarks = 101;
    let topStudent = null;
    let lowestStudent = null;
    const grades = { A: 0, B: 0, C: 0, D: 0, F: 0 };

    students.forEach((student) => {
      const profile = student.displayFullProfile();
      const marks = profile.marksObtained;

      // Update totals
      totalMarks += marks;

      // Track highest
      if (marks > highestMarks) {
        highestMarks = marks;
        topStudent = profile.studentName;
      }

      // Track lowest
      if (marks < lowestMarks) {
        lowestMarks = marks;
        lowestStudent = profile.studentName;
      }

      // Count grades
      grades[profile.gradeAchieved]++;
    });

    return {
      totalStudents: students.length,
      averageMarks: (totalMarks / students.length).toFixed(2),
      highestMarks,
      lowestMarks,
      topStudent,
      lowestStudent,
      grades
    };
  };

  const stats = calculateStats();

  if (students.length === 0) {
    return (
      <div className="statistics">
        <p className="no-data">No students yet. Add students to see statistics.</p>
      </div>
    );
  }

  return (
    <div className="statistics">
      <h2>📊 Class Statistics</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Students</div>
          <div className="stat-value">{stats.totalStudents}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Average Marks</div>
          <div className="stat-value">{stats.averageMarks}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Highest Marks</div>
          <div className="stat-value">{stats.highestMarks}</div>
          <div className="stat-subtitle">{stats.topStudent}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Lowest Marks</div>
          <div className="stat-value">{stats.lowestMarks}</div>
          <div className="stat-subtitle">{stats.lowestStudent}</div>
        </div>
      </div>

      <div className="grade-distribution">
        <h3>📈 Grade Distribution</h3>
        <div className="distribution-bars">
          {Object.entries(stats.grades).map(([grade, count]) => (
            <div key={grade} className="grade-bar">
              <div className="grade-label">{grade}</div>
              <div className="bar-container">
                <div
                  className={`bar grade-${grade}`}
                  style={{
                    width: `${(count / stats.totalStudents) * 100}%`
                  }}
                />
              </div>
              <div className="grade-count">{count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
