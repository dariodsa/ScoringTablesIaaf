package hr.fer.akmaksimir.repository;

import org.springframework.data.repository.CrudRepository;

import hr.fer.akmaksimir.model.Athlete;

public interface AthleteRepository extends CrudRepository<Athlete, Long>{
	
}
