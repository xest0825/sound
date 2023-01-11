package io.plasma.sound.playlist;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
public class PlayListController {

    @Autowired
    private PlayListService service;

    /**
     * 코드 목록 조회
     * @param vo
     * @return
     */
    @GetMapping("/playlists")
    public ResponseEntity<List<HashMap<String, Object>>> getPlayLists(PlayListVO vo) {
        log.info("[GET] /playlists");
        List<HashMap<String, Object>> list = service.getPlayLists(vo);
        ResponseEntity<List<HashMap<String, Object>>> ret = new ResponseEntity<>(list, HttpStatus.OK);
        return ret;
    };

    /**
     * 코드 입력
     * @param vo
     * @return
     */
    @PostMapping("/playlists")
    public ResponseEntity<HashMap<String, Object>> insertPlayList(@RequestBody PlayListVO vo) {
        log.info("[POST] /playlists");

        HashMap map = new HashMap<String, Object>();
        if (service.insertPlayList(vo) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }

        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    /**
     * 코드 수정
     * @param model
     * @return
     */
    @PutMapping("/playlists")
    public ResponseEntity<HashMap<String, Object>> updatePlayList(@RequestBody PlayListVO model) {

        log.info("[UPDATE] /playlists");

        HashMap map = new HashMap<String, Object>();
        if (service.updatePlayList(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    /**
     * 코드 삭제
     * @param model
     * @return
     */
    @DeleteMapping("/playlists")
    public ResponseEntity<HashMap<String, Object>> deletePlayList(@RequestBody PlayListVO model) {
        log.info("[DELETE] /playlists");

        HashMap map = new HashMap<String, Object>();
        if (service.deletePlayList(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    /**
     * 코드 목록 조회
     * @param vo
     * @return
     */
    @GetMapping("/tracks")
    public ResponseEntity<List<HashMap<String, Object>>> getTrackList(TrackVO vo) {
        log.info("[GET] /tracks");
        List<HashMap<String, Object>> list = service.getTrackList(vo);
        ResponseEntity<List<HashMap<String, Object>>> ret = new ResponseEntity<>(list, HttpStatus.OK);
        return ret;
    };

    /**
     * 코드 입력
     * @param vo
     * @return
     */
    @PostMapping("/tracks")
    public ResponseEntity<HashMap<String, Object>> insertTrack(@RequestBody TrackVO vo) {
        log.info("[POST] /tracks");

        HashMap map = new HashMap<String, Object>();
        if (service.insertTrack(vo) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }

        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    /**
     * 코드 수정
     * @param model
     * @return
     */
    @PutMapping("/tracks")
    public ResponseEntity<HashMap<String, Object>> updateTrack(@RequestBody TrackVO model) {

        log.info("[UPDATE] /tracks");

        HashMap map = new HashMap<String, Object>();
        if (service.updateTrack(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    /**
     * 코드 삭제
     * @param model
     * @return
     */
    @DeleteMapping("/tracks")
    public ResponseEntity<HashMap<String, Object>> deleteTrack(@RequestBody TrackVO model) {
        log.info("[DELETE] /group-codes");

        HashMap map = new HashMap<String, Object>();
        if (service.deleteTrack(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

}
