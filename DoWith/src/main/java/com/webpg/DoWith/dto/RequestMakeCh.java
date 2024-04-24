package com.webpg.DoWith.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RequestMakeCh {
    private String user_id;
    private String title;
    private java.sql.Timestamp endtime;
    private String comments;
    private String tags;
    private int limits;
}
