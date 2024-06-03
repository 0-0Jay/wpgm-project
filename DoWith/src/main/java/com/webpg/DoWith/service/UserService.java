package com.webpg.DoWith.service;

import com.webpg.DoWith.dto.*;
import com.webpg.DoWith.entity.Member;
import com.webpg.DoWith.entity.MemberKey;
import com.webpg.DoWith.entity.Users;
import com.webpg.DoWith.repository.MemberRepository;
import com.webpg.DoWith.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UsersRepository usersRepository;
    private final MemberRepository memberRepository;

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
        int now_value = request.getNow_value();
        Member user_value = memberRepository.getValue(request.getC_id(), request.getUser_id()).orElseThrow();
        int up_value = user_value.getUp_value();
        if (now_value < up_value) {
            memberRepository.updateValue(c_id, user_id, now_value);
            if (now_value > user_value.getNow_value()) {
                
                return "Good";
            }
            return "OK";
        } else {
            memberRepository.deleteById(new MemberKey(c_id, user_id));
            return "Success";
        }
    }
}
