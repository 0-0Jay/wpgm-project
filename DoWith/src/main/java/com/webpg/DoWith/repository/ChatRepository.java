package com.webpg.DoWith.repository;

import com.webpg.DoWith.dto.ChallengeListInterface;
import com.webpg.DoWith.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ChatRepository extends JpaRepository<Chat, String> {
    @Transactional
    @Modifying
    @Query(value="INSERT INTO chat(chat_id, c_id, user_id, chat) " +
                 "VALUES(TO_CHAR(SYSDATE, 'YYMMDDHH24MISS'), :c_id, :user_id, :chat)",nativeQuery=true)
    public void addChat(@Param("c_id") String c_id, @Param("user_id") String user_id, @Param("chat") String chat);
}