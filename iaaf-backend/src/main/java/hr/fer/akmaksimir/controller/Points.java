package hr.fer.akmaksimir.controller;

import org.junit.BeforeClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.Athlete;
import hr.fer.akmaksimir.model.Result;
import hr.fer.akmaksimir.model.ScoringSystem;
import hr.fer.akmaksimir.model.enumerations.AgeCategories;
import hr.fer.akmaksimir.model.enumerations.Discipline;
import hr.fer.akmaksimir.model.enumerations.Gender;
import hr.fer.akmaksimir.model.enumerations.Measurement;
import hr.fer.akmaksimir.model.scoresystem.ScoringSystem2017;
import hr.fer.akmaksimir.repository.AthleteRepository;

@RestController
@RequestMapping(Link.getPoints)
public class Points {
	
    private static ScoringSystem system;
	
    @Autowired
    private AthleteRepository athleteRepository;
    
    static {
    	
		system = new ScoringSystem2017();
	    system.init();
    }
    
    @CrossOrigin
	@RequestMapping(method = RequestMethod.GET)
	public long getPoints(@RequestBody Result result) {
		
    	Athlete athlete = athleteRepository.findById(result.getAthleteId()).get();
    	
    	long points = system.getPoints(result, athlete);
		return points;
		
	}
}
