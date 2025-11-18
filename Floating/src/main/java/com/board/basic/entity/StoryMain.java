package com.board.basic.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.ForeignKey;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="STORYMAIN")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StoryMain {
	
	@Id
	@Column(name="Story_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;			//유져ID+시각

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="User_ID", foreignKey = @ForeignKey(name="FK_STORY_USER"))
	private Users users;		//User.Id참조
	
	@Column(name="Like_Count", nullable=false)
	private int likeCount;
	
	@Column(name="CommentCount", nullable=false)
	private int CommentCount;
	
	@Column(name="CreatedAt", nullable=false)
	private LocalDateTime created_At;
	
	@Column(name="ExpiresAt", nullable=false)
	private LocalDateTime expires_At;			//만료시간
	
	@Column(name="Content", nullable=false)
	private String content;
	
	@OneToMany(mappedBy="story", cascade = CascadeType.ALL, orphanRemoval=true)
	private List<Comment> comments = new ArrayList<>();
	
    @OneToMany(mappedBy = "story", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<StoryBubble> viewers = new ArrayList<>();
}
