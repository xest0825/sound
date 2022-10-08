package io.plasma.sound.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserDAO dao;

    public List<HashMap<String, Object>> getUserList(UserVO vo){
        return dao.getUserList(vo);
    }

    public int insertUser(UserVO vo) {
        return dao.insertUser(vo);
    }

    public int updateUser(UserVO vo) {
        return dao.updateUser(vo);
    }

    public int deleteUser(UserVO vo) {
        return dao.deleteUser(vo);
    }

}
