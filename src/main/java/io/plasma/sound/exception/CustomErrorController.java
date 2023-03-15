/**
 * 
 */

package io.plasma.sound.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.boot.autoconfigure.web.servlet.error.BasicErrorController;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorViewResolver;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
* @Project : robot_admin
* @FileName : CustomErrorController.java
* @Date : 2022. 12. 7.
* @author : bumjoon.choi
* @description :
*
* Revision History
* Author             Date       Description
* ------------------ ---------- -----------------------
* bumjoon.choi		 2022. 12. 7.
*
*/

@Slf4j
@Controller
@RequestMapping("${server.error.path:${error.path:/error}}")
public class CustomErrorController extends BasicErrorController {

	//@Autowired
	//LogService logService;
	
	public CustomErrorController(ErrorAttributes errorAttributes,
	            ServerProperties serverProperties,
	            List<ErrorViewResolver> errorViewResolvers) {
		super(errorAttributes, serverProperties.getError(), errorViewResolvers);
	}
	
	@RequestMapping(produces = MediaType.TEXT_HTML_VALUE)
	public ModelAndView errorHtml(HttpServletRequest request,
	             HttpServletResponse response) {
		log(request, response); // 로그 추가
		return super.errorHtml(request, response);
	}
	
	public ResponseEntity<Map<String, Object>> error(HttpServletRequest request, HttpServletResponse response) {
		log(request, response);
		return super.error(request);
	}
	
	private void log(HttpServletRequest request, HttpServletResponse response) {
		log.error("error " + "");
		log.error("request.getRequestURI = {}",request.getRequestURI());
		log.error("response.getStatus() = {}",response.getStatus());

		
		Enumeration<String> paramsss = request.getParameterNames();
		log.info("---------- request params @ CustomErrorController.log ----------");
		String params = "";
		while (paramsss.hasMoreElements()) {
			String name = (String) paramsss.nextElement();
			params += (name + "=" + request.getParameter(name) + "&");
		}
		log.info(params);
		log.info("--------------------------------------------");
		
		String ua = request.getHeader("User-Agent");
		
		Map<String, Object> body = getErrorAttributes(request, getErrorAttributeOptions(request, MediaType.ALL));
		log.info("ErrorAttributes : " + body);
		
		HashMap<String, Object> errorMap = new HashMap<String, Object>();
		errorMap.put("err_url", body.get("path"));
		errorMap.put("err_sts", response.getStatus());
		errorMap.put("err_cls", "");  					/* VARCHAR(200) 	'오류 발생 클래스' 	*/
		errorMap.put("err_msg", body.get("message"));   /* VARCHAR(4000)  	'오류 메시지' 		*/
		errorMap.put("err_trc", "");  					/* VARCHAR(4000)  	'오류 트레이스'	 	*/
		errorMap.put("params", params);  			 	/* TEXT 			'파라미터' 			*/
		errorMap.put("err_env", ua);  					/* TEXT  			'오류 환경' 		*/
		errorMap.put("user_id", "");  					/* VARCHAR(256)  	'사용자 ID' 		*/
		//logService.insertErrorLog(errorMap);		//bjchoi Todo:오류로그 기록 서비스 추가 필요
	}
}
