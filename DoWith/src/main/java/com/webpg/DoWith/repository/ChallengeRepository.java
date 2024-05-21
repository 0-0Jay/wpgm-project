package com.webpg.DoWith.repository;

import com.webpg.DoWith.dto.ChallengeListInterface;
import com.webpg.DoWith.entity.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge, String> {
    @Query(value="SELECT c.c_id, c.title, c.endtime, c.comments, c.tags, c.limits, " +
            "(SELECT COUNT(*) FROM member m WHERE m.c_id = c.c_id) AS memcnt " +
            "FROM Challenge c", nativeQuery = true)
    public List<ChallengeListInterface> getChallenges();

    @Query(value="SELECT c.c_id, c.title, c.endtime, c.comments, c.tags, c.limits, " +
            "(SELECT COUNT(*) FROM member m WHERE m.c_id = c.c_id) AS memcnt " +
            "FROM Challenge c " +
            "JOIN Member m ON c.c_id = m.c_id " +
            "WHERE m.user_id = :user_id", nativeQuery = true)
    public List<ChallengeListInterface> getMyChallenges(@Param("user_id") String user_id);

    @Query(value="SELECT c.c_id, c.title, c.endtime, c.comments, c.tags, c.limits, " +
            "(SELECT COUNT(*) FROM member m WHERE m.c_id = c.c_id) AS memcnt " +
            "FROM Challenge c " +
            "WHERE c.title LIKE :query AND c.tags = :tags", nativeQuery = true)
    public List<ChallengeListInterface> search(@Param("query") String query, @Param("tags") String tags);
}
