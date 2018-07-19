package hr.fer.akmaksimir.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.RegistredAthlete;
import hr.fer.akmaksimir.repository.RegistredAthletesRepository;

@RestController
@RequestMapping(Link.registredAthlete)
public class RegistredAthleteController {
	
	@Autowired
	private RegistredAthletesRepository registredAthletesRepository;
	
	@RequestMapping("/byCompetitionId")
	public Collection<RegistredAthlete> getAthleteByCompetitionId(@RequestParam long competitionId) {
		return registredAthletesRepository.getAthletesByCompetitionId(competitionId);
	}
	
	@RequestMapping("/add")
	public void addAthlete(@RequestBody RegistredAthlete registredAthlete) {
		registredAthletesRepository.save(registredAthlete);
	}
}
