/**
 * 
 */

package io.plasma.sound.security;

import io.plasma.sound.security.model.User;
import io.plasma.sound.login.LoginService;
import io.plasma.sound.login.LoginVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
* @Project : robot_admin
* @FileName : CustomAuthenticationProvicer.java
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
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
	
	@Autowired
	private LoginService loginService;

	
	/*
	 * [Spring Security JWT] 2. 사용자 인증을 위한 검증 부분(사용자 조회 비즈니스 부분) (2)
	 * 2. 사용자 검증 진행 시  사용자 계정확인 부분(로그인 아이디 / 비밀번호 확인)
	 * */
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		LoginVO loginVo = new LoginVO(); //사용자 조회할 객체
		User user2 = new User();
		List<String> roleList = new ArrayList<String>();

		log.info("CustomAuthenticationProvider.authenticate() START... ");
		User user = (User)authentication.getPrincipal();

		String LOGIN_ID = authentication.getName();
		String LOGIN_PW = (String)authentication.getCredentials();

		Collection<? extends GrantedAuthority> authorities = null;
		
		log.info("CustomAuthenticationProvider.authenticate() Login Info Login_id = " + user.getUser_id() +" Login_pw = "+ user.getPassword() );
				
		loginVo.setLogin_id(LOGIN_ID);
		loginVo.setLogin_pw(LOGIN_PW);
		
		//사용자 검증
		// user = loginService.getLoginAuthCheck(loginVo);
		authorities = user.getAuthorities();

		
		log.info("CustomAuthenticationProvider.authenticate() End... ");
		return new UsernamePasswordAuthenticationToken(user, LOGIN_PW, authorities);

	}
	
	@Override
	public boolean supports(Class<?> authentication) {
		return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
	}	
}
