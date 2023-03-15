/**
 * 
 */

package io.plasma.sound.security.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

/**
* @Project : robot_admin
* @FileName : User.java
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
@Getter
@Setter
@ToString
public class User {

	private String username;
	private String password;
	
	private String user_id;
	private String user_nm;
	
	private String login_id;
	private String login_pw;
	private String smp_pw;
	
	private String mb_id;
	
	private String cp_no;         /* VARCHAR(30)     '핸드폰번호' */
	private String is_foreigner;  /* VARCHAR(3)      '외국인 여부 (1 : 외국인, 0 : 내국인)' */
	private String gender;        /* VARCHAR(3)      '성별 (M: 남, F:여)' */
	
	private boolean enabled;
	
	private String reg_id;
	private String mod_id;
	private String reg_dtm;
	private String mod_dtm;
	
	private String login_typ;
	private String devc_id;
	
	private String birth_dt;
	private String email;
	private String user_typ;
	
	private List<Role> authorities;
}
