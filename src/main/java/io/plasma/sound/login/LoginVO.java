package io.plasma.sound.login;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LoginVO {

	private String login_id;
	private String login_pw;
	private String user_nm;
	private String pwd_intzn_type;//비밀번호초기화여부
	private String acct_lock_type;//계정잠김여부
	private String acnt_lock_yn;//계정잠김여부(crpm)
	private String acnt_expr_dt; //계정만료일자(crpm)
	private String login_autr_type;//2tactor 인증여부
	private String user_pwd;//사용자 비밀번호
	private String smp_pw; // 간편 비밀번호(crpm)
	private String accnt_sts; //계정상태
	private String trns_user_pwd;//임시 비밀번호
	private String pwd_err_nbtm;//비밀번호 오류횟수
	private String pwd_chg_dt;//비밀번호 변경일자
	
	private String login_ip;     /* 로그인IP   VARCHAR(40)  */
    private String login_dtm;    /* 로그인일시 DATETIME     */

	private int pw_err_cnt;			/* 비밀번호 오류횟수 int (crpm)*/
	private String login_autr_type_nm;
	private String ent_ymd;
	private String end_ymd;
	private String file_name;
	private String extno;
	
	private String easy_pwd;
	private String device_info;
	private String corp_email_pwd;	

	private String hpno;
	private String cp_no;
	private String auth_num;

	private String birth_dt;
	private String sso_key;
	private String newPwd;
	private String pageUri;
	
	private String token_check;	// 로그인 시 토큰 생성 한번만 하기위한 변수
	private String pwd_change_gbn;
	private String pwd_chg_dt_diff;
	
	private String birth;

	
}
