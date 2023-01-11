package io.plasma.sound.playlist;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlayListVO {

    private String cd;          /* varchar(20) '콩통코드' */
    private String cd_val;      /* varchar(30) '공통 코드값' */
    private String grp_cd;      /* varchar(20) '그룹코드' */
    private String grp_cd_val;  /* varchar(30) '그룹코드값' */
    private String grp_cd_desc; /* varchar(100) '그룹코드 설명' */
    private String use_yn;      /* varchar(1) '사용여부' */
    private String sort_no;     /* int(11) '정렬순서' */

    private String in_id;    /* varchar(40) 입력자 ID */
    private String in_dtm;   /* datetime    입력일시 */
    private String mod_id;   /* varchar(40) 수정자 ID */
    private String mod_dtm;  /* datetime    수정일시 */
}
