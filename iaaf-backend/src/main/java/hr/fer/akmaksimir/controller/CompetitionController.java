package hr.fer.akmaksimir.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.Competition;
import hr.fer.akmaksimir.repository.CompetitionsRepository;

@RestController
@RequestMapping(Link.competitions)
public class CompetitionController {
	
	@Autowired
	private CompetitionsRepository competitionsRepository;
	
	@CrossOrigin
	@RequestMapping("")
	public Collection<Competition> getCompetitions() {
		return competitionsRepository.getCompetitions();
	}
	
	@CrossOrigin
	@GetMapping("/{id}")
	public Competition getCompetition(@PathVariable("id") String id) {
		return competitionsRepository.getById(Integer.parseInt(id));
	}
	
	@CrossOrigin
	@RequestMapping("/add")
	public void addNewCompetition(@RequestBody Competition competition) {
		competitionsRepository.save(competition);
	}
	
	@CrossOrigin
	@DeleteMapping("/{id}")
	public void deleteCompetition(@PathVariable("id") String id) {
		competitionsRepository.deleteById(Long.parseLong(id));
	}
}
