package io.plasma.sound.logs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActionLogVO {
	private String action_ctg;				/* 행위 유형 varchar(40) */
	private String action_url;				/* 접근 URL varchar(200)*/
	private String params;		/* URL에 전달된 파라미터 값 varchar(1000)*/
	private String user_ip;				/* 행위자 IP varchar(100)*/
	private String system_type;				/* 시스템 구분 varchar(20)*/
	private String action_dtm;
}
