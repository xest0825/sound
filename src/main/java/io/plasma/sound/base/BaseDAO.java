package io.plasma.sound.base;

import lombok.Getter;
import lombok.Setter;
import org.mybatis.spring.SqlSessionTemplate;

import javax.annotation.Resource;

@Getter
@Setter
public class BaseDAO {

	@Resource(name="sqlSession")
	private SqlSessionTemplate sqlSession;

	private final String userMapper = "User.";
	private final String menuMapper = "Menu.";//menu-mapper.xml
	private final String commonCodeMapper = "commCode.";//commoncode-mapper.xml
	private final String fileMapper = "File.";//file-mapper.xml
	private final String loginMapper = "Login.";//login-mapper.xml
	private final String userRoleMapper = "UserRole.";//userrole-mapper.xml
	private final String roleMapper = "Role.";//role-mapper.xml
	private final String authenticationMapper = "Authentication.";//authentication-mapper.xml
	private final String logsMapper = "logs.";
	private final String apiMapper = "Api.";	//api-mapper.xml
	private final String scheduleMapper = "Schedule.";	//schedule-mapper.xml
	private final String accountMapper = "Account.";	//Account-mapper.xml


}
