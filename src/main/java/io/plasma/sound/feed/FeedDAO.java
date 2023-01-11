package io.plasma.sound.feed;

import io.plasma.sound.user.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Slf4j
@Repository
public class FeedDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    private static final String SQL_PREFIX = "Feed.";

    public List<HashMap<String, Object>> getFeedList(FeedVO vo) {
        return sqlSession.selectList(SQL_PREFIX + "getFeedList", vo);
    }

    public HashMap<String, Object> getFeed(FeedVO vo) {
        List<HashMap<String, Object>> resList = sqlSession.selectList(SQL_PREFIX + "getFeedList", vo);
        HashMap<String, Object> retMap = new HashMap<String, Object>();
        if (resList.size() > 0) {
            retMap = resList.get(0);
        }
        return retMap;
    }

    public int insertFeed(FeedVO vo) {
        return sqlSession.insert(SQL_PREFIX + "insertFeed", vo);
    }

    public int updateFeed(FeedVO vo) {
        return sqlSession.update(SQL_PREFIX + "updateFeed", vo);
    }

    public int deleteFeed(FeedVO vo) {
        return sqlSession.delete(SQL_PREFIX + "deleteFeed", vo);
    }
}
