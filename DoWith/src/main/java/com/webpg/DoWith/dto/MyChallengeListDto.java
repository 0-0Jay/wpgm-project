package com.webpg.DoWith.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MyChallengeListDto {
    private String c_id;
    private String title;
    private java.sql.Timestamp endtime;
    private String comments;
    private String tags;
    private String unit;
    private int limits;
    private int memcnt;
    private int now_value;
    private int up_value;

    public static MyChallengeListDto toDto(MyChallengeListInterface l) {
        return new MyChallengeListDto(
                l.getC_id(),
                l.getTitle(),
                l.getEndtime(),
                l.getComments(),
                l.getTags(),
                l.getUnit(),
                l.getLimits(),
                l.getMemcnt(),
                l.getNow_value(),
                l.getUp_value()
        );

    }
}
