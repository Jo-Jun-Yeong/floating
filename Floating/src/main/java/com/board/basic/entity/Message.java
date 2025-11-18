package com.board.basic.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="MESSAGE")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Message {

	@Id
	@Column(name="Message_ID")
	private Long id;	//유져아이디+시각
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ROOM_ID", foreignKey = @ForeignKey(name="FK_MESSAGE_ROOM"))
	private MessageRoom room;	//MessageRoom.class 관계설정 참고

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "Sender_ID", foreignKey=@ForeignKey(name = "FK_MESSAGE_SENDER"))
	private Users sender;	//User.class의 관계설정참고
	
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="Receiver_ID", foreignKey = @ForeignKey(name="FK_MESSAGE_RECEIVER"))
	private Users receiver;	//User.id참조
	
	@Column(name="Sent_At", nullable=false)
	private LocalDateTime sentAt;
	
	@Column(name="Text", length=255, nullable=false)
	private String text;
	
	@Column(name="Status", nullable=false)
	private String status;		//추후 String -> Enum으로 변경
}
