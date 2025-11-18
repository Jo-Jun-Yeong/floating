package com.board.basic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.board.basic.DAO.CreateUsersRequest;
import com.board.basic.entity.Users;
import com.board.basic.service.UserService;

@RestController
public class UserController {

	@Autowired
	UserService userService;
	
	@PostMapping("/test/create")
	public ResponseEntity<Users> createUser(@RequestBody CreateUsersRequest request) {
		Users user = userService.creatUser(request);
		
		
		return ResponseEntity.status(HttpStatus.CREATED).body(user);
	}
	
}
