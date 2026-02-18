/**
 * StudentManagementSystem - Main Application Class
 * Demonstrates the complete Student Management System
 * Shows how all OOP concepts work together
 */
public class StudentManagementSystem {
    public static void main(String[] args) {
        System.out.println("\n╔════════════════════════════════════════════════════════╗");
        System.out.println("║    STUDENT MANAGEMENT SYSTEM - OOP DEMONSTRATION       ║");
        System.out.println("╚════════════════════════════════════════════════════════╝");

        // Create Course objects
        Course course1 = new Course("CS101", "Introduction to Programming");
        Course course2 = new Course("CS201", "Object-Oriented Design");
        Course course3 = new Course("CS301", "Data Structures");

        // Create Student objects
        Student student1 = new Student("STU001", "Alice Johnson", course1, 95);
        Student student2 = new Student("STU002", "Bob Smith", course2, 87);
        Student student3 = new Student("STU003", "Charlie Brown", course3, 72);
        Student student4 = new Student("STU004", "Diana Prince", course1, 45);

        // Store students in an array to demonstrate polymorphism
        Student[] students = {student1, student2, student3, student4};

        // Display all students - Demonstrates Polymorphism
        System.out.println("\n📋 DISPLAYING ALL ENROLLED STUDENTS:");
        System.out.println("═══════════════════════════════════════════════════════════");
        for (Student student : students) {
            student.display(); // Polymorphic method call
        }

        // Display full profiles
        System.out.println("\n📝 FULL STUDENT PROFILES:");
        System.out.println("═══════════════════════════════════════════════════════════");
        for (Student student : students) {
            student.displayFullProfile();
        }

        // Demonstrate Encapsulation - Using getters and setters
        System.out.println("\n🔐 DEMONSTRATING ENCAPSULATION:");
        System.out.println("═══════════════════════════════════════════════════════════");
        System.out.println("Original marks of " + student1.getName() + ": " + student1.getMarks());
        student1.setMarks(92); // Using setter
        System.out.println("Updated marks: " + student1.getMarks());
        System.out.println("Updated grade: " + student1.getGrade());
        System.out.println("Grade Description: " + student1.getGradeDescription(student1.getGrade()));

        // Try invalid marks - shows validation in setter
        System.out.println("\nAttempting to set invalid marks (150):");
        student1.setMarks(150);

        // Calculate class statistics
        System.out.println("\n📊 CLASS STATISTICS:");
        System.out.println("═══════════════════════════════════════════════════════════");
        displayClassStatistics(students);

        // Grade distribution
        System.out.println("\n📈 GRADE DISTRIBUTION:");
        System.out.println("═══════════════════════════════════════════════════════════");
        displayGradeDistribution(students);

        System.out.println("\n╔════════════════════════════════════════════════════════╗");
        System.out.println("║                   END OF SYSTEM                        ║");
        System.out.println("╚════════════════════════════════════════════════════════╝\n");
    }

    // Helper method to display class statistics
    private static void displayClassStatistics(Student[] students) {
        double totalMarks = 0;
        double highestMarks = 0;
        double lowestMarks = 100;
        String topStudent = "";
        String lowestStudent = "";

        for (Student student : students) {
            double marks = student.getMarks();
            totalMarks += marks;

            if (marks > highestMarks) {
                highestMarks = marks;
                topStudent = student.getName();
            }
            if (marks < lowestMarks) {
                lowestMarks = marks;
                lowestStudent = student.getName();
            }
        }

        double averageMarks = totalMarks / students.length;

        System.out.printf("Total Students: %d%n", students.length);
        System.out.printf("Average Class Marks: %.2f%n", averageMarks);
        System.out.printf("Highest Marks: %.2f (Student: %s)%n", highestMarks, topStudent);
        System.out.printf("Lowest Marks: %.2f (Student: %s)%n", lowestMarks, lowestStudent);
    }

    // Helper method to display grade distribution
    private static void displayGradeDistribution(Student[] students) {
        int gradeA = 0, gradeB = 0, gradeC = 0, gradeD = 0, gradeF = 0;

        for (Student student : students) {
            switch (student.getGrade()) {
                case "A":
                    gradeA++;
                    break;
                case "B":
                    gradeB++;
                    break;
                case "C":
                    gradeC++;
                    break;
                case "D":
                    gradeD++;
                    break;
                case "F":
                    gradeF++;
                    break;
            }
        }

        System.out.println("Grade A: " + gradeA + " students");
        System.out.println("Grade B: " + gradeB + " students");
        System.out.println("Grade C: " + gradeC + " students");
        System.out.println("Grade D: " + gradeD + " students");
        System.out.println("Grade F: " + gradeF + " students");
    }
}
