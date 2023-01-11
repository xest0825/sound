package io.plasma.sound.user;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class UserDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    private static final String SQL_PREFIX = "User.";

    public List<HashMap<String, Object>> getUserList(UserVO vo) {
        return sqlSession.selectList(SQL_PREFIX + "getUserList", vo);
    }

    public int insertUser(UserVO vo) {
        return sqlSession.insert(SQL_PREFIX + "insertUser", vo);
    }

    public int updateUser(UserVO vo) {
        return sqlSession.update(SQL_PREFIX + "updateUser", vo);
    }

    public int deleteUser(UserVO vo) {
        return sqlSession.delete(SQL_PREFIX + "deleteUser", vo);
    }


    public List<HashMap<String, Object>> getUserConfigList(UserVO vo) {
        return sqlSession.selectList(SQL_PREFIX + "getUserConfigList", vo);
    }

    public int insertUserConfig(UserVO vo) {
        return sqlSession.insert(SQL_PREFIX + "insertUserConfig", vo);
    }

    public int updateUserConfig(UserVO vo) {
        return sqlSession.update(SQL_PREFIX + "updateUserConfig", vo);
    }

    public int deleteUserConfig(UserVO vo) {
        return sqlSession.delete(SQL_PREFIX + "deleteUserConfig", vo);
    }


}
