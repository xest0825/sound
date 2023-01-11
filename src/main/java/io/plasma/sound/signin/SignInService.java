package io.plasma.sound.signin;

import io.plasma.sound.user.UserDAO;
import io.plasma.sound.user.UserVO;
import io.plasma.sound.util.CommonUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Slf4j
@Service
public class SignInService {

    @Autowired
    private SignInDAO dao;

    @Autowired
    private UserDAO userDao;

    public HashMap<String, Object> checkEmailDuplication(UserVO vo) {
        HashMap<String, Object> retMap = new HashMap<String, Object>();
        List<HashMap<String, Object>> list = userDao.getUserList(vo);
        retMap.put("result", list.size());
        return retMap;
    }

    public HashMap<String, Object> checkSignInInfo(LoginVO vo) {
        HashMap<String, Object> retMap = new HashMap<String, Object>();
        HashMap<String, Object> userMap = new HashMap<String, Object>();
        userMap = dao.getLoginUser(vo);
        String resultstr = "";
        if (CommonUtil.isNotEmpty(userMap.get("Login_pw"))) {
            if (vo.getLogin_pw().equals(CommonUtil.decrypt("plasma!@#$", userMap.get("login_pw").toString()))) {
                resultstr = "1";
            } else {
                resultstr = "0";
            }
        } else {
            resultstr = "NONE";
        }

        retMap.put("result", resultstr);
        return retMap;
    }

    public int insertLoginUser(LoginVO vo) {
        return dao.insertLoginUser(vo);
    }

    public int updateLoginUser(LoginVO vo) {
        return dao.updateLoginUser(vo);
    }

    public int deleteLoginUser(LoginVO vo) {
        return dao.deleteLoginUser(vo);
    }

    public List<HashMap<String, Object>> getLoginLogList(LoginVO vo) {
        return dao.getLoginLogList(vo);
    }

    public int insertLoginLog(LoginVO vo) {
        return dao.insertLoginLog(vo);
    }

}
