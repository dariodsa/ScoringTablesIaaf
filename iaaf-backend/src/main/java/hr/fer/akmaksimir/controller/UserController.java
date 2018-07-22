package hr.fer.akmaksimir.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.model.User;
import hr.fer.akmaksimir.repository.UserRepository;

@RestController
@RequestMapping(Link.user)
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@CrossOrigin
	@RequestMapping("")
	public long checkDoesUserExsist(@RequestParam String username, @RequestParam String password) {
		
		//calculate password hash
		String passwordHash = password;
		passwordHash = org.apache.commons.codec.digest.DigestUtils.sha256Hex(password); 
		
		System.out.println(passwordHash);
		Collection<User> collection = userRepository.doesUserExsist(username, passwordHash);
		
		if(collection.size() == 0) {
			return -1;
		} else {
			return collection.iterator().next().getId(); 
		}
	}
}
