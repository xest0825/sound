package io.plasma.sound.user;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter
@ToString
public class UserVO {
    private String seq;
    private String cfg_cd;   /* varchar(20) '설정 코드' */
    private String cfg_val;  /* varchar(1000) '설정 값' */
    private String cfg_desc; /* varchar(1000) '설정 설명' */
    private String sort_no;  /* int(11) '정렬순서' */
    private String use_yn;   /* varchar(1) '사용 여부' */
    private String user_id;  /* varchar(40) 사용자ID */
    private String user_nm;  /* varchar(100) 사용자명 */
    private String email;    /* varchar(300) 이메일 */
    private String mob_no;   /* varchar(300) 휴대폰번호 */
    private String in_id;    /* varchar(40) 입력자 ID */
    private String in_dtm;   /* datetime    입력일시 */
    private String mod_id;   /* varchar(40) 수정자 ID */
    private String mod_dtm;  /* datetime    수정일시 */
}
