package hr.fer.akmaksimir.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RequestParam;

import hr.fer.akmaksimir.model.User;

public interface UserRepository extends CrudRepository<User, Long>{
	
	@Query("SELECT User u FROM User where u.username = :username AND u.passwordHash = :passwordHash")
	public Collection<User> doesUserExsist(@RequestParam("username") String username, @RequestParam("passwordHash") String passwordHash);
	
}
