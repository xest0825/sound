package io.plasma.sound.user;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * 사용자 관리
 */
@Slf4j
@RestController
public class UserController {

    @Autowired
    private UserService service;

    /**
     * 사용자 목록 조회
     * @param vo
     * @return
     */
    @GetMapping("/users")
    public ResponseEntity<List<HashMap<String, Object>>> getUsers(UserVO vo) {
        log.info("[GET] /users");
        List<HashMap<String, Object>> list = service.getUserList(vo);
        ResponseEntity<List<HashMap<String, Object>>> ret = new ResponseEntity<>(list, HttpStatus.OK);
        return ret;
    };

    /**
     * 사용자 입력
     * @param model
     * @return
     */
    @PostMapping("/users")
    public ResponseEntity<HashMap<String, Object>> insertUser(@RequestBody UserVO model) {
        log.info("[POST] /users");

        HashMap map = new HashMap<String, Object>();
        if (service.insertUser(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }

        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    /**
     * 사용자 수정
     * @param model
     * @return
     */
    @PutMapping("/users")
    public ResponseEntity<HashMap<String, Object>> updateUser(@RequestBody UserVO model) {

        log.info("[UPDATE] /users");

        HashMap map = new HashMap<String, Object>();
        if (service.updateUser(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    /**
     * 사용자 삭제
     * @param model
     * @return
     */
    @DeleteMapping("/users")
    public ResponseEntity<HashMap<String, Object>> deleteUser(@RequestBody UserVO model) {
        log.info("[DELETE] /users");

        HashMap map = new HashMap<String, Object>();
        if (service.deleteUser(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    /**
     * 사용자 설정 목록 조회
     * @param model
     * @return
     */
    @GetMapping("/user-config")
    public ResponseEntity<List<HashMap<String, Object>>> getUserConfigList(UserVO model) {
        log.info("[GET] /user-config");
        List<HashMap<String, Object>> list = service.getUserConfigList(model);
        ResponseEntity<List<HashMap<String, Object>>> ret = new ResponseEntity<>(list, HttpStatus.OK);
        return ret;
    };

    /**
     * 사용자 설정 입력
     * @param model
     * @return
     */
    @PostMapping("/user-config")
    public ResponseEntity<HashMap<String, Object>> insertUserConfig(@RequestBody UserVO model) {
        log.info("[POST] /user-config");

        HashMap map = new HashMap<String, Object>();
        if (service.insertUserConfig(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }

        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    /**
     * 사용자 설정 수정
     * @param model
     * @return
     */
    @PutMapping("/user-config")
    public ResponseEntity<HashMap<String, Object>> updateUserConfig(@RequestBody UserVO model) {

        log.info("[UPDATE] /user-config");

        HashMap map = new HashMap<String, Object>();
        if (service.updateUserConfig(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

    /**
     * 사용자 설정 삭제
     * @param model
     * @return
     */
    @DeleteMapping("/user-config")
    public ResponseEntity<HashMap<String, Object>> deleteUserConfig(@RequestBody UserVO model) {
        log.info("[DELETE] /user-config");

        HashMap map = new HashMap<String, Object>();
        if (service.deleteUserConfig(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };
}
