package io.plasma.sound.feed;

import io.plasma.sound.user.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
public class FeedController {

    @Autowired
    private FeedService service;

    @GetMapping("/feed/feeds")
    public ResponseEntity<List<HashMap<String, Object>>> getFeeds(FeedVO vo) {
        log.info("[GET] /feeds");
        List<HashMap<String, Object>> list = service.getFeedList(vo);
        ResponseEntity<List<HashMap<String, Object>>> ret = new ResponseEntity<>(list, HttpStatus.OK);
        return ret;
    };

    @PostMapping("/feed/feeds")
    public ResponseEntity<HashMap<String, Object>> insertFeed(@RequestBody FeedVO vo) {
        log.info("[POST] /users");

        HashMap map = new HashMap<String, Object>();
        if (service.insertFeed(vo) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }

        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    @PutMapping("/feed/feeds")
    public ResponseEntity<HashMap<String, Object>> updateFeed(@RequestBody FeedVO vo) {

        log.info("[UPDATE] /feed/fedds");

        HashMap map = new HashMap<String, Object>();
        if (service.updateFeed(vo) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    @DeleteMapping("/feed/feeds")
    public ResponseEntity<HashMap<String, Object>> deleteFeed(@RequestBody FeedVO vo) {
        log.info("[DELETE] /feed/feeds");

        HashMap map = new HashMap<String, Object>();
        if (service.deleteFeed(vo) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

}
