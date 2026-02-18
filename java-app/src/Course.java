/**
 * Course Class
 * Demonstrates: Encapsulation
 * Represents a course in the system
 */
public class Course {
    // Encapsulation: Private attributes
    private String courseCode;
    private String courseName;

    // Constructor
    public Course(String courseCode, String courseName) {
        this.courseCode = courseCode;
        this.courseName = courseName;
    }

    // Getters - Encapsulation
    public String getCourseCode() {
        return courseCode;
    }

    public String getCourseName() {
        return courseName;
    }

    // Setters - Encapsulation
    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    // Display course information
    public void display() {
        System.out.println("Course Code: " + courseCode + " | Course Name: " + courseName);
    }
}
