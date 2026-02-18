Student Management System – Complete Documentation
Project Overview

This project is a complete implementation of a Student Management System built using Object-Oriented Programming (OOP) principles.

The project contains two versions:

A Java Console Application (backend-focused implementation)

A React Web Application (modern frontend implementation)

Both versions demonstrate the same OOP concepts but in different programming environments.

Project Structure
CAT 2 OOD/
├── src/                          (Java Implementation)
│   ├── Person.java
│   ├── Student.java
│   ├── Course.java
│   ├── GradeCalculator.java
│   └── StudentManagementSystem.java
│
├── react-app/                    (React Implementation)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── classes/
│   │   │   ├── Person.js
│   │   │   ├── Student.js
│   │   │   ├── Course.js
│   │   │   ├── GradeCalculator.js
│   │   │   └── index.js
│   │   ├── components/
│   │   │   ├── StudentCard.jsx
│   │   │   ├── StudentForm.jsx
│   │   │   ├── StudentList.jsx
│   │   │   ├── Statistics.jsx
│   │   ├── App.jsx
│   ├── package.json
│   └── README.md
│
├── README.md
├── SETUP_GUIDE.md
├── OOP_CONCEPTS_DETAILED.md
├── TEST_CASES.md
├── LEARNING_EXTENSIONS.md
└── QUICK_START_GUIDE.md

Key Features

Both versions include:

Encapsulation using private variables and getter/setter methods with validation

Inheritance where Student extends Person

Polymorphism through method overriding (display and calculateGrade)

Abstraction using abstract classes and interfaces

Automatic grade calculation (A–F grading system)

Data validation to ensure accuracy

Management of multiple students

Course assignment to students

Class statistics such as averages and grade distribution

Java Version Includes:

Console-based interface

Command-line interaction

Batch processing

Clear structure for learning OOP

React Version Includes:

Modern web interface

Interactive user interface

Real-time form validation

Visual statistics and charts

Responsive design

Live updates during development

How to Run the Project
Java Version

Open Command Prompt and run:

cd "C:\Users\Doreen PC\Desktop\CAT 2 OOD\src"
javac *.java
java StudentManagementSystem


Requirements:

Java JDK 11 or higher installed

React Version

Open Command Prompt and run:

cd "C:\Users\Doreen PC\Desktop\CAT 2 OOD\react-app"
npm install
npm start


Requirements:

Node.js version 14 or higher installed

OOP Concepts Demonstrated
1. Encapsulation

Encapsulation means protecting data by keeping variables private and accessing them using methods.

Benefits:

Protects data from unauthorized access

Ensures validation before assigning values

Makes the system more secure and maintainable

2. Inheritance

Inheritance allows a class to reuse properties and methods from another class.

In this project:

Student inherits from Person

A Student is a Person

Benefits:

Reduces code repetition

Makes relationships clear

Improves reusability

3. Polymorphism

Polymorphism allows the same method name to behave differently in different classes.

In this project:

The display() method behaves differently in Person and Student

The calculateGrade() method is implemented differently depending on context

Benefits:

Makes code flexible

Allows easy expansion

Supports clean design

4. Abstraction

Abstraction hides implementation details and only shows necessary features.

In this project:

Person is an abstract class

GradeCalculator is an interface

Benefits:

Simplifies complexity

Enforces rules for subclasses

Improves structure and readability

Java vs React Comparison
Aspect	Java	React
Environment	Console	Web Browser
Interface	Text-based	Graphical
User Input	Scanner	Forms
Output	System.out.println	JSX Components
Deployment	JAR file	Web build
Sample Students

The system includes sample data:

Alice Johnson – STU001 – 95 marks – Grade A

Bob Smith – STU002 – 87 marks – Grade B

Charlie Brown – STU003 – 72 marks – Grade C

Diana Prince – STU004 – 45 marks – Grade F

What You Learn From This Project

After completing this project, you will understand:

OOP Skills

The four pillars of OOP

How to design classes properly

How to build reusable systems

Java Skills

Creating classes and objects

Using abstract classes and interfaces

Compiling and running programs

React Skills

Component structure

State management using hooks

Form handling and validation

Responsive design

Software Engineering Skills

Code organization

Maintainability

Scalability

Testing strategies

Verification Checklist
Java Version

Java is installed

Code compiles successfully

Program runs without errors

Students display correctly

Statistics are calculated properly

React Version

Node.js is installed

npm install runs successfully

Server starts without errors

Students are visible in the browser

Add/Edit/Delete functionality works

Statistics update automatically

Conclusion

This Student Management System proves that OOP principles are universal. Whether using Java or React, the same four principles apply:

Encapsulation – Protect data

Inheritance – Reuse code

Polymorphism – Write flexible programs

Abstraction – Hide complexity

By implementing the system in both Java and React, you gain a deeper understanding of how OOP works across different technologies.

Project Information

Project Title: Student Management System

Version: 1.0

Created: February 2026

Java Requirement: Version 11+

Node Requirement: Version 14+

React Version: 18.2.0
