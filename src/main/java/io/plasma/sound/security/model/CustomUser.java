/**
 * 
 */

package io.plasma.sound.security.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.stream.Collectors;

/**
* @Project : robot_admin
* @FileName : CustomUser.java
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
public class CustomUser extends org.springframework.security.core.userdetails.User{
	
	private static final long serialVersionUID = 1L;
	
	private User user;
	
	public CustomUser(User user, Collection<? extends GrantedAuthority> authorities) {
		super(user.getLogin_id(), user.getLogin_pw(), authorities);
		this.user = user;
	}
	public CustomUser(User user) {
		super(user.getLogin_id(), user.getLogin_pw(), user.getAuthorities().stream().map(auth -> new SimpleGrantedAuthority(auth.getName())).collect(Collectors.toList()));
		this.user = user;
	}
	
	public User getUser() {
		return user;
	}
	
	public String getUser_id() {
		return user.getUser_id();
	}
	
	public String getUsername() {
		return user.getUsername();
	}
	
	public String getPassword() {
		return user.getPassword();
	}
	
	public String getLogin_id() {
		return user.getLogin_id();
	}
	
	public String getLogin_pw() {
		return user.getLogin_pw();
	}
	
	public String getUser_nm() {
		return user.getUser_nm();
	}
	
	public String getMb_id() {
		return user.getMb_id();
	}
	
	public String getLogin_typ() {
		return user.getLogin_typ();
	}
	
	public String getSmp_pw() {
		return user.getSmp_pw();
	}
	
	public String getDevc_id() {
		return user.getDevc_id();
	}
	
	public Collection<? extends GrantedAuthority> getAuthorites(){
		return user.getAuthorities().stream().map(auth -> new SimpleGrantedAuthority(auth.getName())).collect(Collectors.toList());
	}	
}
