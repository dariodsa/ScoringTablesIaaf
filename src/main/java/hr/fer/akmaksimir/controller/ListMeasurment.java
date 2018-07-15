package hr.fer.akmaksimir.controller;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.enumerations.Measurement;

@RestController
@RequestMapping(Link.listMeasurment)
public class ListMeasurment {
	
	@RequestMapping("")
	public Collection<String> listMeasurment() {
	
		Collection<String> values = new ArrayList<>();
		for(Measurement measurment : Measurement.values()) {
			values.add(measurment.name());
		}
		return values;
	}
}
