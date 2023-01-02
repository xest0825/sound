package io.plasma.sound.common;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
public class AdminPageController {

    @GetMapping("/admin")
    public ModelAndView goAdminLogin() {
        log.info("/admin");
        ModelAndView mv = new ModelAndView("/admin/login");
        mv.addObject("page_id", "login");
        return mv;
    }

    @GetMapping("/admin/main")
    public ModelAndView goAdminMainPage() {
        log.info("/admin/main");
        ModelAndView mv = new ModelAndView("/admin/main");
        mv.addObject("page_id", "main");
        return mv;
    }
}
