package hr.fer.akmaksimir.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.Competition;
import hr.fer.akmaksimir.repository.CompetitionsRepository;
import hr.fer.akmaksimir.service.CompetitionsService;

@RestController
@RequestMapping(Link.competitions)
public class CompetitionController {
	
	@Autowired
	private CompetitionsService competitionsService;
	
	@RequestMapping("")
	public Collection<Competition> getCompetitions() {
		return competitionsService.getAllCompetitions();
	}
	/*
	@RequestMapping("/{id}")
	public Competition getCompetition(@PathVariable("id") String id) {
		return competitionsRepository.getById(Integer.parseInt(id));
	}
	
	@RequestMapping("/add")
	public void addNewCompetition(@RequestBody Competition competition) {
		competitionsRepository.save(competition);
	}
	
	@RequestMapping("/delete/{id}")
	public void deleteCompetition(@PathVariable("id") String id) {
		competitionsRepository.deleteById(Long.parseLong(id));
	}*/
}
