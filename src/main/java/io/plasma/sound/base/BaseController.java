package io.plasma.sound.base;


import io.plasma.sound.code.CodeService;
import io.plasma.sound.login.LoginService;
import io.plasma.sound.logs.LogsService;
import io.plasma.sound.user.UserService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;

@Getter
public class BaseController {


	@Autowired
	private LogsService logsService;

	@Autowired
	private UserService userService;

	@Autowired
	private CodeService codeService;

	//@Autowired
	//private FileService fileService;

	@Autowired
	private LoginService loginService;

	//@Autowired
	//private UserRoleService userRoleService;

	//@Autowired
	//private RoleService roleService;

}
