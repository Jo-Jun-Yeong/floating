package com.board.basic.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.ForeignKey;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="COMMENT")
public class Comment {

	@Id
	@Column(name="Comment_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;			//유져아이디+날짜+시각
	
//	@Column(name="Parent_Comment_ID", nullable=true)
//	private Long parentCommentId;	//Comment.id 셀프 참조
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="Parent_Comment_ID", foreignKey= @ForeignKey(name="FK_PARENT_COMMENT"))
	private Comment parentComment;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="Story_Id", foreignKey = @ForeignKey(name="FK_COMMENT_STORY"))
	private StoryMain story;			//Story.id 참조
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="User_Id", foreignKey = @ForeignKey(name="FK_COMMENT_USER"))
	private Users users;			//User.id 참조
	
	@Column(name="Comment")
	private String comment;
	
	@Column(name="Created_At")
	private LocalDateTime createdAt;
}
