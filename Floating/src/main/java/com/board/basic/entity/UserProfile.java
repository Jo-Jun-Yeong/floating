package com.board.basic.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="User_PROFILE")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserProfile {
	
	@Id
	@Column(name="User_ID")
	private Long id;		//User.Id참조
	
	@OneToOne
	@MapsId
	@JoinColumn(name="User_Id", foreignKey = @ForeignKey(name="FK_PROFILE_USERID"))
	private Users users;
	
	
	@Column(name="User_Name",length=20 ,nullable=false)
	private String name;
	
	@Column(name="Nick_Name",length=8 ,nullable=true, unique = true)
	private String nickName;
	
	@Column(name="Gender",length=1)
	private char gender; // M/F	//추후 ENUM으로 변경
	
	@Column(name="Profile_Image", length=255)
	private String profileImage;
	
	@Column(name="Self_Comment", length=50)
	private String selfComment; 
	
	@Column(name="Created_At")
	private String created_At;
}
