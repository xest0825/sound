package io.plasma.sound.login;

import io.plasma.sound.base.BaseService;
import io.plasma.sound.logs.LoginHistVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.*;

@Slf4j
@Service("LoginService")
public class LoginService extends BaseService {

	/**
	 * @Description  : 로그인 정보 조회(사용자계정관리)
	 * @author       : lakhyun.kim
	 * @since        : 2019. 03. 05
	 * @param        : LoginVO
	 * @return       : List<Map<String, String>>
	 */
	public List<HashMap<String, Object>> getLoginList(LoginVO loginVO){
		return getLoginDAO().getLoginInfoList(loginVO);
	}



	/**
	 * @Description  : 로그인 정보 수정(비밀번호 초기화, 계정잠금/해제, 2factor인증/해제)
	 * @author       : lakhyun.kim
	 * @since        : 2019. 03. 05
	 * @param        : ArrayList<LoginVO>
	 * @return       : void
	 */
	public int updateLogin(LoginVO vo){
		return getLoginDAO().updateLoginInfo(vo);
	}

	/**
	 * @Description  : 로그인 이력 저장
	 * @author       : lakhyun.kim
	 * @since        : 2019. 04. 16
	 * @param        : LoginVO
	 * @return       : int
	 */
	public int insertLoginHist(LoginHistVO loginVO){
		return getLoginDAO().insertLoginHist(loginVO);
	}


}
