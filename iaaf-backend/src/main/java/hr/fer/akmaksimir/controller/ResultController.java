package hr.fer.akmaksimir.controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.Athlete;
import hr.fer.akmaksimir.model.Result;
import hr.fer.akmaksimir.model.ScoringSystem;
import hr.fer.akmaksimir.model.enumerations.Discipline;
import hr.fer.akmaksimir.model.scoresystem.ScoringSystem2017;
import hr.fer.akmaksimir.repository.AthleteRepository;
import hr.fer.akmaksimir.repository.ResultRepository;

@RestController
@RequestMapping(Link.result)
public class ResultController {

	private static ScoringSystem system;

	static {

		system = new ScoringSystem2017();
		system.init();
	}

	@Autowired
	private ResultRepository resultRepository;

	@Autowired
	private AthleteRepository athleteRepository;

	@CrossOrigin
	@GetMapping("")
	public Optional<Result> getResult(@RequestParam long id) {
		return resultRepository.findById(id);
	}

	@CrossOrigin
	@RequestMapping("/add")
	public void addNewResult(@RequestBody Result result) {
		double value = 0;
		String[] numbers = result.getResultRepresentation().split(":");
		for (int i = 0; i < numbers.length; ++i) {
			value = value * 60 + Double.parseDouble(numbers[i]);
		}
		result.setResult(value);

		Athlete athlete = athleteRepository.findById(result.getAthleteId()).get();

		long points = system.getPoints(result, athlete);
		result.setPoints(points);

		resultRepository.save(result);
	}

	@CrossOrigin
	@GetMapping("/getCompetitionId")
	public Collection<Result> getResults(@RequestParam long id) {
		return resultRepository.getResultByCompetitionId(id);
	}

	@CrossOrigin
	@GetMapping("deleteResult")
	public void deleteResult(@RequestParam long id) {
		resultRepository.deleteById(id);
	}

	@CrossOrigin
	@RequestMapping("/updateResult")
	public void updateResult(@RequestParam long id, @RequestParam long athleteId,
			@RequestParam String resultRepresentation, @RequestParam Discipline discipline) {

		double value = 0;
		String[] numbers = resultRepresentation.split(":");
		for (int i = 0; i < numbers.length; ++i) {
			value = value * 60 + Double.parseDouble(numbers[i]);
		}

		Result currResult = resultRepository.findById(id).get();
		currResult.setAthleteId(athleteId);
		currResult.setResultRepresentation(resultRepresentation);
		currResult.setResult(value);
		currResult.setDiscipline(discipline);

		resultRepository.save(currResult);
		// resultRepository.updateResult(result);
	}
}
