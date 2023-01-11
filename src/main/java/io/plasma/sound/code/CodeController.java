package io.plasma.sound.code;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
public class CodeController {

    @Autowired
    private CodeService service;

    /**
     * 코드 목록 조회
     * @param vo
     * @return
     */
    @GetMapping("/codes")
    public ResponseEntity<List<HashMap<String, Object>>> getCodeList(CodeVO vo) {
        log.info("[GET] /codes");
        List<HashMap<String, Object>> list = service.getCodeList(vo);
        ResponseEntity<List<HashMap<String, Object>>> ret = new ResponseEntity<>(list, HttpStatus.OK);
        return ret;
    };

    /**
     * 코드 입력
     * @param vo
     * @return
     */
    @PostMapping("/codes")
    public ResponseEntity<HashMap<String, Object>> insertCode(@RequestBody CodeVO vo) {
        log.info("[POST] /codes");

        HashMap map = new HashMap<String, Object>();
        if (service.insertCode(vo) > 0) {
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
    @PutMapping("/codes")
    public ResponseEntity<HashMap<String, Object>> updateCode(@RequestBody CodeVO model) {

        log.info("[UPDATE] /codes");

        HashMap map = new HashMap<String, Object>();
        if (service.updateCode(model) > 0) {
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
    @DeleteMapping("/codes")
    public ResponseEntity<HashMap<String, Object>> deleteCode(@RequestBody CodeVO model) {
        log.info("[DELETE] /codes");

        HashMap map = new HashMap<String, Object>();
        if (service.deleteCode(model) > 0) {
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
    @GetMapping("/group-codes")
    public ResponseEntity<List<HashMap<String, Object>>> getGroupCodeList(CodeVO vo) {
        log.info("[GET] /group-codes");
        List<HashMap<String, Object>> list = service.getGroupCodeList(vo);
        ResponseEntity<List<HashMap<String, Object>>> ret = new ResponseEntity<>(list, HttpStatus.OK);
        return ret;
    };

    /**
     * 코드 입력
     * @param vo
     * @return
     */
    @PostMapping("/group-codes")
    public ResponseEntity<HashMap<String, Object>> insertGroupCode(@RequestBody CodeVO vo) {
        log.info("[POST] /group-codes");

        HashMap map = new HashMap<String, Object>();
        if (service.insertGroupCode(vo) > 0) {
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
    @PutMapping("/group-codes")
    public ResponseEntity<HashMap<String, Object>> updateGroupCode(@RequestBody CodeVO model) {

        log.info("[UPDATE] /group-codes");

        HashMap map = new HashMap<String, Object>();
        if (service.updateGroupCode(model) > 0) {
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
    @DeleteMapping("/group-codes")
    public ResponseEntity<HashMap<String, Object>> deleteGroupCode(@RequestBody CodeVO model) {
        log.info("[DELETE] /group-codes");

        HashMap map = new HashMap<String, Object>();
        if (service.deleteGroupCode(model) > 0) {
            map.put("result", "OK");
        } else {
            map.put("result", "FAIL");
        }
        ResponseEntity<HashMap<String, Object>> ret = new ResponseEntity<>(map, HttpStatus.OK);
        return ret;
    };

}
