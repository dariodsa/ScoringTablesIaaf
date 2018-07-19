package hr.fer.akmaksimir.controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.Result;
import hr.fer.akmaksimir.repository.ResultRepository;

@RestController
@RequestMapping(Link.result)
public class ResultController {
	@Autowired
	private ResultRepository resultRepository;
	
	@CrossOrigin
	@GetMapping("")
	public Optional<Result> getResult(@RequestParam long id) {
		return resultRepository.findById(id);
	}
	
	@CrossOrigin
	@GetMapping("/add")
	public void addNewResult(@RequestBody Result result) {
		resultRepository.save(result);
	}
	
	@CrossOrigin
	@GetMapping("/getCompetitionId")
	public Collection<Result> getResults(@RequestParam long id) {
		return resultRepository.getResultByCompetitionId(id);
	}
	
	
}
