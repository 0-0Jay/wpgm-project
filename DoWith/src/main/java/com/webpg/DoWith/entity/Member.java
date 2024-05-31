package com.webpg.DoWith.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    @EmbeddedId
    MemberKey memberKey;
    @Column(name="now_value")
    int now_value;
    @Column(name="up_value")
    int up_value;
}
