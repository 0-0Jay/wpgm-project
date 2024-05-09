package com.webpg.DoWith.service;

import com.webpg.DoWith.dto.RequestChangeNick;
import com.webpg.DoWith.dto.RequestChangePW;
import com.webpg.DoWith.dto.RequestLogin;
import com.webpg.DoWith.dto.UserDto;
import com.webpg.DoWith.entity.Users;
import com.webpg.DoWith.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UsersRepository usersRepository;

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
}
