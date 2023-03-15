package io.plasma.sound.base;

import io.plasma.sound.code.CodeDAO;
import io.plasma.sound.login.LoginDAO;
import io.plasma.sound.logs.LogsDAO;
import io.plasma.sound.security.model.User;
import io.plasma.sound.user.UserDAO;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

@Getter
@Setter
public class BaseService {

	private User UserSession;

	@Autowired
	private LogsDAO logsDAO;

	@Autowired
	private UserDAO userDAO;

	@Autowired
	private CodeDAO codeDAO;

//	@Autowired
//	private FileDAO fileDAO;

	@Autowired
	private LoginDAO loginDAO;
//
//	@Autowired
//	private UserRoleDAO userRoleDAO;
//
//	@Autowired
//	private RoleDAO roleDAO;



}
