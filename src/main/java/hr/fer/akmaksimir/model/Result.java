package hr.fer.akmaksimir.model;

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
public class Result {

    /**
     * athlete's id
     */
    private long athleteId;
    /**
     * result
     */
    private double result;
    /**
     * gender
     */
    private Gender gender;
    /**
     * age categories
     */
    private AgeCategories ageCategories;
    /**
     * discipline
     */
    private Discipline discipline;
    /**
     * type of measurement
     */
    private Measurement typeOfMeasurment;

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
        this.gender = gender;
        this.ageCategories = ageCategories;
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
     * Returns the gender.
     * 
     * @return gender
     */
    public Gender getGender() {
        return gender;
    }

    /**
     * Returns the age category.
     * 
     * @return age category
     */
    public AgeCategories getAgeCategories() {
        return ageCategories;
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

}
