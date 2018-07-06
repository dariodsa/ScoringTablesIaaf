package hr.fer.akmaksimir.model;

import java.util.List;

public class Competition {
    
    /**
     * competition id
     */
    private long id;
    
    /**
     * competition name
     */
    private String name;
    
    /**
     * competition's results
     */
    private List<Result> results;
    
    /**
     * default constructor
     */
    public Competition() {
    }
    
    /**
     * Returns the competition's id
     * @return competition's id
     */
    public long getId() {
        return id;
    }
    
    /**
     * Sets the competition's id
     * @param id competition's id
     */
    public void setId(long id) {
        this.id = id;
    }
    
    /**
     * Returns the competition's name.
     * @return name of the competition
     */
    public String getName() {
        return name;
    }
    
    /**
     * Sets the competition's name
     * @param name name of the competition
     */
    public void setName(String name) {
        this.name = name;
    }
    
    /**
     * Returns the list of results.
     * @return list of results.
     */
    public List<Result> getResults() {
        return results;
    }
    
    /**
     * Sets the results of the competition
     * @param results results
     */
    public void setResults(List<Result> results) {
        this.results = results;
    }
    
}
