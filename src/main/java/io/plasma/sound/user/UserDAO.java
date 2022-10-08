package io.plasma.sound.user;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public class UserDAO {

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
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


}
