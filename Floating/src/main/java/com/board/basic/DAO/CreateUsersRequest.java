package com.board.basic.DAO;

import org.springframework.beans.factory.annotation.Autowired;

import com.board.basic.entity.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateUsersRequest {
	
	
	private String password;
	
	private String email;
	
	
	public Users toEntity(String testEmail, String password) {
		return Users.builder()
				.password(password)
				.email(email)
				.build();
	}
	
}
