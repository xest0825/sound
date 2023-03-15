package io.plasma.sound.logs;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginHistVO {
	private String login_ip;		/* 로그인IP varchar(40)*/
	private String login_dtm;		/* 로그인일시 datetime*/
}
