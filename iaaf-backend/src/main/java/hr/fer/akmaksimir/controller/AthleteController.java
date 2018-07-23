package hr.fer.akmaksimir.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.Athlete;
import hr.fer.akmaksimir.model.enumerations.AgeCategories;
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
	@GetMapping("/withCompetitionIdAndBib")
	public Athlete getWithCompetitionIdAndBib(@RequestParam long competitionId,@RequestParam String bib) {
		return athleteRepository.getWithCompetitionIdAndBib(competitionId, bib);
	}
	
	@CrossOrigin
	@GetMapping("/withCompetititonId")
	public Collection<Athlete> getById(@RequestParam long competitionId) {
		return athleteRepository.getWithCompetitionId(competitionId);
	}
	
	@CrossOrigin
	@RequestMapping("/add")
	public void addAthlete(@RequestBody Athlete athlete) {
		
		int year = Calendar.getInstance().get(Calendar.YEAR);
		
		int yearOfBirth = athlete.getDateOfBirth().getYear();
		int age = year - yearOfBirth;
		
		if(age < 35) {
			athlete.setAgeCategories(AgeCategories.AS);
		} else if(age < 40) {
			athlete.setAgeCategories(AgeCategories.A35);
		} else if(age < 45) {
			athlete.setAgeCategories(AgeCategories.A40);
		} else if(age < 50) {
			athlete.setAgeCategories(AgeCategories.A45);
		} else if(age < 55) {
			athlete.setAgeCategories(AgeCategories.A50);
		} else if(age < 60) {
			athlete.setAgeCategories(AgeCategories.A55);
		} else if(age < 65) {
			athlete.setAgeCategories(AgeCategories.A60);
		} else if(age < 70) {
			athlete.setAgeCategories(AgeCategories.A65);
		} else if(age < 75) {
			athlete.setAgeCategories(AgeCategories.A70);
		} else if(age < 80) {
			athlete.setAgeCategories(AgeCategories.A75);
		} else if(age < 85) {
			athlete.setAgeCategories(AgeCategories.A80);
		} else if(age < 90) {
			athlete.setAgeCategories(AgeCategories.A85);
		} else if(age < 95) {
			athlete.setAgeCategories(AgeCategories.A90);
		}
		
		athleteRepository.save(athlete);
	}
}
