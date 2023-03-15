/**
 * 
 */

package io.plasma.sound.config;

import io.plasma.sound.filter.JwtAuthenticationFilter;
import io.plasma.sound.filter.JwtRequestFilter;
import io.plasma.sound.security.CustomAuthenticationProvider;
import io.plasma.sound.security.handler.CustomAccessDeniedHandler;
import io.plasma.sound.security.handler.CustomAuthenticationEntryPoint;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.header.writers.StaticHeadersWriter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;



/**
* @Project : robot_admin
* @FileName : SecurityConfig.java
* @Date : 2023. 03. 01
* @author : choiys
* @description :
*
*/

/**
 * 스프링 보안 설정
 *
 * <pre>
 *
 * &#64;EnableGlobalMethodSecurity(securedEnabled=true) 를 지정하면 메서드 보안을 사용할 수 있다.
 * 보안을 걸고자 하는 클래스에 적용하여 클래스내 전체 메서드에 적용하거나 개별 메서드 위에 @Secured("ROLE_SUPER") 등과 같이 지정한다.
 * </pre>
 *
 * @author yoonsik
 *
 */
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	@Qualifier("sqlSession")
	private SqlSessionTemplate sqlSession;

	@Override
	public void configure(WebSecurity web) throws Exception {
		//bjchoi : api 경로 추가 할지 의사결정 후 삽입. 현재는 제외 시킴
		web.ignoring().antMatchers("/assets/**",
									"/kendoui/**", "/js/**", "/css/**","/sitemesh/**","/img/**", "/font/**", "/fonts/**",
								   "/images/**","/images/ad/**", "/lib/**", "/pdfjs/**", "/swagger-ui/**", "/webjars/**",
								   "/swagger-resources/**", "/v2/**", "**/favicon*");
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider());
	}
	
	/*
	 * [Spring Security JWT]  Spring Security JWT 인증 인가 및 Filter 적용
	 * Spring security 적용 시 환경설정 세팅 부분.
	 * 
	 * 
	 * */
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		//iframe X-FRAME-OPTIONS 설정
				http.headers().frameOptions().sameOrigin().addHeaderWriter(new StaticHeadersWriter("X-FRAME-OPTIONS", "SAMEORIGIN"));
						
				// 폼 로그인 기능과 베이직 인증 비활성화
				http.formLogin().disable().httpBasic().disable();

				// csrf 방지 지원 기능 비활성화
				http.csrf().disable();

				// 세션 정책 설정 (STATELESS 로 설정하면 쿠키에 세션키를 저장하지 않는다.)
				http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
				
				// 필터 추가
				http.addFilterAt(new JwtAuthenticationFilter(authenticationManager(), sqlSession), UsernamePasswordAuthenticationFilter.class)
						.addFilterBefore(new JwtRequestFilter(), UsernamePasswordAuthenticationFilter.class);

				http.authorizeRequests().requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
						
						// 루트
						.antMatchers("/").permitAll()
						
						// 리소스
						.antMatchers("/resources/**").permitAll()
						.antMatchers("/upload/**").permitAll() 
						.antMatchers("/files/**").permitAll()
						
						// 스웨거 관련 리소스
						.antMatchers("/swagger-ui*").permitAll()
						.antMatchers("/swagger-resources*").permitAll()
						.antMatchers("/v2/api-docs").permitAll()
						.antMatchers("/webjars/**").permitAll()
						.antMatchers("/swagger-ui/**").permitAll()
						.antMatchers("/swagger-resources/**").permitAll()

						// api 제외
						.antMatchers("/api/**").permitAll()
						.antMatchers("/chat/**").permitAll()
						.antMatchers("/pub/**").permitAll()
						.antMatchers("/sub/**").permitAll()
						.antMatchers("/stomp/**").permitAll()


						
						//robot admin 비지니스 컴포넌트
						
						//.antMatchers("/**.go").permitAll() 		// 모든 화면 페이지 이동 URL 패턴
						//.antMatchers("/**/**.go").permitAll() 		// 화면 페이지 이동 URL 패턴
						.antMatchers("/menu/**").permitAll() 		// 공통모듈
						//.antMatchers("/index.do").permitAll()
						.antMatchers("/logout.do").permitAll()
						.antMatchers("/system/**").permitAll()
						.antMatchers("/system/**/**").permitAll()
						.antMatchers("/role/**").permitAll()
						.antMatchers("/main/**").permitAll()
						.antMatchers("/commoncode/**").permitAll()
						.antMatchers("/board/**").permitAll()
						.antMatchers("/comm/**").permitAll()
						.antMatchers("/authentication/**").permitAll()
						.antMatchers("/insa/**").permitAll()
						.antMatchers("/logss/**").permitAll()
						.antMatchers("/files/**").permitAll()
						.antMatchers("/login/**").permitAll()
						.antMatchers("/uploadExcel/**").permitAll()
						.antMatchers("/userRole/**").permitAll()
						.antMatchers("/car/**").permitAll()
						
						// 화면 및 기능별
						.antMatchers("/login.go").permitAll()
						.antMatchers("/login-info/**").permitAll() 	// 사용자 정보 조회
						.antMatchers("/userInfo").permitAll() 		// 로그인 인중 호 JWT 토큰 값으로 사용자 정보 조회
						//.antMatchers("/login.do").permitAll() 		// 로그인 처리
						.antMatchers("/mrpm/login.do").permitAll()						
						.antMatchers("/admin/login").permitAll()
						.antMatchers("/prd/**").permitAll()
						.antMatchers("/ws/**").permitAll()
						.antMatchers("/websocket*/**").permitAll()
						.antMatchers("/members/**").access("request.method == 'GET' || request.method == 'POST' ? permitAll : hasRole('USER')")
						.antMatchers("/boards/**").access("request.method == 'GET' ? permitAll : hasRole('USER')")
						.antMatchers("/items/**").access("request.method == 'GET' ? permitAll : hasRole('USER')")
						.antMatchers("/admin/**").access("request.method == 'GET' ? permitAll : (hasRole('ADMIN') || hasRole('SYSTEM') || hasRole('MANAGER') || hasRole('CAR_MANAGER01') || hasRole('CAR_MANAGER02') || hasRole('CAR_MANAGER03'))")
						.antMatchers("/admin2/**").access("request.method == 'GET' ? permitAll : (hasRole('ADMIN') || hasRole('SYSTEM') || hasRole('MANAGER') || hasRole('CAR_MANAGER01') || hasRole('CAR_MANAGER02') || hasRole('CAR_MANAGER03'))")
						//.antMatchers("/system/**").hasRole("SUPER")
						.anyRequest().authenticated()
						;

				// 접근 거부 처리자 등록
				http.exceptionHandling().authenticationEntryPoint(new CustomAuthenticationEntryPoint()) // 사용자 지정 인증 엔트리 포인트 객체 지정
						.accessDeniedHandler(accessDeniedHandler());
				//AccessDeniedHandler는 서버에 요청을 할 때 액세스가 가능한지 권한을 체크후 액세스 할 수 없는 요청을 했을시 동작된다.
				//AuthenticationEntryPoint는 인증이 되지않은 유저가 요청을 했을때 동작된다.

				// cors지원기능 활성화
				// http.cors();
				/*
				 * 원하는 메서드나 클래스에 @CrossOrigin(origins={"http://localhost:8081"}) 등과 같애 기재하여 사용
				 *
				 * @CrossOrigin 어노테이션을 사용한다는 의미는 해당 Origin을 허용하겠다는 의미이다.
				 */
	}
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public AuthenticationProvider authenticationProvider() {
		return new CustomAuthenticationProvider();
	}

	@Bean
	public AccessDeniedHandler accessDeniedHandler() {
		return new CustomAccessDeniedHandler();
	}
	
   @Bean
   public PasswordEncoder getPasswordEncoder() {
      return new BCryptPasswordEncoder();
   }
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

		CorsConfiguration config = new CorsConfiguration();
		config.addAllowedOrigin("http://**");
		config.addAllowedHeader("*");
		config.addAllowedMethod("GET");
		config.addAllowedMethod("POST");
		config.addAllowedMethod("PUT");
		config.addAllowedMethod("DELETE");
		config.setExposedHeaders(Arrays.asList("Authorization", "Content-Disposition"));

		source.registerCorsConfiguration("/**", config);
		return source;
	}
}
