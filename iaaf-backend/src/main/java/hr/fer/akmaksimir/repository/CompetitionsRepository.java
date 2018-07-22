package hr.fer.akmaksimir.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import hr.fer.akmaksimir.model.Competition;

public interface CompetitionsRepository extends CrudRepository<Competition, Long>{
	
	@Query("SELECT c FROM Competition c")
	Collection<Competition> getCompetitions();
	
	@Query("SELECT c FROM Competition c WHERE c.id = :id")
	Competition getById(@Param("id") long id);
	
	
}
