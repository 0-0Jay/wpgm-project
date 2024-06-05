package com.webpg.DoWith.repository;

import com.webpg.DoWith.dto.ChatListInterface;
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
    @Query(value = "SELECT c.chat_id, c.c_id, c.user_id, c.chat, u.nickname, m.now_value, m.up_value " +
            "FROM chat c " +
            "JOIN member m on m.c_id = c.c_id " +
            "JOIN users u ON u.user_id = c.user_id AND c.user_id = m.user_id " +
            "WHERE c.c_id = :c_id " +
            "UNION " +
            "SELECT c.chat_id, c.c_id, c.user_id, c.chat, u.nickname, 0 AS now_value, 0 AS up_value " +
            "FROM chat c " +
            "JOIN users u ON c.user_id = u.user_id " +
            "WHERE c.user_id = 'alert' AND c_id = :c_id " +
            "ORDER BY chat_id", nativeQuery = true)
    public List<ChatListInterface> getChatList(@Param("c_id") String c_id);
}
