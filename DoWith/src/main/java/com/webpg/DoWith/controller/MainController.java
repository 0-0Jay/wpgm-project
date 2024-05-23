package com.webpg.DoWith.controller;

import com.webpg.DoWith.dto.*;
import com.webpg.DoWith.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/main")
public class MainController {
    private final MainService mainService;

    @GetMapping("/chList")
    public ResponseEntity<List<ChallengeListDto>> getChallenges() {
        return ResponseEntity.ok(mainService.getChallenges());
    }

    @PostMapping("/makeCh")
    public ResponseEntity<String> makeChallenge(@RequestBody RequestMakeCh request) {
        return ResponseEntity.ok(mainService.makeChallenges(request));
    }

    @PostMapping("/joinCh")
    public String joinChallenge(@RequestBody MemberDto request) {
        return mainService.joinChallenge(request);
    }

    @GetMapping("/chat/{c_id}")
    public ResponseEntity<List<ChatListDto>> getChatList(@PathVariable("c_id") String c_id) {
        Map<String, Object> map = mainService.getChatList(c_id);
        return ResponseEntity.status(HttpStatus.OK).body((List<ChatListDto>) map.get("list"));
    }

    @PostMapping("/addChat")
    public ResponseEntity<List<ChatListDto>> addChat(@RequestBody ChatDto chatDto) {
        Map<String, Object> map = mainService.addChat(chatDto);
        return ResponseEntity.status(HttpStatus.OK).body((List<ChatListDto>) map.get("list"));
    }

    @PostMapping("/leaveCh")
    public ResponseEntity<String> leaveChallenge(@RequestBody MemberDto request) {
        return ResponseEntity.ok(mainService.leaveChallenges(request));
    }

    @GetMapping("/search")
    public ResponseEntity<List<ChallengeListDto>> searchChallenge(@RequestParam("q") String query, @RequestParam("tags") String tags) {
        return ResponseEntity.ok(mainService.searchChallenge(query, tags));
    }

    @PostMapping("/myCh")
    public ResponseEntity<List<ChallengeListDto>> getMyChallenges(@RequestBody Map<String, String> request) {
        return ResponseEntity.ok(mainService.getMyChallenges(request.get("user_id")));
    }

}
