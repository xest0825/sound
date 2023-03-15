/**
 * 
 */

package io.plasma.sound.filter;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;

/**
* @Project : robot_admin
* @FileName : GlobalFilter.java
* @Date : 2022. 12. 8.
* @author : choiys
* @description :  (1) Filter 등록
*
* Revision History
* Author             Date       Description
* ------------------ ---------- -----------------------
* choiys		 2022. 12. 8.
*
*/

@Slf4j
@WebFilter(urlPatterns = "/*")
public class GlobalFilter implements Filter{
	@Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void destroy() {

    }
    
    /*
     * [Spring Security JWT] Global Filter
     * 
     * 
     * */
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        //필터에서는 request , response 객체를 변경할 수 있다.

        //전 처리
        ContentCachingRequestWrapper httpServletRequest = new ContentCachingRequestWrapper((HttpServletRequest)request);
        ContentCachingResponseWrapper httpServletResponse = new ContentCachingResponseWrapper((HttpServletResponse)response);

        //req
        String url = httpServletRequest.getRequestURI();
        String method = httpServletRequest.getMethod();
        if (!url.contains("resources/") && !url.contains("META-INF/") && !url.contains("/index")
        		&& !url.contains("/asstes") && !url.contains("/font") && !url.contains("/js/") && !url.contains("/css/")
        		&& !url.contains("/img/") && !url.contains("/images/") && !url.contains("/lib/")
        		&& !url.contains("/swagger-ui/") && !url.contains("/swagger-resources/") && !url.contains("/v2/")
        		&& !url.contains("/pdfjs/")
        		&& !url.contains("favicon")
        		&& !url.contains("/api/")
                && !url.contains("/pub")
                && !url.contains("/sub/")
        		) {
            String reqContent = new String(httpServletRequest.getContentAsByteArray());
            httpServletRequest.setAttribute("reqbd", reqContent);
            //log.info("");
            //log.info(">>>>> ==================================");
            //log.info("G.F Before doFilter request: {} {}, req_body: {}", "[" + method + "]", url, reqContent);
            //httpServletRequest.setAttribute("reqbd", reqContent);
        	
        }

        chain.doFilter(httpServletRequest,httpServletResponse);

        //후 처리

        HashMap<String, String> map = new HashMap<String, String>(); // 로깅용 map
        if (!url.contains("resources/") && !url.contains("META-INF/") && !url.contains("/index")
        		&& !url.contains("/asstes") && !url.contains("/font") && !url.contains("/js/") && !url.contains("/css/")
        		&& !url.contains("/img/") && !url.contains("/images/") && !url.contains("/lib/")
        		&& !url.contains("/swagger-ui/") && !url.contains("/swagger-resources/") && !url.contains("/v2/")
        		&& !url.contains("/pdfjs/")
        		&& !url.contains("favicon")
                && !url.contains("/pub")
                && !url.contains("/sub/")
        ) {
            String reqContent = new String(httpServletRequest.getContentAsByteArray());
            //log.info("G.F After doFilter request: {} {}, req_body: {}", "[" + method + "]", url, reqContent);
	        httpServletRequest.setAttribute("reqbd", reqContent);
	        //log.info("<<<<< ==================================");
	        //log.info("m(_.._)m");
        }
        //resp
        int httpStatus = httpServletResponse.getStatus();
        String respContent = new String(httpServletResponse.getContentAsByteArray());
        // log.info("response status:{} , responseBody:{}",httpStatus,respContent);
		httpServletResponse.copyBodyToResponse();

    }
}
