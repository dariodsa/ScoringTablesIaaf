package hr.fer.akmaksimir.model.enumerations;

public enum AgeCategories {
    AS("s"), 
    A35("35"),
    A40("40"),
    A45("45"),
    A50("50"),
    A55("55"),
    A60("60"),
    A65("65"),
    A70("70"),
    A75("75"),
    A80("80"),
    A85("85"),
    A90("90"),
    A95("95");
    
    private String name;
    
    AgeCategories(String name) {
        this.name = name;
    }
    
    public String getName() {
        return this.name;
    }
    
}
