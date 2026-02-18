/**
 * Student Class
 * Demonstrates: Inheritance, Encapsulation, and Polymorphism
 * Extends Person and implements GradeCalculator interface
 */
public class Student extends Person implements GradeCalculator {
    // Encapsulation: Private attributes
    private Course course;
    private double marks;
    private String grade;

    // Constructor
    public Student(String id, String name, Course course, double marks) {
        super(id, name); // Call parent constructor - Inheritance
        this.course = course;
        this.marks = marks;
        this.grade = calculateGrade(marks); // Calculate grade upon creation
    }

    // Getters - Encapsulation
    public Course getCourse() {
        return course;
    }

    public double getMarks() {
        return marks;
    }

    public String getGrade() {
        return grade;
    }

    // Setters - Encapsulation
    public void setCourse(Course course) {
        this.course = course;
    }

    public void setMarks(double marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
            this.grade = calculateGrade(marks); // Recalculate grade
        } else {
            System.out.println("Invalid marks! Marks must be between 0 and 100.");
        }
    }

    // Polymorphism: Override calculateGrade method from GradeCalculator interface
    @Override
    public String calculateGrade(double marks) {
        if (marks >= 90) {
            return "A";
        } else if (marks >= 80) {
            return "B";
        } else if (marks >= 70) {
            return "C";
        } else if (marks >= 60) {
            return "D";
        } else {
            return "F";
        }
    }

    // Polymorphism: Override display method from Person abstract class
    @Override
    public void display() {
        System.out.println("\n========== STUDENT DETAILS ==========");
        printBasicInfo(); // Call parent method
        System.out.println("Course: " + course.getCourseName() + " (" + course.getCourseCode() + ")");
        System.out.println("Marks: " + marks);
        System.out.println("Grade: " + grade);
        System.out.println("Grade Status: " + getGradeDescription(grade)); // Interface method
        System.out.println("====================================");
    }

    // Additional method to display full student profile
    public void displayFullProfile() {
        System.out.println("\n========== FULL STUDENT PROFILE ==========");
        System.out.println("Student ID: " + getId());
        System.out.println("Student Name: " + getName());
        course.display();
        System.out.println("Marks Obtained: " + marks + "/100");
        System.out.println("Grade Achieved: " + grade);
        System.out.println("Performance: " + getGradeDescription(grade));
        System.out.println("==========================================");
    }
}
