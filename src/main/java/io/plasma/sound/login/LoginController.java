package io.plasma.sound.login;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.plasma.sound.base.BaseController;
import io.plasma.sound.config.SecurityConstants;
import io.plasma.sound.security.model.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController("LoginController")
public class LoginController extends BaseController {

	/**
	 * @Description  : 로그인 정보 조회(사용자계정관리)
	 * @author       : lakhyun.kim
	 * @since        : 2019. 03. 05
	 * @return       : ModelAndView
	 */
	@GetMapping("/login/getLoginList.ajax")
	public ModelAndView getLoginList(HttpServletRequest request, HttpServletResponse response, LoginVO loginVO) {
		log.info("LoginController_getLoginList");
		ModelAndView mv = new ModelAndView("jsonView");
		User UserSession = null;
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if(authentication.getPrincipal().getClass()==User.class){
			UserSession = (User) authentication.getPrincipal();
		}
		mv.addObject("results", getLoginService().getLoginList(loginVO));
		return mv;
	}
	

	/**
	 * @Description  : 로그인 정보 수정(비밀번호 초기화, 계정잠금/해제, 2factor인증/해제)
	 * @author       : lakhyun.kim
	 * @since        : 2019. 03. 05
	 * @return       : ModelAndView
	 */
	@SuppressWarnings("unchecked")
	@PutMapping("/login/updateLogin.ajax")
	public ModelAndView updateLogin(HttpServletRequest request, @RequestBody LoginVO vo) {
		ModelAndView mv = new ModelAndView("jsonView");
		User UserSession = null;	//SessionUtil.getSessionVO(request.getSession()).getUser();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if(authentication.getPrincipal().getClass()==User.class){
			UserSession = (User) authentication.getPrincipal();
		}
		getLoginService().updateLogin(vo);
		return mv;
	}

	
	/**
	 * JWT 토큰으로 사용자 정보 조회
	 * 
	 * @param header
	 * @return
	 */
	@GetMapping("/userInfo")
	public ResponseEntity<String> getUserInfo(@RequestHeader(name="Authorization") String header) {
		log.info("header : " + header);
		String token = "";
		if(header.indexOf("Bearer")>=0 || header.indexOf("bearer") >=0 ) {
			token = header.substring(6);
		}else{
			token = header;
		}
		
		byte[] signingkey = SecurityConstants.JWT_SECRET.getBytes();
		Jws<Claims> parsedToken = Jwts.parser()
				.setSigningKey(signingkey)
				.parseClaimsJws(token);
		
		String username = parsedToken.getBody().getSubject();		
		log.info("username : " + username);
		
		//parsedToken.getBody().get("mid");
		//parsedToken.getBody().get("uid");
		//parsedToken.getBody().get("rol");
		
		Claims claims = parsedToken.getBody();
		Object roleList = claims.get("rol");
		log.info("roleList  :" + roleList);
		
		return new ResponseEntity<String>(parsedToken.toString(), HttpStatus.OK);
	}
	
}
