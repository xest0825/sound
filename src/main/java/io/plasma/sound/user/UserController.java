package io.plasma.sound.user;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/users")
    public ResponseEntity<List<HashMap<String, Object>>> getUsers(UserVO model) {
        log.info("[GET] /users");
        List<HashMap<String, Object>> list = service.getUserList(model);
        ResponseEntity<List<HashMap<String, Object>>> ret = new ResponseEntity<>(list, HttpStatus.OK);
        return ret;
    };

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
}
