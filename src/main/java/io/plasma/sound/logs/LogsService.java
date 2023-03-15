package io.plasma.sound.logs;

import io.plasma.sound.base.BaseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Slf4j
@Service(value = "LogsService")
public class LogsService extends BaseService {
	
	/**
	 * @desc 에러 로그 저장
	 * @author KIMDONGUK
	 * @since 2019-04-19
	 * @param ErrorLogVO
	 * @return int
	 */
	public int insertErrorLog(ErrorLogVO errorLogVO) {
		int resultInt = 0;
		
		resultInt = getLogsDAO().insertErrorLog(errorLogVO);
		
		return resultInt;
	}

	/**
	 * @desc 액션 로그 저장
	 * @author KIMDONGUK
	 * @since 2019-04-22
	 * @param ActionLogVO
	 * @return int
	 */
	public int insertActionLog(ActionLogVO actionLogVO) {
		int resultInt = 0;
		
		resultInt = getLogsDAO().insertActionLog(actionLogVO);
		
		return resultInt;
	}

	/**
	 * 로그인 기록 리스트 조회
	 * @author KIMDONGUK
	 * @since 2019-04-25
	 * @param LoginHistVO
	 * @return List<Map<String, String>>
	 */
	public List<Map<String, String>> getLoginHistList(LoginHistVO loginHistVO) {
		return getLogsDAO().selectLoginHistList(loginHistVO);
	}

	/**
	 * 액션 로그 리스트 조회
	 * @author KIMDONGUK
	 * @since 2019-04-25
	 * @param LoginHistVO
	 * @return List<Map<String, String>>
	 */
	public List<Map<String, String>> getActionLogList(ActionLogVO actionLogVO) {
		return getLogsDAO().selectActionLogList(actionLogVO);
	}

	/**
	 * 에러 로그 리스트 조회
	 * @author KIMDONGUK
	 * @since 2019-04-25
	 * @param LoginHistVO
	 * @return List<Map<String, String>>
	 */
	public List<Map<String, String>> getErrorLogList(ErrorLogVO errorLogVO) {
		return getLogsDAO().selectErrorLogList(errorLogVO);
	}

}
