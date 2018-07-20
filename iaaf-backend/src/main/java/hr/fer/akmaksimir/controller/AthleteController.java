package hr.fer.akmaksimir.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.Athlete;
import hr.fer.akmaksimir.repository.AthleteRepository;

@RestController
@RequestMapping(Link.athlete)
public class AthleteController {
	@Autowired
	private AthleteRepository athleteRepository;
	
	@CrossOrigin
	@GetMapping()
	public Collection<Athlete> getAll() {
		List<Athlete> list = new ArrayList<>();
		athleteRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	
	@CrossOrigin
	@GetMapping("/id")
	public Athlete getAthleteById(@RequestParam long id) {
		return athleteRepository.findById(id).get();
	}
	
	
	@CrossOrigin
	@GetMapping("/withCompetititonId")
	public Collection<Athlete> getById(@RequestParam long competitionId) {
		return athleteRepository.getWithCompetitionId(competitionId);
	}
	
	@CrossOrigin
	@RequestMapping("/add")
	public void addAthlete(@RequestBody Athlete athlete) {
		athleteRepository.save(athlete);
	}
}
