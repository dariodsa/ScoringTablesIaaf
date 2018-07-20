package hr.fer.akmaksimir.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import hr.fer.akmaksimir.model.enumerations.CompetitionType;

/**
 * Class Competition encapsulate competition entity which 
 * contains {@link #id}, {@link #name} and {@link #results list of results}. Those attributes are
 * private and user can modify and read them using regular get set methods. 
 * @author dario
 *
 */
@Entity
@Table(name = "Competition")
public class Competition implements Serializable{
    
    /**
	 * 
	 */
	private static final long serialVersionUID = 8526857412212324481L;

	/**
     * competition id
     */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    /**
     * competition name
     */
	@Column
    private String name;
    
	@Enumerated(EnumType.STRING)
	private CompetitionType competitionType;
	
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

	public CompetitionType getCompetitionType() {
		return competitionType;
	}

	public void setCompetitionType(CompetitionType competitionType) {
		this.competitionType = competitionType;
	}
    
    
    
}
