package io.plasma.sound.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.plasma.sound.config.SecurityConstants;
import io.plasma.sound.security.model.Role;
import io.plasma.sound.security.model.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import java.util.function.Function;

/**
* @Project : sound
* @FileName : JwtTokenUtil.java
* @Date : 2023. 01. 01
* @author : choiys
* @description :
*
* Revision History
* Author             Date       Description
* ------------------ ---------- -----------------------
* choiys		 2023. 01. 01.
*
*/
@Slf4j
@Component
public class JwtTokenUtil implements Serializable {

	private static final long serialVersionUID = -2550185165626007488L;
	private String secretKey = "plasmaound@vmffpdlfltmxmrhddbthfuf";
	
	private Date nowDate = Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant());
	
	@PostConstruct
	public void init() {
		secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
	}
	
	/*
	 * TOKEN으로 유저명 찾아옴!!
	 * */
	public String getUsernameFromToken(String token) {
		if(validateToken(token)) {
			return getClaimFromToken(token, Claims::getSubject);
		}
		
		return "";
	}
	
	/*
	 * TOKEN으로 데이터 찾아옴!!
	 * */
	public String getClaimsDataFromToken(String name, String token) {
		if(validateToken(token)) {
			byte[] signingkey = SecurityConstants.JWT_SECRET.getBytes();
			Claims claims = Jwts.parser().setSigningKey(signingkey).parseClaimsJws(token).getBody();
			String realname = claims.get(name, String.class);
			return realname;
		}
		
		return "";
	}
	
	/*
	 * TOKEN으로 유효시간 찾아옴!!
	 * */
	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}
	
	public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		if(validateToken(token)) {
			final Claims claims = getAllClaimsFromToken(token);
			return claimsResolver.apply(claims);
		}
		return null;
	}
	
	private Claims getAllClaimsFromToken(String token) {
		
		if(token.toLowerCase().indexOf("bearer")>=0) {
			token = token.replace("Bearer", "").replace("bearer", "");
		}
		
		byte[] signingkey = SecurityConstants.JWT_SECRET.getBytes();
		Jws<Claims> parsedToken = Jwts.parser().setSigningKey(signingkey)
				//.parseClaimsJws(tokenHeader.replace("Bearer", "").replace("bearer", ""));
				.parseClaimsJws(token);
		
		Claims claims= Jwts.parser().setSigningKey(signingkey).parseClaimsJws(token).getBody();
		return claims;
	}
	
	/* [Spring Security JWT] JWT 토큰 Utillity */
	public Map<String, Object> getAllClaimsArrayFromToken(String token) {
		Map<String, Object> results = new HashMap<String, Object>();
		if(validateToken(token)) {
			if(token.indexOf("Bearer")>=0) {
				token = token.replace("Bearer", "").replace("bearer", "");
			}

			byte[] signingkey = SecurityConstants.JWT_SECRET.getBytes();
			Jws<Claims> parsedToken = Jwts.parser().setSigningKey(signingkey).parseClaimsJws(token);

			Claims claims = parsedToken.getBody();


			results.put("userId", (String) claims.get("uid"));
			results.put("loginId", (String) claims.get("lid"));
			results.put("user_nm", (String) claims.get("unm"));
			results.put("role_id", (List<String>) claims.get("rol"));
			results.put("devc_id", (String) claims.get("did"));
		}
		return results;
	}

	public User getAllClaimsArrayFromTokenToUser(String token) {
		User user = new User();
		if(validateToken(token)) {
			if(token.indexOf("Bearer")>=0) {
				token = token.replace("Bearer", "").replace("bearer", "");
			}

			byte[] signingkey = SecurityConstants.JWT_SECRET.getBytes();
			Jws<Claims> parsedToken = Jwts.parser().setSigningKey(signingkey).parseClaimsJws(token);

			Claims claims = parsedToken.getBody();

			user.setUsername((String) claims.get("lid"));	//authentication 객체에 전달되기위해 login_id  로그인시 아이디를 사용
			user.setLogin_id((String) claims.get("lid"));
			user.setUser_id((String) claims.get("uid"));		//사번 코드는 인증 부분에서 사용할 가능성이 있어 같이 넘겨줌
			user.setUsername((String) claims.get("unm"));
			user.setAuthorities((List<Role>)claims.get("rol"));

		}
		return user;
	}

	public Boolean isTokenExpired(String token) {
		Boolean validateToken = validateToken(token);
		
		if(validateToken) {
			Date expiration = getExpirationDateFromToken(token);
			
			int check = expiration.compareTo(nowDate);
			
			if(0==check) {
				return false;
			}else if(1==check) {
				return true;
			}else if(-1==check) {
				return false;
			}else {
				return false;
			}
		}
		
		return validateToken;
	}
	
	/*
	 * 토큰생성
	 * */
	public String generateToken(Map<String, Object> claims, String emp_cd, long JWT_TOKEN_VALIDITY) {
		return doGenerateToken(claims, emp_cd, JWT_TOKEN_VALIDITY);		
	}
	
	
	private String doGenerateToken(Map<String, Object> claims, String subject, long JWT_TOKEN_VALIDITY) {
		byte[] signingkey = SecurityConstants.JWT_SECRET.getBytes();	//boot 환경의 spring-security 적용 key
		Map<String, Object> jwtHeader = new HashMap<String, Object>();
		jwtHeader.put("typ", "JWT");
		jwtHeader.put("alg", "HS512");
		
		return Jwts.builder().signWith(Keys.hmacShaKeyFor(signingkey), SignatureAlgorithm.HS512)				
				.setHeader(jwtHeader)
				.setClaims(claims)
				.setSubject(subject) 
				.setIssuedAt(nowDate)
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))				
				.compact();
	}
	
	public Boolean validateToken(String token) {

		try{
			if (token != null){
				getAllClaimsFromToken(token);
				return true;
			} else {
				return false;
			}
		} catch (SignatureException ex) {
            log.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }

    	return false;
	}
		
	//Request에서 ACCESS 토큰 가져올때 사용
	public String resolveAccessToken(HttpServletRequest request) {
        return request.getHeader("Authorization");
    }
	
	//Request에서 Refresh 토큰 가져올때 사용
	public String resolveRefreshToken(HttpServletRequest request) {
        return request.getHeader("Authorization_Refresh");
    }
}