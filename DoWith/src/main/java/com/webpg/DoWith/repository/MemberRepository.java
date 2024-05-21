package com.webpg.DoWith.repository;

import com.webpg.DoWith.entity.Member;
import com.webpg.DoWith.entity.MemberKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, MemberKey> {
    @Query(value="SELECT * FROM member where c_id = :c_id", nativeQuery = true)
    public List<Member> findByChallenge(@Param("c_id") String c_id);
}
