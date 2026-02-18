/**
 * GradeCalculator Interface
 * Demonstrates: Abstraction
 * Defines contract for grade calculation
 */
public interface GradeCalculator {
    // Abstract method - must be implemented by any class using this interface
    String calculateGrade(double marks);

    // Default method with implementation
    default String getGradeDescription(String grade) {
        switch (grade) {
            case "A":
                return "Excellent";
            case "B":
                return "Good";
            case "C":
                return "Average";
            case "D":
                return "Below Average";
            case "F":
                return "Failed";
            default:
                return "Invalid Grade";
        }
    }
}
