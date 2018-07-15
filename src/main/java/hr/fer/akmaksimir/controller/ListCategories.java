package hr.fer.akmaksimir.controller;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.enumerations.AgeCategories;


@RestController
@RequestMapping(Link.listCategories)
public class ListCategories {
	
	@RequestMapping("")
	public Collection<String> listCategories() {
		
		Collection<String> values = new ArrayList<>();
		for(AgeCategories category : AgeCategories.values()) {
			values.add(category.getName());
		}
		return values;
	}
}
