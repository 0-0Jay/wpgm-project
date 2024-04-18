package com.webpg.DoWith.dto;

import com.webpg.DoWith.entity.Chat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeDto {
    private String c_id;
    private String user_id;
    private String chat;

    public static ChallengeDto toDto(Chat chat) {
        return new ChallengeDto(
                chat.getC_id(),
                chat.getUser_id(),
                chat.getChat()
        );
    }
}
