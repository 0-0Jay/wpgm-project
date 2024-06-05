package com.webpg.DoWith.service;

import com.webpg.DoWith.dto.*;
import com.webpg.DoWith.entity.Chat;
import com.webpg.DoWith.entity.Member;
import com.webpg.DoWith.entity.MemberKey;
import com.webpg.DoWith.entity.Users;
import com.webpg.DoWith.repository.ChatRepository;
import com.webpg.DoWith.repository.MemberRepository;
import com.webpg.DoWith.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static java.lang.Math.abs;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UsersRepository usersRepository;
    private final MemberRepository memberRepository;
    private final MainService mainService;

    public String join(UserDto userDto) {
        if (usersRepository.existsById(userDto.getUser_id())) {
            return "Already Exists ID";
        } else if (usersRepository.findByNickname(userDto.getNickname()).isPresent()) {
            return "Already Exists Nickname";
        } else {
            usersRepository.save(UserDto.toEntity(userDto));
            return "OK";
        }
    }

    public Map<String, Object> login(RequestLogin request) {
        Users tmp = usersRepository.findById(request.getUser_id()).orElse(null);
        Map<String, Object> map = new HashMap<>();
        System.out.println(request.getUser_id() + request.getPasswd());
        if (tmp != null && tmp.getPasswd().equals(request.getPasswd())) {
            map.put("user_id", request.getUser_id());
            map.put("nickname", tmp.getNickname());
        } else map.put("nickname", null);
        return map;
    }

    public String deleteId(String user_id) {
        usersRepository.deleteById(user_id);
        return "OK";
    }

    public String changePw(RequestChangePW request) {
        Optional<Users> user = usersRepository.findById(request.getUser_id());
        Users tmp = user.orElseThrow();
        if (tmp.getPasswd().equals(request.getPasswd())) {
            tmp.setPasswd(request.getNewpw());
            usersRepository.save(tmp);
            return "OK";
        } else return "Not Correct Pw";
    }

    public String changeNick(RequestChangeNick request) {
        Optional<Users> already = usersRepository.findByNickname(request.getNickname());
        if (already.isEmpty()) {
            Users user = usersRepository.findById(request.getUser_id()).orElseThrow();
            user.setNickname(request.getNickname());
            usersRepository.save(user);
            return "OK";
        } else return "Already Exists Nickname";
    }

    public String updateValue(RequestUpdateValue request) {
        String c_id = request.getC_id();
        String user_id = request.getUser_id();
        Member user_value = memberRepository.getValue(request.getC_id(), request.getUser_id()).orElseThrow();
        int diff = abs(user_value.getUp_value() - request.getNow_value());
        int bef_diff = abs(user_value.getUp_value() - user_value.getNow_value());
        memberRepository.updateValue(c_id, user_id, request.getNow_value());
        if (diff > 0) {
            if (diff < bef_diff) {
                String alert = request.getNickname() + "님께서 " +
                        (bef_diff - diff) + request.getUnit() + "만큼 목표에 가까워졌습니다!";
                mainService.addChat(new ChatDto("", "alert", request.getC_id(), alert));
                return "Good";
            }
            return "OK";
        } else {
            String alert = request.getNickname() + "님께서 목표를 달성하셨습니다!";
            mainService.addChat(new ChatDto("", "alert", request.getC_id(), alert));
            return "Success";
        }
    }
}
