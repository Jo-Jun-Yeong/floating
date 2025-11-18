package com.board.basic.entity;



import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "USERS", uniqueConstraints = {
		@UniqueConstraint(name = "UK_EMAIL", columnNames = " Email")
})
@Builder
public class Users {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="User_ID")
	@Id
	private Long id;
	
	@Column(name="password", nullable= false, length =20)
	private String password;
	
	@Column(name="email", unique=true, length=50)
	private String email;
	
	
	//관계 설정
	@OneToOne(mappedBy = "users", cascade = CascadeType.ALL, orphanRemoval = true)
	private UserPrivacy privacy;
	
	@OneToOne(mappedBy="users", cascade = CascadeType.ALL, orphanRemoval = true)
	private UserProfile profile;
	
	@OneToMany(mappedBy="sender", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Message> sentMessages = new ArrayList<>();	//1:N관계는 무조건 Collection[ List/Set ]사용
	
	@OneToMany(mappedBy="receiver", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Message> receivedMessages = new ArrayList<>();
	
	@OneToMany(mappedBy = "users", cascade = CascadeType.ALL, orphanRemoval=true)
	private List<StoryMain> stories = new ArrayList<>();
	
	@OneToMany(mappedBy = "users", cascade = CascadeType.ALL, orphanRemoval=true)
	private List<Comment> comment = new ArrayList<>();
	
	@Builder
	public Users(String password, String email) {
		this.password=password;
		this.email=email;				
	}
	
}
