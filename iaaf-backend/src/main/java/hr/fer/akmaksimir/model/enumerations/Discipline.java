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
     * 1500 meters
     */
    RUN_1500M("1500m"),
    /**
     * 800 meters
     */
    RUN_800M("800m"),
    HIGH_JUMP("high_jump"),
    /**
     * long jump
     */
    LONG_JUMP("long_jump"),
    /**
     * disc, 0.75kg
     */
    DISC_075("disc075"),
    /**
     * disc, 1 kg
     */
    DISC_1("disc1"),
    /**
     * disc, 1.5 kg
     */
    DISC_15("disc15"),
    /**
     * disc, 2 kg
     */
    DISC_2("disc2");
	
	
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
