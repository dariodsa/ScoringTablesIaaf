package hr.fer.akmaksimir.model.enumerations;

/**
 * Enumeration {@link AgeCategories} specifies all age categories specified by the 
 * IAAF standards. 
 * @author dario
 *
 */
public enum AgeCategories {
    /**
     * senior age category
     */
    AS("s"), 
    /**
     * age category below 35
     */
    A35("35"),
    /**
     * age category below 40
     */
    A40("40"),
    /**
     * age category below 45
     */
    A45("45"),
    /**
     * age category below 50
     */
    A50("50"),
    /**
     * age category below 55
     */
    A55("55"),
    /**
     * age category below 60
     */
    A60("60"),
    /**
     * age category below 65
     */
    A65("65"),
    /**
     * age category below 70
     */
    A70("70"),
    /**
     * age category below 75
     */
    A75("75"),
    /**
     * age category below 80
     */
    A80("80"),
    /**
     * age category below 85
     */
    A85("85"),
    /**
     * age category below 90
     */
    A90("90");
    
    /**
     * name property
     */
    private String name;
    /**
     * Constructs {@link AgeCategories} with name property.
     * @param name name property
     */
    AgeCategories(String name) {
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
