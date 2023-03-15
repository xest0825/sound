package io.plasma.sound.logs;

import io.plasma.sound.base.BaseDAO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Slf4j
@Repository(value = "LogsDAO")
public class LogsDAO extends BaseDAO {

	/**
	 * @desc 에러 로그 저장
	 * @author KIMDONGUK
	 * @since 2019-04-19
	 * @param ErrorLogVO
	 * @return int
	 */
	public int insertErrorLog(ErrorLogVO errorLogVO) {
		log.debug("LogsDAO.insertAccessLog");
		return getSqlSession().insert(getLogsMapper() + "insertErrorLog", errorLogVO);
	}

	/**
	 * @desc 액션 로그 저장
	 * @author KIMDONGUK
	 * @since 2019-04-22
	 * @param ActionLogVO
	 * @return int
	 */
	public int insertActionLog(ActionLogVO actionLogVO) {
		return getSqlSession().insert(getLogsMapper() + "insertActionLog", actionLogVO);
	}

	/**
	 * 로그인 기록 리스트 조회
	 * @author KIMDONGUK
	 * @since 2019-04-25
	 * @param LoginHistVO
	 * @return List<Map<String, String>>
	 */
	public List<Map<String, String>> selectLoginHistList(LoginHistVO loginHistVO) {
		return getSqlSession().selectList(getLogsMapper() + "selectLoginHistList", loginHistVO);
	}

	/**
	 * 액션 로그 리스트 조회
	 * @author KIMDONGUK
	 * @since 2019-04-25
	 * @param LoginHistVO
	 * @return List<Map<String, String>>
	 */
	public List<Map<String, String>> selectActionLogList(ActionLogVO actionLogVO) {
		return getSqlSession().selectList(getLogsMapper() + "selectActionLogList", actionLogVO);
	}
	
	/**
	 * 에러 로그 리스트 조회
	 * @author KIMDONGUK
	 * @since 2019-04-25
	 * @param LoginHistVO
	 * @return List<Map<String, String>>
	 */
	public List<Map<String, String>> selectErrorLogList(ErrorLogVO errorLogVO) {
		return getSqlSession().selectList(getLogsMapper() + "selectErrorLogList", errorLogVO);
	}	
}
