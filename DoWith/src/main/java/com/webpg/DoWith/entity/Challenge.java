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
public class Challenge {
    @Id
    @Column(name="c_id")
    private String c_id;
    private String leader;
    private String title;
    private java.sql.Timestamp endtime;
    private String comments;
    private String tags;
    private int limits;
}
