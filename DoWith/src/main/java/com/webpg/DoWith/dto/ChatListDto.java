package com.webpg.DoWith.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatListDto {
    private String chat_id;
    private String c_id;
    private String user_id;
    private String chat;
    private String nickname;
    private int now_value;
    private int up_value;

    public static ChatListDto toDto(ChatListInterface chatListInterface) {
        return new ChatListDto(
                chatListInterface.getChat_id(),
                chatListInterface.getC_id(),
                chatListInterface.getUser_id(),
                chatListInterface.getChat(),
                chatListInterface.getNickname(),
                chatListInterface.getNow_value(),
                chatListInterface.getUp_value()
        );
    }
}
