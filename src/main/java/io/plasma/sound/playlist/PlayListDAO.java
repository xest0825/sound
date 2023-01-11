package io.plasma.sound.playlist;

import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Slf4j
@Repository
public class PlayListDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    private static final String SQL_PREFIX = "PlayList.";

    public List<HashMap<String, Object>> getPlayLists(PlayListVO vo) {
        return sqlSession.selectList(SQL_PREFIX + "getPlayLists", vo);
    }

    public int insertPlayList(PlayListVO vo) {
        return sqlSession.insert(SQL_PREFIX + "insertPlayList", vo);
    }

    public int updatePlayList(PlayListVO vo) {
        return sqlSession.update(SQL_PREFIX + "updatePlayList", vo);
    }

    public int deletePlayList(PlayListVO vo) {
        return sqlSession.delete(SQL_PREFIX + "deletePlayList", vo);
    }

    public List<HashMap<String, Object>> getTrackList(TrackVO vo) {
        return sqlSession.selectList(SQL_PREFIX + "getTrackList", vo);
    }

    public int insertTrack(TrackVO vo) {
        return sqlSession.insert(SQL_PREFIX + "insertTrack", vo);
    }

    public int updateTrack(TrackVO vo) {
        return sqlSession.update(SQL_PREFIX + "updateTrack", vo);
    }

    public int deleteTrack(TrackVO vo) {
        return sqlSession.delete(SQL_PREFIX + "deleteTrack", vo);
    }
}
