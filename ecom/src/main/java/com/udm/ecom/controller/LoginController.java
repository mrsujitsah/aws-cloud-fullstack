package com.udm.ecom.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.udm.ecom.model.Customer;
import com.udm.ecom.repository.CustomerRepository;

@RestController
public class LoginController {

	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody Customer customer){
		Customer savedCustomer = null;
		ResponseEntity response = null;
		
		try {
			String hashPwd = passwordEncoder.encode(customer.getPwd());
			customer.setPwd(hashPwd);
			savedCustomer = customerRepository.save(customer);
			if (savedCustomer.getId()>0) {
				response=ResponseEntity
						.status(HttpStatus.CREATED)
						.body("Given user details are successfully registered");
			}
		} catch (Exception e) {
			response = ResponseEntity
					.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An excepion occured due to "+e.getMessage());
		}
		
		return response;
	}
}
