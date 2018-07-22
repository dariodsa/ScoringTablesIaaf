package hr.fer.akmaksimir.model.enumerations;

/**
 * Enumeration {@link Discipline} specifies all known athlete discipline and
 * recognized by the IAAF.
 * 
 * @author dario
 *
 */
public enum Discipline {
    /**
     * 100 meters
     */
    RUN_100M("100m"),
    /**
     * 200 meters
     */
    RUN_200M("200m"),
    /**
     * 400 meters
     */
    RUN_400M("400m"),
    /**
     * 1500 meters
     */
    RUN_1500M("1500m"),
    /**
     * 800 meters
     */
    RUN_800M("800m"),
    /**
     * high jump
     */
    HIGH_JUMP("high_jump"),
    /**
     * long jump
     */
    LONG_JUMP("long_jump"),
    /**
     * shot put
     */
    SHOT_PUT("shot_put"),
    /**
     * disc
     */
    DISC("disc"),
    /**
     * hurdles 
     */
    HURDLES("hurdles"),
    /**
     * javelin throw
     */
    JAVELIN_THROW("javelin_throw");
	
    
    /**
     * name property
     */
    private String name;

    /**
     * Constructs {@link Discipline} with a name property.
     * 
     * @param name
     *            name property
     */
    private Discipline(String name) {
        this.name = name;
    }

    /**
     * Returns the name property.
     * 
     * @return name property
     */
    public String getName() {
        return this.name;
    }
}
