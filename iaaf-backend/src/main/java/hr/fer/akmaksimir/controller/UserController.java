package hr.fer.akmaksimir.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import hr.fer.akmaksimir.Link;
import hr.fer.akmaksimir.repository.UserRepository;

@RestController
@RequestMapping(Link.user)
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping("")
	public boolean checkDoesUserExsist(@RequestParam String username, @RequestParam String passwordHash) {
		return userRepository.doesUserExsist(username, passwordHash).size() > 0;
	}
}
