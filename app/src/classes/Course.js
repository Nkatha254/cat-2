/**
 * Course Class
 * Demonstrates: Encapsulation
 * Represents a course in the system
 */

export class Course {
  // Private attributes - Encapsulation
  #courseCode;
  #courseName;

  constructor(courseCode, courseName) {
    this.#courseCode = courseCode;
    this.#courseName = courseName;
  }

  // Getters - Encapsulation
  getCourseCode() {
    return this.#courseCode;
  }

  getCourseName() {
    return this.#courseName;
  }

  // Setters - Encapsulation
  setCourseCode(courseCode) {
    this.#courseCode = courseCode;
  }

  setCourseName(courseName) {
    this.#courseName = courseName;
  }

  // Display course information
  display() {
    return {
      code: this.#courseCode,
      name: this.#courseName
    };
  }

  // Get formatted display string
  toString() {
    return `${this.#courseName} (${this.#courseCode})`;
  }
}
