package com.webpg.DoWith.service;

import com.webpg.DoWith.dto.*;
import com.webpg.DoWith.entity.Challenge;
import com.webpg.DoWith.entity.Chat;
import com.webpg.DoWith.entity.Member;
import com.webpg.DoWith.entity.MemberKey;
import com.webpg.DoWith.repository.ChallengeRepository;
import com.webpg.DoWith.repository.ChatRepository;
import com.webpg.DoWith.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MainService {
    private final ChallengeRepository challengeRepository;
    private final ChatRepository chatRepository;
    private final MemberRepository memberRepository;
    public List<ChallengeListDto> getChallenges() {
        List<ChallengeListInterface> chList = challengeRepository.getChallenges();
        return chList.stream().map(ChallengeListDto::toDto).collect(Collectors.toList());
    }

    public List<ChallengeListDto> getMyChallenges(String user_id) {
        List<ChallengeListInterface> myList = challengeRepository.getMyChallenges(user_id);
        return myList.stream().map(ChallengeListDto::toDto).collect(Collectors.toList());
    }

    public String makeChallenges(RequestMakeCh request) {
        String c_id = String.valueOf(System.currentTimeMillis());
        String user_id = request.getUser_id();
        Challenge challenge = new Challenge(
                c_id,
                request.getTitle(),
                request.getEndtime(),
                request.getComments(),
                request.getTags(),
                request.getLimits()
        );
        Member member = new Member(
                MemberKey.builder()
                        .user_id(user_id)
                        .c_id(c_id)
                        .build()
        );
        challengeRepository.save(challenge);
        memberRepository.save(member);
        return "OK";
    }

    public Map<String, Object> addChat(ChatDto chatDto) {
        String chat_id = String.valueOf(System.currentTimeMillis());
        chatDto.setChat_id(chat_id);
        chatRepository.save(ChatDto.toEntity(chatDto));
        return getChatList(chatDto.getC_id());
    }

    public String joinChallenge(MemberDto request) {
        Map<String, Object> map = new HashMap<>();
        MemberKey m = MemberKey.builder()
                .c_id(request.getC_id())
                .user_id(request.getUser_id())
                .build();
        Member member = new Member(m);
        memberRepository.save(member);
        return "OK";
    }

    public Map<String, Object> getChatList(String c_id) {
        Map<String, Object> map = new HashMap<>();
        List<ChatListInterface> list = chatRepository.getChatList(c_id);
        List<ChatListDto> result = list.stream().map(ChatListDto::toDto).toList();
        map.put("list", result);
        return map;
    }

    public String leaveChallenges(MemberDto request) {
        String c_id = request.getC_id();
        String user_id = request.getUser_id();
        MemberKey m = MemberKey.builder()
                .c_id(c_id)
                .user_id(user_id)
                .build();
        memberRepository.delete(new Member(m));
        if (memberRepository.findByChallenge(c_id).isEmpty())
            challengeRepository.deleteById(c_id);
        return "OK";
    }

    public List<ChallengeListDto> searchChallenge(String query, String tags) {
        System.out.println(query + " " + tags);
        List<ChallengeListInterface> list = challengeRepository.search("%" + query + "%", tags);
        return list.stream().map(ChallengeListDto::toDto).collect(Collectors.toList());
    }
}
