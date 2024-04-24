package com.webpg.DoWith.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberKey {
    @Column(name="user_id")
    private String user_id;
    @Column(name="c_id")
    private String c_id;
}