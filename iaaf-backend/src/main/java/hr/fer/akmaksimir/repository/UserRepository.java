package hr.fer.akmaksimir.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import hr.fer.akmaksimir.model.User;

public interface UserRepository extends CrudRepository<User, Long>{
	
	@Query("SELECT u FROM User u where u.username = :username AND u.passwordHash = :passwordHash")
	public Collection<User> doesUserExsist(@Param("username") String username, @Param("passwordHash") String passwordHash);
	
}
