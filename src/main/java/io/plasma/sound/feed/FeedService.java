package io.plasma.sound.feed;

import io.plasma.sound.user.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Slf4j
@Service
public class FeedService {

    @Autowired
    private FeedDAO dao;

    public List<HashMap<String, Object>> getFeedList(FeedVO vo) {
        return dao.getFeedList(vo);
    }

    public HashMap<String, Object> getFeed(FeedVO vo) {
        return dao.getFeed(vo);
    }

    public int insertFeed(FeedVO vo) {
        return dao.insertFeed(vo);
    }

    public int updateFeed(FeedVO vo) {
        return dao.updateFeed(vo);
    }

    public int deleteFeed(FeedVO vo) {
        return dao.deleteFeed(vo);
    }
}
