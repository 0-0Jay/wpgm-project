package com.webpg.DoWith.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RequestChangePW {
    private String user_id;
    private String passwd;
    private String newpw;
}
