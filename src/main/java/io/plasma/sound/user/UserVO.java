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

    private String user_id; /* varchar(40) 사용자ID */
    private String user_nm; /* varchar(100) 사용자명 */
    private String email;   /* varchar(300) 이메일 */
    private String mob_no;  /* varchar(300) 휴대폰번호 */
    private String in_id;   /* varchar(40) 입력자 ID */
    private String in_dtm;  /* datetime    입력일시 */
    private String mod_id;  /* varchar(40) 수정자 ID */
    private String mod_dtm; /* datetime    수정일시 */
}
