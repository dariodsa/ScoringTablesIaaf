package hr.fer.akmaksimir.model.scoresystem.structures;

import hr.fer.akmaksimir.model.Result;
import hr.fer.akmaksimir.model.enumerations.AgeCategories;
import hr.fer.akmaksimir.model.enumerations.Discipline;
import hr.fer.akmaksimir.model.enumerations.Gender;

public class ResultInformation {
    
    private AgeCategories ageCategories;
    private Gender gender;
    private Discipline discipline;
    
    public ResultInformation(Result result) {
        this.ageCategories = result.getAgeCategories();
        this.discipline = result.getDiscipline();
        this.gender = result.getGender();
    }

    
    
    public ResultInformation(AgeCategories ageCategories, Gender gender, Discipline discipline) {
        this.ageCategories = ageCategories;
        this.gender = gender;
        this.discipline = discipline;
    }



    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((ageCategories == null) ? 0 : ageCategories.hashCode());
        result = prime * result + ((discipline == null) ? 0 : discipline.hashCode());
        result = prime * result + ((gender == null) ? 0 : gender.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        ResultInformation other = (ResultInformation) obj;
        if (ageCategories != other.ageCategories)
            return false;
        if (discipline != other.discipline)
            return false;
        if (gender != other.gender)
            return false;
        return true;
    }
    
}
