package hr.fer.akmaksimir.controller;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.enumerations.Gender;

@RestController
@RequestMapping(Link.listGender)
public class ListGenders {
	
	@RequestMapping("")
	public Collection<String> listGenders() {
		Collection<String> values = new ArrayList<>();
		for(Gender gender : Gender.values()) {
			values.add(gender.getName());
		}
		return values;
	}
}
