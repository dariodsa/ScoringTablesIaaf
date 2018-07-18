package hr.fer.akmaksimir.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RequestParam;

import hr.fer.akmaksimir.model.Result;

public interface ResultRepository extends CrudRepository<Result, Long>{
	
	@Query("SELECT r FROM Result r WHERE r.competition.id=:id")
	List<Result> getResultByCompetitionId(@RequestParam long id);
}
