/**
 * 
 */

package io.plasma.sound.filter;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import io.plasma.sound.config.SecurityConstants;
import io.plasma.sound.util.CryptoUtil;
import io.plasma.sound.security.model.User;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetails;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

/**
* @Project : robot_admin
* @FileName : JwtAuthenticationFilter.java
* @Date : 2022. 12. 7.
* @author : choiys
* @description :
*
* Revision History
* Author             Date       Description
* ------------------ ---------- -----------------------
* choiys		 2022. 12. 7.
*
*/
@Slf4j
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	private final AuthenticationManager authenticationManager;
	
	private SqlSessionTemplate sqlSession;


	public JwtAuthenticationFilter(AuthenticationManager authenticationManager, SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
		this.authenticationManager = authenticationManager;
		setFilterProcessesUrl(SecurityConstants.AUTH_LOGIN_URL);
	}
	
	/*
	 * [Spring Security JWT] 1. 로그인 페이지에서 로그인 진행 시 사용자 인증 부분(로그인 시작부분)
	 * */
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		log.info("attemptAuthentication authentication Start ");
		User paramuser = new User();
		String username = request.getParameter("login_id");
		String password = request.getParameter("login_pw");
		String mb_id = request.getParameter("mb_id");
		String login_typ = request.getParameter("login_typ");
		String smp_pw = request.getParameter("smp_pw");
		String devc_id = request.getParameter("devc_id");
		log.info("JwtAuthenticationFilter.attempAuthentication :: username : " + username + ", password: " + password 
				+ ", mb_id : " + mb_id + ", login_typ : " + login_typ + ", smp_pw : " + smp_pw + ", devc_id :" + devc_id);

		try{
			password = CryptoUtil.encrypt(password);
		}catch (UnsupportedEncodingException | GeneralSecurityException e){
			e.printStackTrace();
			throw new BadCredentialsException("입력된 패스워드 정보 암복호화 오류");
		}

		paramuser.setUsername(username);
		paramuser.setPassword(password);
		paramuser.setUser_id(username);

		List<String> roleList = new ArrayList<String>();
		roleList.add("ROLE_USER");
		//paramuser.setAuthorities(roleList);

		Authentication authenticationToken2 = new UsernamePasswordAuthenticationToken(paramuser, password, null);

		//20221209 bjchoi : 로그인 진행 시 사용자 인증에 대한 부분 확인 필요.  system.security.model.User 사용? security.model.User 사용?
		//Authentication authenticationToken = new UsernamePasswordAuthenticationToken(new CustomUser(paramuser), roleList);

		return authenticationManager.authenticate(authenticationToken2);
	}
	
	
	/*
	 *  [Spring Security JWT] 3.사용자 인증 확인 후 Client에 JWT 전달 (3)
	 *  3.? 사용자 인증 검증 통과 시 인가를 위한 JWT 토큰 제작
	 * */
	@Override
	public void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
			FilterChain filterChain, Authentication authentication) {
		log.info("successfulAuthentication authentication : " + authentication);
		log.info("successfulAuthentication authentication.getPrincipal()" + authentication.getPrincipal());

		User user = (User) authentication.getPrincipal();
		//CustomUser user = (CustomUser) authentication.getPrincipal();
		//String username = user.getUsername();
		String username = user.getUser_id();//로그인 사번
		//String uid = user.getUser_id();
		String uid = user.getUser_id();	//사용자 사번
//		String password = user.getPassword();
		List<String> roles = user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
		Collection<? extends GrantedAuthority> authorities = user.getAuthorities();
		String user_nm = user.getUser_nm();
		String user_password = user.getPassword();
		//String login_typ = user.getLogin_typ();
		//String devc_id = user.getDevc_id();

		//log.info("username : " + username + ", uid : " + uid +  ", roles : " + roles + ", user_nm : " +user_nm + ", lotin_typ : " + login_typ + ", devc_id : " + devc_id);
		String token = createToken(username, authorities, uid, user_password ,user_nm, "");
		//log.info("token : " + token);

		HashMap<String, Object> loginMap = new HashMap<String, Object>();
		loginMap.put("login_id", username);
		loginMap.put("user_id", uid);
		loginMap.put("login_typ", "");
		loginMap.put("devc_id", "");
		//sqlSession.insert("Log." + "insertLoginLog", loginMap);  //Todo: 로그인 로그 기록 삽입(다른 filter에서 사용하면 해당 row 삭제 필요)
		
		WebAuthenticationDetails webAuthenticationDetails = (WebAuthenticationDetails)authentication.getDetails();


		SecurityContextHolder.getContext().setAuthentication(authentication);
		response.addHeader(SecurityConstants.TOKEN_HEADER, SecurityConstants.TOKEN_PREFIX + token);
	}
	
	private String createToken(String username, Collection<? extends GrantedAuthority> roles, String user_id, String user_pw, String user_nm, String devc_id) {
		byte[] signingkey = SecurityConstants.JWT_SECRET.getBytes();
		//long exp_tm = System.currentTimeMillis() + 864000000;	// 24시간
		long exp_tm = System.currentTimeMillis() + 3600000;	// 1시간
		//long exp_tm = System.currentTimeMillis() + 5000;	// 5초
		// log.info("exp_tm : " + exp_tm);

		String token = Jwts.builder().signWith(Keys.hmacShaKeyFor(signingkey), SignatureAlgorithm.HS512)
				.setHeaderParam("typ", SecurityConstants.TOKEN_TYPE)
				.setSubject(user_id)
				.setExpiration(new Date(exp_tm))
				.claim("uid", user_id)			// 사용자 사번(emp_Cd)
				.claim("pid", user_pw)
				.claim("lid", username)			// 로그인 아이디(login_id)
				.claim("unm", user_nm)			// 사용자 이름
				.claim("rol", roles)				// 권한 코드
				.claim("did", devc_id)			// device_id
				.compact();

		// log.info("token : " + token);
		HashMap<String, Object> jwtMap = new HashMap<String, Object>();
		jwtMap.put("user_id", user_id);
		//jwtMap.put("auth", roles.toString());
		jwtMap.put("jwt", token);
		jwtMap.put("exp_tm", exp_tm);
		jwtMap.put("reg_id", "system");
		//sqlSession.insert("Jwt." + "insertJwtLog", jwtMap);	//bjchoi todo: 발급된 JWT 정보를 DB에 저장해야 하는지? 의사결정 필요
		return token;
	}
}
