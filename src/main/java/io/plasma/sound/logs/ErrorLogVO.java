package io.plasma.sound.logs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorLogVO {
	private String action_type;
	private String err_url;
	private String params;
	private String err_cls;
	private String err_sts;
	private String err_msg;
	private String error_string;
	private String err_trc;
	private String error_ip;
	private String system_gubun;
	
}
