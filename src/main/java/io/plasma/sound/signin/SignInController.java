package io.plasma.sound.signin;

import com.github.f4b6a3.ulid.Ulid;
import com.github.f4b6a3.ulid.UlidCreator;
import io.plasma.sound.user.UserVO;
import io.plasma.sound.util.CommonUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Slf4j
@RestController
public class SignInController {

    @Autowired
    private SignInService service;

    @PostMapping("/sign-in/check-email-dup")
    public ResponseEntity<HashMap<String, Object>> checkEmailDuplication(@RequestBody SignInVO vo) {
        log.info("[POST] /sigin-in/check-email-dup");
        UserVO uvo = new UserVO();
        uvo.setEmail(vo.getEmail());
        HashMap<String, Object> retMap = service.checkEmailDuplication(uvo);
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(retMap, HttpStatus.OK);
        return ret;
    };

    @PostMapping("/sign-in/check-sign-in-info")
    public ResponseEntity<HashMap<String, Object>> checkSignInInfo(@RequestBody SignInVO vo) {
        log.info("[POST] /sigin-in/check-sigh-in");
        String email = vo.getEmail();
        String password = vo.getPassword();
        LoginVO lvo = new LoginVO();
        lvo.setLogin_id(email);
        lvo.setLogin_pw(password);
        HashMap<String, Object> retMap = service.checkSignInInfo(lvo);
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(retMap, HttpStatus.OK);
        return ret;
    }

    @PostMapping("/sign-in/sign-in-info")
    public ResponseEntity<HashMap<String, Object>> insertSignInInfo(@RequestBody SignInVO vo) {
        log.info("[POST] /sigin-in/sigh-in-info");
        HashMap<String, Object> retMap = new HashMap<>();
        String email = vo.getEmail();
        String password = vo.getPassword();
        LoginVO lvo = new LoginVO();
        Ulid ulid = UlidCreator.getUlid();
        lvo.setUser_id(String.valueOf(ulid));
        lvo.setLogin_id(email);
        lvo.setLogin_pw(CommonUtil.encrypt("plasma!@#$", password));
        int resInt = service.insertLoginUser(lvo);
        if (resInt > 0) {
            retMap.put("result", "OK");
        } else {
            retMap.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(retMap, HttpStatus.OK);
        return ret;
    }

    @PutMapping("/sign-in/sign-in-info")
    public ResponseEntity<HashMap<String, Object>> updateSignInInfo(@RequestBody SignInVO vo) {
        log.info("[PUT] /sigin-in/sigh-in-info");
        HashMap<String, Object> retMap = new HashMap<>();
        String email = vo.getEmail();
        String password = vo.getPassword();
        LoginVO lvo = new LoginVO();
        lvo.setLogin_id(email);
        lvo.setLogin_pw(CommonUtil.encrypt("plasma!@#$", password));
        int resInt = service.updateLoginUser(lvo);
        if (resInt > 0) {
            retMap.put("result", "OK");
        } else {
            retMap.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(retMap, HttpStatus.OK);
        return ret;
    }

    @DeleteMapping("/sign-in/sign-in-info")
    public ResponseEntity<HashMap<String, Object>> deleteSignInInfo(@RequestBody SignInVO vo) {
        log.info("[DELETE] /sigin-in/sigh-in-info");
        HashMap<String, Object> retMap = new HashMap<>();
        String email = vo.getEmail();
        String password = vo.getPassword();
        LoginVO lvo = new LoginVO();
        lvo.setLogin_id(email);
        lvo.setLogin_pw(CommonUtil.encrypt("plasma!@#$", password));
        int resInt = service.deleteLoginUser(lvo);
        if (resInt > 0) {
            retMap.put("result", "OK");
        } else {
            retMap.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(retMap, HttpStatus.OK);
        return ret;
    }
}
