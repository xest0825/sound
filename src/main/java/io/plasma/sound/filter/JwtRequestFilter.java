/**
 *
 */

package io.plasma.sound.filter;

import io.jsonwebtoken.*;
import io.plasma.sound.util.JwtTokenUtil;
import io.plasma.sound.config.SecurityConstants;
import io.plasma.sound.security.model.Role;
import io.plasma.sound.security.model.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

/**
* @Project : robot_admin
* @FileName : JwtRequestFilter.java
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
public class JwtRequestFilter extends OncePerRequestFilter {

	public JwtRequestFilter() {
	}

    private Optional<String> resolveToken(HttpServletRequest request){
        // Request의 Header에 담긴 토큰 값을 가져온다

        String authToken = request.getHeader(SecurityConstants.TOKEN_HEADER);
        // log.debug("authToken: " + authToken);

        // 공백 혹은 null이 아니면
        if(StringUtils.hasText(authToken)){
            return Optional.of(authToken);
        } else {
            return Optional.empty();
        }
    }

	/*  [Spring Security JWT] JWT Filter 최상단 부분(1)
	 *    1. 최상단 진입점
	 *    JWT 필터 적용
	 *    요청 URL에 대한 헤더 내 JWT 토큰 확인
	 *    */
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String header = request.getHeader(SecurityConstants.TOKEN_HEADER);


		/*
		if(null == header && null != request.getMethod() && request.getMethod().equals("GET")){
			header =  request.getParameter(SecurityConstants.TOKEN_HEADER);
		}
		*/

		if (isEmpty(header) || !header.startsWith(SecurityConstants.TOKEN_PREFIX)) {
			//filterChain.doFilter(request, response);
			//return;
			header = request.getHeader(SecurityConstants.TOKEN_HEADER);
			if (header == null) {
				header =  request.getParameter(SecurityConstants.TOKEN_HEADER);
			}
			log.info("doFilterInternal @ url : " + request.getRequestURL());
			log.debug("authorization : " + header);

			/*
			 * JWT 토큰 인증 확인
			 * */

			//bjchoi 20230103 : Filter 부분에서 JWT 인증 완료 시 유저 정보에 대해 스프링 Context에 저장해야 함(Todo)
			/*String token = "";
			if(null != header && header.isEmpty()){
				token =  request.getParameter("ACCESS_TOKEN");
			}
			JwtTokenUtil jwtUtil = new JwtTokenUtil();
			String jwtUser = jwtUtil.getUsernameFromToken(token);
			Map<String, Object> parsedToken = jwtUtil.getAllClaimsArrayFromToken(token);*/

			//JWT 토큰정보가 유효하면
			if (isEmpty(header)) {
				filterChain.doFilter(request, response);
				//throw new UsernameNotFoundException("인가된 사용자가 아닙니다.");
				return;
			}
		}


		/*
		*  Todo:
		*   1) 요청받은 Request 의 header 정보중 jwt token 값이 있으면 해당 토큰 값을 파싱하여 사용자 정보를   SecurityContextHolder 에 사용자 정보를 삽입해야 함.
		* */
		Authentication authentication = this.getAuthentication(header);
		//bjchoi 20230103 : Filter 부분에서 JWT 인증 완료 시 유저 정보에 대해 스프링 Context에 저장해야 함(Todo)
		if( null != authentication){
			// todo: security Context에 인증된 정보를 삽입하면 session 을 못 가져옴???
			log.info("SET Authentication at SecurityContext");
			log.debug("authentication : " + authentication);
			log.debug("authentication.getPrincipal() : " + authentication.getPrincipal());
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}

		response.setHeader(SecurityConstants.TOKEN_HEADER, header);
		filterChain.doFilter(request, response);

	}

	/*
	 * request 헤더에 적용된 JWT 토큰을 파싱하여 user 정보 확인.
	 *
	 * */
	@SuppressWarnings("unchecked")
	private UsernamePasswordAuthenticationToken getAuthentication(String tokenHeader) {
		if (isNotEmpty(tokenHeader)) {
			try {
				
				JwtTokenUtil jwtUtil = new JwtTokenUtil();
				if(!jwtUtil.isTokenExpired(tokenHeader)){
					//throw new AuthenticationServiceException("토큰 값 만료"); //[Spring Security JWT] bjchoi 토큰 유효기간이 만료되었을 경우 로그인 페이지 이동을 위한 익셉션 발생 처리
					throw new AccountExpiredException("토큰 값 만료"); //[Spring Security JWT] 세션만료 로직 개선
				}
				
				byte[] signingkey = SecurityConstants.JWT_SECRET.getBytes();

				Jws<Claims> parsedToken = Jwts.parser().setSigningKey(signingkey)
						.parseClaimsJws(tokenHeader.replace("Bearer", "").replace("bearer", ""));

				Claims claims = parsedToken.getBody();
				String userId = (String) claims.get("uid");
				String loginId = (String) claims.get("lid");
				String userPw = (String) claims.get("pid");
				String user_nm = (String) claims.get("unm");
				String mb_id = (String) claims.get("mid");
				// log.info("userId : " + userId + ", loginId : " + loginId + ", user_nm : " + user_nm + ", mb_id : " + mb_id + ", role : " + claims.get("rol"));
				//List<SimpleGrantedAuthority> authorities = ((List<?>) claims.get("rol")).stream().map(authority -> new SimpleGrantedAuthority((String) authority)).collect(Collectors.toList());
				//List<String> authorities = ((List<String>) claims.get("rol")).stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());


				Collection<? extends GrantedAuthority> authorities = (Collection<? extends GrantedAuthority>)claims.get("rol");
				if (isNotEmpty(userId)) {
					// log.info("set User");
					User user = new User();
					user.setUsername(loginId);	//authentication 객체에 전달되기위해 login_id  로그인시 아이디를 사용
					user.setLogin_id(loginId);
					user.setUser_id(userId);		//사번 코드는 인증 부분에서 사용할 가능성이 있어 같이 넘겨줌
					user.setUser_nm(user_nm);
					//user.setAuthorities((List<Role>)claims.get("rol"));
					user.setAuthorities((List<Role>)claims.get("rol"));
					user.setPassword(userPw);

					return new UsernamePasswordAuthenticationToken(user, userPw);
				}

			} catch (ExpiredJwtException exception) {
				log.warn("Request to parse expired JWT : {} failed : {}", tokenHeader, exception.getMessage());

			} catch (UnsupportedJwtException exception) {
				log.warn("Request to parse unsupported JWT : {} failed : {}", tokenHeader, exception.getMessage());

			} catch (MalformedJwtException exception) {
				log.warn("Request to parse invalid JWT : {} failed : {}", tokenHeader, exception.getMessage());

			} catch (IllegalArgumentException exception) {
				log.warn("Request to parse empty or null JWT : {} failed : {}", tokenHeader, exception.getMessage());

			}

		}
		return null;

	}

	private boolean isEmpty(final CharSequence cs) {
		return cs == null || cs.length() == 0;
	}

	private boolean isNotEmpty(final CharSequence cs) {
		return !isEmpty(cs);
	}
}
