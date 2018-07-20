package hr.fer.akmaksimir.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import hr.fer.akmaksimir.model.enumerations.AgeCategories;
import hr.fer.akmaksimir.model.enumerations.Discipline;
import hr.fer.akmaksimir.model.enumerations.Gender;
import hr.fer.akmaksimir.model.enumerations.Measurement;

/**
 * Class {@link Result} encapsulate all needed properties for specifying the
 * accomplished result by an athlete, like {@link #discipline},
 * {@link #ageCategories}, {@link #gender} and others.
 * 
 * @author dario
 *
 */
@Entity
@Table( name = "Result")
public class Result {

    /**
     * athlete's id
     */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column 
	private long athleteId;
	
	@Column
	private long competitionId;
	
    /**
     * result
     */
	@Column
    private double result;
    @Column
    private long points;
    /**
     * discipline
     */
	@Enumerated(EnumType.STRING)
    private Discipline discipline;
    /**
     * type of measurement
     */
	@Enumerated(EnumType.STRING)
    private Measurement typeOfMeasurment;
	
	

	public Result() {
		
	}
	
    /**
     * Constructs Result with the given properties.
     * 
     * @param athleteId
     *            athlete id
     * @param result
     *            result
     * @param gender
     *            {@link Gender}
     * @param ageCategories
     *            {@link AgeCategories}
     * @param discipline
     *            {@link Discipline}
     * @param typeOfMeasurment
     *            {@link Measurement}
     */
	public Result(long athleteId, double result, Gender gender, AgeCategories ageCategories, Discipline discipline,
            Measurement typeOfMeasurment) {
        super();
        this.athleteId = athleteId;
        this.result = result;
        this.discipline = discipline;
        this.typeOfMeasurment = typeOfMeasurment;
    }

    /**
     * Returns the athlete's id.
     * 
     * @return athlete's id
     */
    public long getAthleteId() {
        return athleteId;
    }

    /**
     * Returns the result.
     * 
     * @return result
     */
    public double getResult() {
        return result;
    }

    
    /**
     * Returns the {@link Discipline}.
     * 
     * @return discipline
     */
    public Discipline getDiscipline() {
        return discipline;
    }

    /**
     * Returns the type of measurement.
     * 
     * @return type of measurement
     */
    public Measurement getTypeOfMeasurment() {
        return typeOfMeasurment;
    }

	public long getCompetitionId() {
		return competitionId;
	}

	public void setCompetitionId(long competitionId) {
		this.competitionId = competitionId;
	}

	public void setAthleteId(long athleteId) {
		this.athleteId = athleteId;
	}

	public void setResult(double result) {
		this.result = result;
	}
	public void setDiscipline(Discipline discipline) {
		this.discipline = discipline;
	}

	public void setTypeOfMeasurment(Measurement typeOfMeasurment) {
		this.typeOfMeasurment = typeOfMeasurment;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getPoints() {
		return points;
	}

	public void setPoints(long points) {
		this.points = points;
	}    
	
	
	
}
