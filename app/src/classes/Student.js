/**
 * Student Class
 * Demonstrates: Inheritance, Encapsulation, and Polymorphism
 * Extends Person and implements GradeCalculator interface
 */

import { Person } from "./Person";
import { calculateGradeFromMarks, getDefaultGradeDescription } from "./GradeCalculator";

export class Student extends Person {
  // Private attributes - Encapsulation
  #course;
  #marks;
  #grade;

  constructor(id, name, course, marks) {
    // Call parent constructor - Inheritance
    super(id, name);
    this.#course = course;
    this.setMarks(marks); // Use setter for validation
  }

  // Getters - Encapsulation
  getCourse() {
    return this.#course;
  }

  getMarks() {
    return this.#marks;
  }

  getGrade() {
    return this.#grade;
  }

  // Setters - Encapsulation with validation
  setCourse(course) {
    this.#course = course;
  }

  setMarks(marks) {
    // Validation - Encapsulation ensures data integrity
    if (marks >= 0 && marks <= 100) {
      this.#marks = marks;
      this.#grade = this.calculateGrade(marks); // Recalculate grade
    } else {
      throw new Error(
        "Invalid marks! Marks must be between 0 and 100."
      );
    }
  }

  // Polymorphism: Override calculateGrade method from GradeCalculator
  calculateGrade(marks) {
    return calculateGradeFromMarks(marks);
  }

  // Polymorphism: Implement interface method
  getGradeDescription(grade) {
    return getDefaultGradeDescription(grade);
  }

  // Polymorphism: Override display method from Person abstract class
  display() {
    return {
      id: this.getId(),
      name: this.getName(),
      course: this.#course.toString(),
      marks: this.#marks,
      grade: this.#grade,
      gradeStatus: this.getGradeDescription(this.#grade),
      basicInfo: this.printBasicInfo()
    };
  }

  // Additional method to get full student profile
  displayFullProfile() {
    return {
      studentId: this.getId(),
      studentName: this.getName(),
      courseCode: this.#course.getCourseCode(),
      courseName: this.#course.getCourseName(),
      marksObtained: this.#marks,
      gradeAchieved: this.#grade,
      performance: this.getGradeDescription(this.#grade)
    };
  }

  // Get all student data as object
  toJSON() {
    return {
      id: this.getId(),
      name: this.getName(),
      course: this.#course.display(),
      marks: this.#marks,
      grade: this.#grade
    };
  }

  // Clone student object
  clone() {
    return new Student(
      this.getId(),
      this.getName(),
      this.#course,
      this.#marks
    );
  }
}
