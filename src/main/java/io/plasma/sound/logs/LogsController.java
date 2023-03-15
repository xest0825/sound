package io.plasma.sound.logs;

import io.plasma.sound.base.BaseController;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * 증권정보 입력/분석/관리
 * @author user
 *
 */
@Slf4j
@RestController("LogsController")
public class LogsController extends BaseController {
	
	/**
	 * 로그인 기록 리스트 조회
	 * @param HttpServletRequest
	 * @param HttpServletResponse
	 * @param LoginHistVO
	 * @return ModelAndView
	 * @throws Exception
	 */
	@GetMapping("/logss/getLoginHistList.ajax")
	public ModelAndView getLoginHistList(HttpServletRequest request, HttpServletResponse response, LoginHistVO vo) {
		ModelAndView mv = new ModelAndView("jsonView");
		mv.addObject("results", getLogsService().getLoginHistList(vo));
		return mv;
	}
	
	/**
	 * 액션 로그 리스트 조회
	 * @param HttpServletRequest
	 * @param HttpServletResponse
	 * @param ActionLogVO
	 * @return ModelAndView
	 * @throws Exception
	 */
	@GetMapping("/logss/getActionLogList.ajax")
	public ModelAndView getActionLogList(HttpServletRequest request, HttpServletResponse response, ActionLogVO vo) {
		ModelAndView mv = new ModelAndView("jsonView");
		mv.addObject("results", getLogsService().getActionLogList(vo));
		return mv;
	}
	
	/**
	 * 에러 로그 리스트 조회
	 * @param HttpServletRequest
	 * @param HttpServletResponse
	 * @param ActionLogVO
	 * @return ModelAndView
	 * @throws Exception
	 */
	@GetMapping("/logss/getErrorLogList.ajax")
	public ModelAndView getActionLogList(HttpServletRequest request, HttpServletResponse response, ErrorLogVO vo) {
		ModelAndView mv = new ModelAndView("jsonView");
		mv.addObject("results", getLogsService().getErrorLogList(vo));
		return mv;
	}
	
}
