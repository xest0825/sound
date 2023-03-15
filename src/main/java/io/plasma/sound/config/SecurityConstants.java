/**
 * 
 */

package io.plasma.sound.config;

/**
* @Project : robot_admin
* @FileName : SecurityConstants.java
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
public class SecurityConstants {

	public static final String JWT_SECRET = "genexon2014allrightsreserved@)!$genexon2014allrightsreserved@)!$"; // 64bit
	
	public static final String TOKEN_HEADER = "Authorization";
	
	public static final String TOKEN_PREFIX = "Bearer";
	
	public static final String TOKEN_TYPE = "JWT";
	
	public static final String TOKEN_ISSUER = "restapi-server";
	
	public static final String TOKEN_AUDIENCE = "restapi-app";
	
	public static final String AUTH_LOGIN_URL = "/auth";
	
}
