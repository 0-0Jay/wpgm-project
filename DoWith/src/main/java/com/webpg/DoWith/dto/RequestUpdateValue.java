package com.webpg.DoWith.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RequestUpdateValue {
    private String user_id;
    private String c_id;
    private int now_value;
    private int up_value;
}
