package hr.fer.akmaksimir.repository;


import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import hr.fer.akmaksimir.model.RegistredAthlete;

public interface RegistredAthletesRepository extends CrudRepository<RegistredAthlete, RegistredAthlete.CompositKey>{
	
	@Query("SELECT r FROM RegistredAthlete r WHERE r.key.competitionId = :competitionId")
	public Collection<RegistredAthlete> getAthletesByCompetitionId(long competitionId);
}
