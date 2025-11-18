package com.board.basic.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="USER_PRIVACY",
		uniqueConstraints = @UniqueConstraint(name = "UK_USER_PRIVACY_PHONE", columnNames = "Phone"))
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserPrivacy {

	@Id
	@Column(name="User_ID")
	private Long id;	//User.Id 참조
	
	@OneToOne
	@MapsId //PK==FK
	@JoinColumn(name="User_ID", foreignKey = @ForeignKey(name = "FK_USER_PRIVACY"))
	private Users users;
	
	@Column(name="phone",length=13 ,nullable=false, unique=true)
	private String phone;	//UK
	
	@Column(name="phone2", unique = true ,length=13 , nullable=true)
	private String phone2;
	
	@Column(name="birth", nullable=false)
	private LocalDateTime birth;

}
