package com.webpg.DoWith.repository;

import com.webpg.DoWith.dto.ChallengeListInterface;
import com.webpg.DoWith.entity.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge, String> {
    @Query(value="SELECT c.c_id, u.nickname AS leader, c.title, c.endtime, c.comments, c.tags, c.limits, " +
            "(SELECT COUNT(*) FROM member m WHERE m.c_id = c.c_id) AS memcnt " +
            "FROM Challenge c " +
            "JOIN users u ON c.leader = u.user_id", nativeQuery = true)
    public List<ChallengeListInterface> getChallenges();

    @Query(value="SELECT c.c_id, u.nickname AS leader, c.title, c.endtime, c.comments, c.tags, c.limits, " +
            "(SELECT COUNT(*) FROM member m WHERE m.c_id = c.c_id) AS memcnt " +
            "FROM Challenge c " +
            "JOIN Member m ON c.c_id = m.c_id " +
            "JOIN Users u ON u.user_id = c.leader " +
            "WHERE m.user_id = :user_id", nativeQuery = true)
    public List<ChallengeListInterface> getMyChallenges(@Param("user_id") String user_id);

}
