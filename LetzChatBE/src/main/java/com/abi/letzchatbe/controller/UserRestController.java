package com.abi.letzchatbe.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abi.letzchatbe.dao.UserDAO;
import com.abi.letzchatbe.model.User;

@RestController
public class UserRestController {
	
	@Autowired
	User user;
	@Autowired
	UserDAO userDAO;
	@Autowired
	HttpSession session;
	
	private static final Logger log= LoggerFactory.getLogger(UserRestController.class);
     
	@GetMapping("/UserList")
	public ResponseEntity <List<User>> listOfUsers()
	{
		List<User> userList=userDAO.list();
		return new ResponseEntity <List<User>>(userList,HttpStatus.OK);
		
	}
	
	@PostMapping("/AddUser")
	public ResponseEntity<User> createUser(@RequestBody User newUser)
	{
		boolean valid =userDAO.save(newUser);
		if(valid)
		{
			return new ResponseEntity<User>(newUser,HttpStatus.OK);
		}
		else{
			return null;
		}
	}
	@PostMapping("/ValidateUserCredentials")
	public ResponseEntity<User> validateUserLogin(@RequestBody User newUser)
	{
		log.debug("Starting of validating UserCredentials");
		newUser=userDAO.ValidCredentials(newUser.getUserid(),newUser.getPassword());
		if(newUser==null)
		{
			newUser=new User();
			log.debug("Inavalid Credentials Entered..");
			log.debug("Registration is must...Try again..");
			newUser.setErrorcode("404");
			newUser.setErrormessage("Login failed");
		
			return new ResponseEntity<User>(newUser,HttpStatus.OK);
		}
		else
		{
			log.debug("Starting of the method valid credentials");
			log.debug("User Successfully loggedin");
			session.setAttribute("userLoggedIn", newUser.getUserid());
			session.setAttribute("userLoggedInRole", newUser.getRole());
			newUser.setErrorcode("200");
		
			newUser.setErrormessage("Successful Login");
			return new ResponseEntity<User>(newUser,HttpStatus.OK);
		}
	}
	@GetMapping("/ValidateUserLogout")
  	public ResponseEntity<User> validateUserLogout()
  	{
    	 log.debug("logout method starts");
    	 session.invalidate();
    	 log.debug("user logout successfully");
		 return new ResponseEntity<User>(user,HttpStatus.OK);
  	}
     
   

	
	
	
	
	
	
	
}
	



	

