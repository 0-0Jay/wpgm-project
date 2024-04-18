package com.webpg.DoWith.dto;

import com.webpg.DoWith.entity.Users;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String user_id;
    private String passwd;
    private String nickname;

    public static UserDto toDto(Users user) {
        return new UserDto(
                user.getUser_id(),
                user.getPasswd(),
                user.getNickname()
        );
    }

    public static Users toEntity(UserDto user) {
        return new Users(
                user.getUser_id(),
                user.getPasswd(),
                user.getNickname()
        );
    }
}
