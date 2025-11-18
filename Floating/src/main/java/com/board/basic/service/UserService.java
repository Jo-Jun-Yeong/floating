package com.board.basic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.board.basic.DAO.CreateUsersRequest;
import com.board.basic.entity.Users;
import com.board.basic.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public Users creatUser(CreateUsersRequest request) {
		return userRepository.save(
				Users
					.builder()
					.email(request.getEmail())
					.password(request.getPassword())
					.build()
				);
		
	}
	
}
