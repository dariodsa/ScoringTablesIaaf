package hr.fer.akmaksimir.model.enumerations;

public enum Discipline {
    RUN_100M("100m"),
    RUN_200M("200m"),
    RUN_1500M("1500m"),
    RUN_800M("800m"),
    LONG_JUMP("long_jump"),
    DISC_075("disc075"),
    DISC_1("disc1"),
    DISC_15("disc15"),
    DISC_2("disc2");
    
    private String name;
    
    private Discipline(String name) {
        this.name = name;
    }
    
    public String getName() {
        return this.name;
    }
}
