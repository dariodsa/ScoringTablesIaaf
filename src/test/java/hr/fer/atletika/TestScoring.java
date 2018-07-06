package hr.fer.atletika;

import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import hr.fer.akmaksimir.model.Result;
import hr.fer.akmaksimir.model.ScoringSystem;
import hr.fer.akmaksimir.model.enumerations.AgeCategories;
import hr.fer.akmaksimir.model.enumerations.Discipline;
import hr.fer.akmaksimir.model.enumerations.Gender;
import hr.fer.akmaksimir.model.enumerations.Measurement;
import hr.fer.akmaksimir.model.scoresystem.ScoringSystem2017;

public class TestScoring {
    
    private ScoringSystem system; 
    
    @BeforeClass
    public void init() {
        system = new ScoringSystem2017();
    }
    
    @Test
    public void testing200meters() {
        Assert.assertEquals(1000, system.getPoints(
                new Result(0, 21.20, Gender.MALE, AgeCategories.A35, Discipline.RUN_200M, Measurement.NORMAL)));
        
        Assert.assertEquals(611, system.getPoints(
                new Result(0, 27.00, Gender.MALE, AgeCategories.A45, Discipline.RUN_200M, Measurement.NORMAL)));
        
        Assert.assertEquals(391, system.getPoints(
                new Result(0, 30.09, Gender.MALE, AgeCategories.A45, Discipline.RUN_200M, Measurement.NORMAL)));
        
        Assert.assertEquals(1000, system.getPoints(
                new Result(0, 25.47, Gender.FEMALE, AgeCategories.A40, Discipline.RUN_200M, Measurement.NORMAL)));
        
        Assert.assertEquals(1111, system.getPoints(
                new Result(0, 28.70, Gender.FEMALE, AgeCategories.A60, Discipline.RUN_200M, Measurement.NORMAL)));
    }
    
    @Test
    public void testingLongJump() {
        Assert.assertEquals(1000, system.getPoints(
                new Result(0, 7.53, Gender.MALE, AgeCategories.A35, Discipline.LONG_JUMP, Measurement.NORMAL)));
        
        Assert.assertEquals(1344, system.getPoints(
                new Result(0, 8.80, Gender.MALE, AgeCategories.A35, Discipline.LONG_JUMP, Measurement.NORMAL)));
        
        Assert.assertEquals(1241, system.getPoints(
                new Result(0, 7.98, Gender.MALE, AgeCategories.A40, Discipline.LONG_JUMP, Measurement.NORMAL)));
        
        Assert.assertEquals(10, system.getPoints(
                new Result(0, 2.17, Gender.FEMALE, AgeCategories.A35, Discipline.LONG_JUMP, Measurement.NORMAL)));
        
        Assert.assertEquals(290, system.getPoints(
                new Result(0, 3.33, Gender.FEMALE, AgeCategories.A45, Discipline.LONG_JUMP, Measurement.NORMAL)));
    }
}
