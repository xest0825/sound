package io.plasma.sound.signin;

import io.plasma.sound.user.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Slf4j
@Repository
public class SignInDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    private static final String SQL_PREFIX = "User.";

    public List<HashMap<String, Object>> getLoginUserList(LoginVO vo) {
        return sqlSession.selectOne(SQL_PREFIX + "getLoginUserList", vo);
    }

    public HashMap<String, Object> getLoginUser(LoginVO vo) {
        List<HashMap<String, Object>> list = sqlSession.selectOne(SQL_PREFIX + "getLoginUserList", vo);
        HashMap<String, Object> retMap = new HashMap<String, Object>();
        if (list.size() > 0) {
            retMap = list.get(0);
        }
        return retMap;
    }

    public int insertLoginUser(LoginVO vo) {
        return sqlSession.insert(SQL_PREFIX + "insertLoginUser", vo);
    }

    public int updateLoginUser(LoginVO vo) {
        return sqlSession.update(SQL_PREFIX + "updateLoginUser", vo);
    }

    public int deleteLoginUser(LoginVO vo) {
        return sqlSession.delete(SQL_PREFIX + "deleteLoginUser", vo);
    }
}
