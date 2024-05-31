package com.webpg.DoWith.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Challenge {
    @Id
    @Column(name="c_id")
    private String c_id;
    private String title;
    private java.sql.Timestamp endtime;
    private String comments;
    private String tags;
    private int limits;
    private String unit;
}
