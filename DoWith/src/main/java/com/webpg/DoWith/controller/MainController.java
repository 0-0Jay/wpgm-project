package com.webpg.DoWith.controller;

import com.webpg.DoWith.dto.*;
import com.webpg.DoWith.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<String> joinChallenge(@RequestBody MemberDto memberDto) {
        return ResponseEntity.ok(mainService.joinChallenge(memberDto));
    }

    @PostMapping("/addChat")
    public ResponseEntity<String> addChat(@RequestBody ChatDto chatDto) {
        return ResponseEntity.ok(mainService.addChat(chatDto));
    }

    @PostMapping("/leaveCh")
    public ResponseEntity<String> leaveChallenge(@RequestBody MemberDto request) {
        return ResponseEntity.ok("ok");
    }

    @GetMapping("/search")
    public ResponseEntity<String> leaveChallenge(@RequestParam("q") String query, @RequestParam("tags") String tags) {
        return ResponseEntity.ok("ok");
    }

    @PostMapping("/myCh")
    public ResponseEntity<List<ChallengeListDto>> getMyChallenges(@RequestBody Map<String, String> request) {
        return ResponseEntity.ok(mainService.getMyChallenges(request.get("user_id")));
    }

    @PostMapping("/selectCh")
    public ResponseEntity<List<ChatListDto>> selectChallenge(@RequestBody MemberDto request) {
        Map<String, Object> map = mainService.getChatList(request);
        HttpStatus status = (HttpStatus) map.get("status");
        if (status == HttpStatus.BAD_REQUEST) {
            List<ChatListDto> list = (List<ChatListDto>) map.get("list");
            return ResponseEntity.status(status).body(list);
        }
        return ResponseEntity.status(status).body(null);
    }

}
