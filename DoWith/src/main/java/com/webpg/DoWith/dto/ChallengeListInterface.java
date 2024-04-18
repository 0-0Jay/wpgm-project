package com.webpg.DoWith.dto;

public interface ChallengeListInterface {
    String getCId();
    String getLeader();
    String getTitle();
    java.sql.Timestamp getEndtime();
    String getTags();
    int getLimits();
    int getMemcnt();
}
