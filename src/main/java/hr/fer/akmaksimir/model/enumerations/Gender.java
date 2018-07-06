package hr.fer.akmaksimir.model.enumerations;

/**
 * Enumeration {@link Gender} specifies genders of an athlete. 
 * @author dario
 *
 */
public enum Gender {
    /**
     * male gender
     */
    MALE("m"),
    /**
     * female gender
     */
    FEMALE("f");
    
    /**
     * name property
     */
    private String name;
    
    /**
     * Constructs Gender with a given name.
     * @param name name property
     */
    Gender(String name) {
        this.name = name;
    }
    /**
     * Returns the name property.
     * @return name property
     */
    public String getName() {
        return this.name;
    }
}
