package com.webpg.DoWith.repository;

import com.webpg.DoWith.entity.Member;
import com.webpg.DoWith.entity.MemberKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, MemberKey> {

}
