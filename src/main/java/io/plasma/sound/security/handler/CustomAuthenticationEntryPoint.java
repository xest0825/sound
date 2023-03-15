/**
 * 
 */

package io.plasma.sound.security.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.plasma.sound.exception.ApiErrorInfo;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.*;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
* @Project : robot_admin
* @FileName : CustomAuthenticationEntryPoint.java
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
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {
	
	private ObjectMapper objectMapper = new ObjectMapper();

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
		response.setContentType("application/json; charset=UTF-8");

		ApiErrorInfo apiErrorInfo = new ApiErrorInfo();
		if (InsufficientAuthenticationException.class == authException.getClass()) {
			apiErrorInfo.setMessage("Not Logined");
			response.setStatus(HttpStatus.UNAUTHORIZED.value());

			//[Spring Security JWT] 세션만료 로직 개선   - Exception이 발생한 형태에 따라 error 페이지로 진행할지 login 페이지로 이동할지 지정
			if (authException instanceof AuthenticationServiceException) {
				request.setAttribute("loginFailMsg", "존재하지 않는 사용자입니다.");
			} else if(authException instanceof BadCredentialsException) {
				request.setAttribute("loginFailMsg", "아이디 또는 비밀번호가 틀립니다.");

			} else if(authException instanceof LockedException) {
				request.setAttribute("loginFailMsg", "잠긴 계정입니다..");

			} else if(authException instanceof DisabledException) {
				request.setAttribute("loginFailMsg", "비활성화된 계정입니다..");

			} else if(authException instanceof AccountExpiredException) {
				request.setAttribute("loginFailMsg", "만료된 계정입니다..");

			} else if(authException instanceof CredentialsExpiredException) {
				request.setAttribute("loginFailMsg", "비밀번호가 만료되었습니다.");
			} else{
				request.setAttribute("loginFailMsg", "기타");
			}
			//response.sendRedirect("/login.go"); //[Spring Security JWT] bjchoi : 인증/인가 오류 발생 시 로그인페이지로 이동.
			String targetUrl = "/login.go";
			request.setAttribute("SPRING_SECURITY_LAST_EXCEPTION", "세션이 만료되었습니다. 다시 로그인을 진행하여 주십시오.");

			/*
			if(request.getAttribute("RELOAD_ACTION") == "Y"){
				request.setAttribute("RELOAD_ACTION", "");
			}else{
				request.setAttribute("RELOAD_ACTION", "Y");
			}
			*/

			request.getRequestDispatcher(targetUrl).forward(request,response);

			/*PrintWriter out = null;
			String sContents = "";
			response.setContentType("text/html;charset=utf-8");
			response.setHeader("Set-Cookie", "fileDownload=true; path=/");
			out = response.getWriter();
			sContents += "<script type='text/javascript' src='/js/jquery/jquery.min.js'></script>";
			sContents += "<script type='text/javascript' src='/js/common/genexon.js'></script>";
			sContents += "<script type='text/javascript'>";
			sContents += "$(document).ready(function(){";
			sContents += "location.reload();";
			sContents += "})";
			sContents += "</script>";
			//out.println(sContents);
			if(out != null) out.close();*/

		} else {
			apiErrorInfo.setMessage("Bad Request");

		}

		String jsonString = objectMapper.writeValueAsString(apiErrorInfo);
		response.getWriter().write(jsonString);
	}
}
