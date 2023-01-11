package io.plasma.sound.playlist;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Slf4j
@Service
public class PlayListService {

    @Autowired
    private PlayListDAO dao;

    public List<HashMap<String, Object>> getPlayLists(PlayListVO vo) {
        return dao.getPlayLists(vo);
    }

    public int insertPlayList(PlayListVO vo) {
        return dao.insertPlayList(vo);
    }

    public int updatePlayList(PlayListVO vo) {
        return dao.updatePlayList(vo);
    }

    public int deletePlayList(PlayListVO vo) {
        return dao.deletePlayList(vo);
    }

    public List<HashMap<String, Object>> getTrackList(TrackVO vo) {
        return dao.getTrackList(vo);
    }

    public int insertTrack(TrackVO vo) {
        return dao.insertTrack(vo);
    }

    public int updateTrack(TrackVO vo) {
        return dao.updateTrack(vo);
    }

    public int deleteTrack(TrackVO vo) {
        return dao.deleteTrack(vo);
    }
}
