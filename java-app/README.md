# Java Student Management System - README

## Quick Start

### Prerequisites
- Java JDK 11 or higher installed
- Windows/Mac/Linux with command line

### Compilation and Execution

Navigate to the `src` directory:
```bash
cd src
```

Compile all Java files:
```bash
javac *.java
```

Run the application:
```bash
java StudentManagementSystem
```

## What You'll See

The application displays:
1. **Student Details** - All 4 sample students with their information
2. **Full Profiles** - Detailed view of each student
3. **Encapsulation Demo** - Shows validation working correctly
4. **Class Statistics** - Average marks, highest, lowest
5. **Grade Distribution** - Count of each grade (A-F)

## Classes Overview

### Person.java (Abstract)
- Base class for all person entities
- Demonstrates: Abstraction, Encapsulation
- Private attributes: id, name
- Abstract method: display()

### Student.java (Concrete)
- Extends: Person class
- Implements: GradeCalculator interface
- Demonstrates: Inheritance, Polymorphism, Encapsulation
- Features: Grade calculation, data validation

### Course.java
- Represents a course
- Demonstrates: Encapsulation
- Properties: courseCode, courseName

### GradeCalculator.java (Interface)
- Describes grade calculation contract
- Demonstrates: Abstraction
- Methods: calculateGrade(), getGradeDescription()

### StudentManagementSystem.java (Main)
- Application entry point
- Orchestrates all classes
- Demonstrates all OOP concepts in action

## OOP Concepts Demonstrated

✅ **Encapsulation** - Private attributes + public getters/setters with validation
✅ **Inheritance** - Student extends Person, inherits id, name, methods
✅ **Polymorphism** - Method overriding (display(), calculateGrade())
✅ **Abstraction** - Abstract Person class + GradeCalculator interface

## Sample Data

The application creates 4 students:
- Alice Johnson (STU001) - 95 marks → Grade A
- Bob Smith (STU002) - 87 marks → Grade B 
- Charlie Brown (STU003) - 72 marks → Grade C
- Diana Prince (STU004) - 45 marks → Grade F

## Grade Calculation Logic

- **90-100**: Grade A (Excellent)
- **80-89**: Grade B (Good)
- **70-79**: Grade C (Average)
- **60-69**: Grade D (Below Average)
- **Below 60**: Grade F (Failed)

## Key Features

- Automatic grade calculation
- Data validation (marks must be 0-100)
- Polymorphic display methods
- Statistics calculation
- Grade distribution summary

## Troubleshooting

| Problem | Solution |
|---------|----------|
| javac not found | Install Java JDK, add to PATH |
| Compilation errors | Check file names (case-sensitive) |
| Encapsulation failed | Setters should validate input |
| Grade calculation wrong | Check threshold values |

## Learning Outcomes

After studying this code, you'll understand:
- How to design class hierarchies
- Abstract class implementation
- Interface usage
- Method overriding
- Encapsulation with validation
- Code organization with OOP

## Next Steps

1. **Examine the code** - Read each class and understand structure
2. **Trace execution** - Follow how objects interact
3. **Modify it** - Change grade thresholds, add fields
4. **Extend it** - Follow LEARNING_EXTENSIONS.md guidelines
5. **Compare** - See the same concepts in React version

---

**Status:** Complete and Working ✅  
**Java Version:** 11+
**Created:** February 2026
