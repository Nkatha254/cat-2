/**
 * Abstract Person Class
 * Demonstrates: Abstraction and Encapsulation
 * Base class for all person entities in the system
 */
public abstract class Person {
    // Encapsulation: Private attributes
    private String id;
    private String name;

    // Constructor
    public Person(String id, String name) {
        this.id = id;
        this.name = name;
    }

    // Getters - Encapsulation
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    // Setters - Encapsulation
    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Abstract method - Polymorphism
    // Subclasses must implement this method
    public abstract void display();

    // Concrete method in abstract class
    public void printBasicInfo() {
        System.out.println("ID: " + id + " | Name: " + name);
    }
}
