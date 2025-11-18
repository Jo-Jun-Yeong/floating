package com.board.basic;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.board.basic.DAO.CreateUsersRequest;
import com.board.basic.entity.Users;
import com.board.basic.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;


@SpringBootTest			//테스트용 애플리케이션 컨텍스트 생
@AutoConfigureMockMvc	//MockMvc 생성 및 자동 구성
public class TableCreateTest {
	
	@Autowired
	protected ObjectMapper objectMapper;
	
	@Autowired
	//MockMvc를 주입, HTTP요청을 서버 없이 테스트하기위함 
	//mockMvc.perform(...)형태로 GET/POST 요청 가능
	protected MockMvc mockMvc;			
	
	@Autowired
	/*스프링 전체 웹 애플리케이션 컨텍스트(빈의 모임)를 주입
	MockMvc생성시 해당 context를 사용해야
		- 컨트롤러(@RestController)
		- 필터(Fillter)
		- 인터셉터(GandlerInterceptor)
		- AOP
		- ExceptionHandler
	등이 실제와 동일하게 적용된 테스트 환경이 구성된다.
	*/
	private WebApplicationContext context;
	
	@Autowired
	private UserRepository userRepository;

	@BeforeEach
	public void mockMvcSetUp() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
	}
	
	@AfterEach
	public void cleanUp() {
		userRepository.deleteAll();
	}
	
	
//	@Test
//	@DisplayName("User_Table_Test")
//	public void junitTableCreateTest() {
//		
//		User saveUser = userRepository.save(new User(1L, "pass123", "email.com"));
//	
//
//	}
	
	@DisplayName("create_Table")
	@Test
	public void createTable() throws Exception{
		//given
		final String url="/test/create";
		final String testEmail = "test123@test.com";
		final String password = "test123";
		
		final CreateUsersRequest savedUser = new CreateUsersRequest(password, testEmail);
		
		System.out.println("Email: "+savedUser.getEmail());
		System.out.println("Password: "+savedUser.getPassword());
		
		//객체 JSON으로 직렬화
		final String requestBody = objectMapper.writeValueAsString(savedUser);
		
		//when
		
		final ResultActions result = mockMvc.perform(post(url)
				.contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(requestBody));
		
		//then
		result.andExpect(status().isCreated());
		

			List<Users> users = userRepository.findAll();
			
			assertThat(users.size()).isEqualTo(1);
			assertThat(users.get(0).getEmail()).isEqualTo(testEmail);
			assertThat(users.get(0).getPassword()).isEqualTo(password);
		
//		result
//			.andExpect(status().isOk())
//			.andExpect(jsonPath("$[0].password").value(savedUser.getPassword()))
//			.andExpect(jsonPath("$[0].email").value(savedUser.getEmail()));
	}
	
}
