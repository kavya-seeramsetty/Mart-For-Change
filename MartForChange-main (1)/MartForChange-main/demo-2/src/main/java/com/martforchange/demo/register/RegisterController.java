package com.martforchange.demo.register;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.martforchange.demo.deliverypersons.DeliveryPersons;

import jakarta.mail.MessagingException;

@RestController
public class RegisterController {
	@Autowired 
	private RegisterService registerService;
	
	@RequestMapping(method=RequestMethod.POST,value="/registerUser")
	public ResponseEntity <Register> registerUser(@RequestBody Register user) throws MessagingException {
		boolean isRegistered=registerService.registerUser(user);
		if(isRegistered)
			return new ResponseEntity <Register>(user,HttpStatus.OK);
		else
			return new ResponseEntity <Register>(user,HttpStatus.BAD_REQUEST);
	}	
	
	@RequestMapping("/hello")
	public String sayHi() {
		return "HI";
	}
			
}
