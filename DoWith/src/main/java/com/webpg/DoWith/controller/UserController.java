package com.webpg.DoWith.controller;

import com.webpg.DoWith.dto.RequestChangeNick;
import com.webpg.DoWith.dto.RequestChangePW;
import com.webpg.DoWith.dto.RequestLogin;
import com.webpg.DoWith.dto.UserDto;
import com.webpg.DoWith.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody UserDto userDto) {
        String result = userService.join(userDto);
        HttpStatus status = (result.equals("OK"))? HttpStatus.OK:HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(result);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody RequestLogin request) {
        Map<String, Object> map = userService.login(request);
        HttpStatus status = (map.get("nickname") == null)? HttpStatus.BAD_REQUEST:HttpStatus.OK;
        return ResponseEntity.status(status).body(map);
    }

    @PostMapping("/deleteId")
    public ResponseEntity<String> join(@RequestBody Map<String, String> request) {
        String result = userService.deleteId(request.get("user_id"));
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping("/changePw")
    public ResponseEntity<String> changePw(@RequestBody RequestChangePW request) {
        String result = userService.changePw(request);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping("/changeNick")
    public ResponseEntity<String> changeNick(@RequestBody RequestChangeNick request) {
        String result = userService.changeNick(request);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
