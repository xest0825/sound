package io.plasma.sound.login;

import io.plasma.sound.base.BaseDAO;
import io.plasma.sound.logs.LoginHistVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Repository(value = "LoginDAO")
public class LoginDAO extends BaseDAO {

	/**
	 * @Description  : 로그인 정보 조회(사용자계정관리)
	 * @author       : lakhyun.kim
	 * @since        : 2018. 06. 04
	 * @param        : LoginVO
	 * @return       : List<Map<String, String>>
	 */
	public List<HashMap<String, Object>> getLoginInfoList(LoginVO loginVO){
		return getSqlSession().selectList(getLoginMapper() + "getLoginInfoList", loginVO);
	}

	/**
	 * @Description  : 로그인 정보 저장
	 * @author       : lakhyun.kim
	 * @since        : 2018. 06. 04
	 * @return       : void
	 */
	public int insertLoginInfo(LoginVO loginVO){
		return getSqlSession().insert(getLoginMapper() + "insertLoginInfo", loginVO);
	}

	/**
	 * @Description  : 로그인 정보 수정
	 * @author       : lakhyun.kim
	 * @since        : 2018. 06. 04
	 * @return       : void
	 */
	public int updateLoginInfo(LoginVO loginVO){
		return getSqlSession().update(getLoginMapper() + "updateLoginInfo", loginVO);
	}

	/**
	 * 로그인 정보 입력 전 삭제
	 * @param loginVO
	 * @return
	 */
	public int deleteLoginInfo(LoginVO loginVO) {
		return getSqlSession().delete(getLoginMapper() + "deleteLoginInfo", loginVO);
	}

	/**
	 * @Description  : 사용자계정관리 엑셀다운로드
	 * @author       : lakhyun.kim
	 * @since        : 2019. 03. 05
	 * @param        : LoginVO
	 * @return       : excelHandler2
	 */
	//public void selectLoginListExcel(LoginVO loginVO, excelHandler2 eh){
	//	getSqlSession().select(getLoginMapper() + "selectLoginList", loginVO, eh);
	//}

	/**
	 * @Description  : 로그인 이력 저장
	 * @author       : lakhyun.kim
	 * @since        : 2019. 04. 16
	 * @param        : LoginVO
	 * @return       : int
	 */
	public int insertLoginHist(LoginHistVO loginVO) {
		return getSqlSession().insert(getLoginMapper() + "insertLoginHist", loginVO);
	}
	


}
