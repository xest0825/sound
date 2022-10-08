package io.plasma.sound.common;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
public class PageController {

    @RequestMapping({"/published/{page}" + ".html", "/{page}" + ".html"})
    ModelAndView goPage(@PathVariable String page) {
        log.info(page);
        ModelAndView mv = new ModelAndView(page);
        return mv;
    }
}
