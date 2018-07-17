package hr.fer.akmaksimir.controller;

import org.junit.BeforeClass;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.Result;
import hr.fer.akmaksimir.model.ScoringSystem;
import hr.fer.akmaksimir.model.enumerations.AgeCategories;
import hr.fer.akmaksimir.model.enumerations.Discipline;
import hr.fer.akmaksimir.model.enumerations.Gender;
import hr.fer.akmaksimir.model.enumerations.Measurement;
import hr.fer.akmaksimir.model.scoresystem.ScoringSystem2017;

@RestController
@RequestMapping(Link.getPoints)
public class Points {
	
    private static ScoringSystem system;
	
    static {
    	
		system = new ScoringSystem2017();
	    system.init();
    }
    
	@RequestMapping(method = RequestMethod.GET)
	public long getPoints(@RequestBody Result result) {
		long points = system.getPoints(result);
		return points;
		
	}
}
