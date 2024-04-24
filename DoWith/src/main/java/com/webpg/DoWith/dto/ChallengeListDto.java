package com.webpg.DoWith.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ChallengeListDto {
    private String c_id;
    private String leader;
    private String title;
    private java.sql.Timestamp endtime;
    private String comments;
    private String tags;
    private int limits;
    private int memcnt;

    public static ChallengeListDto toDto(ChallengeListInterface l) {
        return new ChallengeListDto(
                l.getC_id(),
                l.getLeader(),
                l.getTitle(),
                l.getEndtime(),
                l.getComments(),
                l.getTags(),
                l.getLimits(),
                l.getMemcnt()
        );

    }
}
