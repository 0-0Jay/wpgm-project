package com.webpg.DoWith.controller;

import com.webpg.DoWith.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/main")
public class MainController {
    private final MainService mainService;
}
