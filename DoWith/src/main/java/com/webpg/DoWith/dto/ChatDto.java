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
public class ChatDto {
    private String chat_id;
    private String user_id;
    private String c_id;
    private String chat;
    private String upper_id;

    public static Chat toEntity(ChatDto chatDto) {
        return new Chat(
                chatDto.getChat_id(),
                chatDto.getUser_id(),
                chatDto.getC_id(),
                chatDto.getChat(),
                chatDto.getUpper_id()
        );
    }

    public static ChatDto toDto(Chat chat) {
        return new ChatDto(
                chat.getChat_id(),
                chat.getUser_id(),
                chat.getC_id(),
                chat.getChat(),
                chat.getUpper_id()
        );
    }
}
