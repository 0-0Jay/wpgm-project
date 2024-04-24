package com.webpg.DoWith.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Chat {
    @Id
    @Column(name="chat_id")
    private String chat_id;
    @Column(name="user_id")
    private String user_id;
    @Column(name="c_id")
    private String c_id;
    private String chat;
    @Column(name="upper_id")
    private String upper_id;
}
