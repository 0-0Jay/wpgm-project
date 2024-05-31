package com.webpg.DoWith.repository;

import com.webpg.DoWith.entity.Member;
import com.webpg.DoWith.entity.MemberKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, MemberKey> {
    @Query(value="SELECT * FROM member where c_id = :c_id", nativeQuery = true)
    public List<Member> findByChallenge(@Param("c_id") String c_id);

    @Query(value="UPDATE member SET now_value = :value " +
            "WHERE c_id = :c_id and user_id = :user_id", nativeQuery = true)
    @Transactional
    @Modifying
    public void updateValue(@Param("c_id") String c_id, @Param("user_id") String user_id, @Param("value") int value);

    @Query(value="SELECT * FROM member WHERE c_id = :c_id and user_id = :user_id", nativeQuery = true)
    Optional<Member> getValue(@Param("c_id") String c_id, @Param("user_id") String user_id);
}
