package com.board.basic.entity;

import java.io.Serializable;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StoryBubbleId implements Serializable {
	//복합키: Story.id와 User.id로만 이루어짐
	
	private Long storyId;
	private Long userId;
}
