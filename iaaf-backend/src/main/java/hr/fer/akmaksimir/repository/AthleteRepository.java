package hr.fer.akmaksimir.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import hr.fer.akmaksimir.model.Athlete;

public interface AthleteRepository extends CrudRepository<Athlete, Long>{
	
	@Query("SELECT a FROM Athlete a WHERE a.competitionId =:competitionId")
	public Collection<Athlete> getWithCompetitionId(@Param("competitionId") long competitionId);
}
