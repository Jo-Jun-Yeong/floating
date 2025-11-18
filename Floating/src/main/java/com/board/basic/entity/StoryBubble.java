package com.board.basic.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;
import javax.persistence.ForeignKey;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="STORYBUBBLE")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StoryBubble{

	@EmbeddedId
	private StoryBubbleId id = new StoryBubbleId();
	
	@ManyToOne(fetch=FetchType.LAZY)
	@MapsId("storyId")
	@JoinColumn(name="Story_ID", foreignKey = @ForeignKey(name="FK_BUBBLE_STORY_ID"))
	private StoryMain story;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("userId")
	@JoinColumn(name="User_ID", foreignKey = @ForeignKey(name="FK_BUBBLE_USERID"))
	private Users users;

	@Column(name="Viewd_At")
	private LocalDateTime viewdAt;

	
}

