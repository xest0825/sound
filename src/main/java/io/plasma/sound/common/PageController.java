package io.plasma.sound.common;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
public class PageController {

    @GetMapping("/")
    public ModelAndView goRoot() {
        log.info("/");
        ModelAndView mv = new ModelAndView("splash");
        mv.addObject("page_id", "splash");
        return mv;
    }

    /**
     * 퍼블리싱 페이지로 접근
     * @param page
     * @return
     */
    @GetMapping({"/published/{page}" + ".html"})
    public ModelAndView goPublishedPage(@PathVariable String page) {
        log.info(page);
        ModelAndView mv = new ModelAndView("/published/" + page);
        mv.addObject("page_id", page);
        return mv;
    }

    /**
     * 회원가입, 로그인
     * @param page
     * @return
     */
    @GetMapping({"/sign-in/{page}"})
    public ModelAndView goSignInPage(@PathVariable String page) {
        log.info(page);
        ModelAndView mv = new ModelAndView("/sign-in/" + page);
        mv.addObject("page_id", page);
        return mv;
    }

    /**
     * 피드 페이지
     * @param page
     * @return
     */
    @GetMapping({"/feed/{page}"})
    public ModelAndView goFeedPage(@PathVariable String page) {
        log.info(page);
        ModelAndView mv = new ModelAndView("/feed/" + page);
        mv.addObject("page_id", page);
        return mv;
    }

    /**
     * 검색 페이지
     * @param page
     * @return
     */
    @GetMapping({ "/search/{page}"})
    public ModelAndView goSearchPage(@PathVariable String page) {
        log.info(page);
        ModelAndView mv = new ModelAndView("/search/" + page);
        mv.addObject("page_id", page);
        return mv;
    }

    /**
     * 알림 페이지
     * @param page
     * @return
     */
    @GetMapping({ "/notification/{page}"})
    public ModelAndView goNotificationPage(@PathVariable String page) {
        log.info(page);
        ModelAndView mv = new ModelAndView("/notification/" + page);
        mv.addObject("page_id", page);
        return mv;
    }

    /**
     * 계정 정보 페이지
     * @param page
     * @return
     */
    @GetMapping({ "/account/{page}"})
    public ModelAndView goAccountPage(@PathVariable String page) {
        log.info(page);
        ModelAndView mv = new ModelAndView("/account/" + page);
        mv.addObject("page_id", page);
        return mv;
    }

    @GetMapping({"/post/{page}"})
    public ModelAndView goPage(@PathVariable String page) {
        log.info(page);
        ModelAndView mv = new ModelAndView(page);
        mv.addObject("page_id", page);
        return mv;
    }






}
