package hr.fer.akmaksimir.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@GetMapping()
	public Collection<Athlete> getAll() {
		List<Athlete> list = new ArrayList<>();
		athleteRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	
	@GetMapping("/{id}")
	public Athlete getById(@RequestParam long id) {
		Optional<Athlete> athlete = athleteRepository.findById(id);
		if(athlete.isPresent()) {
			return athlete.get();
		}
		return null;
	}
}
