package com.webpg.DoWith.dto;
public interface MyChallengeListInterface {
    String getC_id();
    String getTitle();
    java.sql.Timestamp getEndtime();
    String getComments();
    String getTags();
    String getUnit();
    int getLimits();
    int getMemcnt();
    int getNow_value();
    int getUp_value();
}
