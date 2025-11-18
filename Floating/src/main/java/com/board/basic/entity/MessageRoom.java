package com.board.basic.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="MESSAGE_ROOM")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class MessageRoom {
	
	@Id
	@Column(name="Room_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="Room_Name",length=20 ,nullable=false)
	private String roomName;
	
	@Column(name="CreatedAt", nullable=false)
	private LocalDateTime created_At;
	
	@OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Message> messages = new ArrayList<>();
	
}
