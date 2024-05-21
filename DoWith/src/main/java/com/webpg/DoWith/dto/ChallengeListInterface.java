package com.webpg.DoWith.dto;
public interface ChallengeListInterface {
    String getC_id();
    String getTitle();
    java.sql.Timestamp getEndtime();
    String getComments();
    String getTags();
    int getLimits();
    int getMemcnt();
}
