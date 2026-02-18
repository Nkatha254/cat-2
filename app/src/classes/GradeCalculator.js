/**
 * GradeCalculator Interface (using Symbol technique)
 * Demonstrates: Abstraction
 * Defines contract for grade calculation
 */

const GRADE_CALCULATOR = Symbol("GradeCalculator");

export const GradeCalculator = {
  // Abstract methods that implementations must provide
  calculateGrade: Symbol("calculateGrade"),
  getGradeDescription: Symbol("getGradeDescription"),

  // Check if an object implements this interface
  isImplementedBy: (obj) => {
    return (
      typeof obj.calculateGrade === "function" &&
      typeof obj.getGradeDescription === "function"
    );
  }
};

// Default grade description implementation
export const getDefaultGradeDescription = (grade) => {
  const descriptions = {
    A: "Excellent",
    B: "Good",
    C: "Average",
    D: "Below Average",
    F: "Failed"
  };
  return descriptions[grade] || "Invalid Grade";
};

// Default grade calculation strategy
export const calculateGradeFromMarks = (marks) => {
  if (marks >= 90) return "A";
  if (marks >= 80) return "B";
  if (marks >= 70) return "C";
  if (marks >= 60) return "D";
  return "F";
};
