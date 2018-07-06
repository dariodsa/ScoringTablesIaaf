package hr.fer.akmaksimir.model;

import hr.fer.akmaksimir.model.enumerations.AgeCategories;
import hr.fer.akmaksimir.model.enumerations.Discipline;
import hr.fer.akmaksimir.model.enumerations.Gender;
import hr.fer.akmaksimir.model.enumerations.Measurement;

public class Result {
    
    private long athleteId;
    private double result;
    private Gender gender;
    private AgeCategories ageCategories;
    private Discipline discipline;
    private Measurement typeOfMeasurment;
    
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

    public long getAthleteId() {
        return athleteId;
    }

    public double getResult() {
        return result;
    }

    public Gender getGender() {
        return gender;
    }

    public AgeCategories getAgeCategories() {
        return ageCategories;
    }

    public Discipline getDiscipline() {
        return discipline;
    }

    public Measurement getTypeOfMeasurment() {
        return typeOfMeasurment;
    }
    
}
