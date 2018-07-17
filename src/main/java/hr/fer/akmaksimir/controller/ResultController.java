package hr.fer.akmaksimir.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@GetMapping("/{id}")
	public Optional<Result> getResult(@RequestParam long id) {
		return resultRepository.findById(id);
	}
	
	@GetMapping("/add")
	public void addNewResult(@RequestBody Result result) {
		resultRepository.save(result);
	}
	
	
}
