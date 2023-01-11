package io.plasma.sound.search;

import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Slf4j
@Repository
public class SearchDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    private static final String SQL_PREFIX = "Search.";
}
