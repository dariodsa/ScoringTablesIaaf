package hr.fer.akmaksimir.controller;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.enumerations.Discipline;

@RestController
@RequestMapping(Link.listDisciplines)
public class ListDisciplines {
	
	@CrossOrigin
	@RequestMapping("")
	public Collection<String> listDisciplines() {
		
		Collection<String> values = new ArrayList<>();
		for(Discipline discipline : Discipline.values()) {
			values.add(discipline.toString());
		}
		return values;
	}
}
