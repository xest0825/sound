/*
 * Copyright  (c) 2013.
 */
package io.plasma.sound.util;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;
import java.security.Key;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


/**
 * 
 * MD5 SHA256 AES
 * 암호화 관련 처리
 * @author kihon
 * 
 */
@Slf4j
@SuppressWarnings("deprecation")
@Component
public class CryptoUtil {
	
	
	//make 32byte key : "dkbyhealhting" ASCII to HEX= > "67656e65786f6e6865616c6874696e67" 
	//private static final String salt =  "67656e65786f6e6865616c6874696e67";
	//private static final String salt =  "75426e77786f6e6865616c6874696e67";
	//private static final String salt =  "genexon2021!@#$%";
	private static final String salt = "75426e77786f6e6865616c6874696e67";
	
	/**
	 * MD5 암호화
	 *
	 * @param target 암호화 대상 문자열
	 *
	 * @return 암호화된 MD5 문자열
	 * @throws NoSuchAlgorithmException 알고리즘 지정 실패
	 */
	public static String makeMD5With(String target) throws NoSuchAlgorithmException {
		if (target == null || target.equals("")) {
			throw new IllegalArgumentException("복호화 대상 문자열이 존재하지 않음");
		}

		StringBuilder sb = new StringBuilder();
		byte[] targetByte = target.getBytes();

		MessageDigest digest = MessageDigest.getInstance("MD5");

		digest.reset();
		digest.update(targetByte);

		byte[] resultDigest = digest.digest();
		@SuppressWarnings("unused")
		int length = resultDigest.length;

		for (byte aResultDigest : resultDigest) {
			sb.append(Integer.toHexString(0xFF & aResultDigest));
		}

		return sb.toString();
	}
	
	/**
	 * SHA256 암호화 
	 * 
	 * @param src
	 * @return
	 */
	public static String makeSHA256(String src){
		
		String returnCode = "";				
		if(src == null || "".equals(src) || src.length() == 64  || src.length() == 128){return src;}		
		try {
			MessageDigest sh = MessageDigest.getInstance("SHA-256");
			sh.update(src.getBytes());
			byte byteData[] = sh.digest();
			StringBuffer sb = new StringBuffer();
			for(int i = 0; i < byteData.length ; i++){
				sb.append(Integer.toString((byteData[i]&0xff)+0x100, 16).substring(1));
				}
			returnCode = sb.toString();
		} catch (NoSuchAlgorithmException e) {			
			e.printStackTrace();
			log.error("ERROR WHILE MAKING SHA-256 ENCODE. CHECK common.util.CyrptoUtil in common Module  [ERR MSG] =" +e.getMessage() );
			returnCode = src;
		} 
		
		return returnCode;
		
	}

	private static String iv;
	private static Key keySpec;
	private final static String key = salt;
	
	/** 16자리의 키값을 입력하여 객체를 생성한다. 
	  * @param
	  * @throws UnsupportedEncodingException 키값의 길이가 16이하일 경우 발생 */
	public static void AES256Util() throws UnsupportedEncodingException {
		
		iv = key.substring(0, 16);
		byte[] keyBytes = new byte[16];
		byte[] b = key.getBytes("UTF-8");
		int len = b.length;
		if(len > keyBytes.length){
			len = keyBytes.length;
		}
		System.arraycopy(b, 0, keyBytes, 0, len);
		SecretKeySpec keySpecc = new SecretKeySpec(keyBytes, "AES");
		keySpec = keySpecc;
	}
	
	/** AES256 으로 암호화 한다.
	  * @param str 암호화할 문자열
	  * @return
	  * @throws NoSuchAlgorithmException 
	  * @throws GeneralSecurityException
	  * @throws UnsupportedEncodingException */
	public static String encrypt(String str) throws NoSuchAlgorithmException, GeneralSecurityException, UnsupportedEncodingException{
			AES256Util();
			Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
			c.init(Cipher.ENCRYPT_MODE, keySpec, new IvParameterSpec(iv.getBytes()));
			byte[] encrypted = c.doFinal(str.getBytes("UTF-8"));
			String enStr = new String(Base64.encodeBase64(encrypted));
			return enStr;
	}
	
	/** AES256으로 암호화된 txt 를 복호화한다.
	  * @param str 복호화할 문자열
	  * @return
	  * @throws NoSuchAlgorithmException
	  * @throws GeneralSecurityException
	  * @throws UnsupportedEncodingException */
	public static String decrypt(String str) throws NoSuchAlgorithmException, GeneralSecurityException, UnsupportedEncodingException {
		AES256Util();
		Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
		c.init(Cipher.DECRYPT_MODE, keySpec, new IvParameterSpec(iv.getBytes()));
		byte[] byteStr = Base64.decodeBase64(str.getBytes());
		return new String(c.doFinal(byteStr), "UTF-8");
	}
	
	/**
	 * 로그인 페스워드 암호화  by 스프링 시큐리티
	 * @param message
	 * @return
	 * @throws Exception
	 */
	/*
	 * public static String encryptlogin(String message) throws Exception { StandardPasswordEncoder spe = new StandardPasswordEncoder(); String enc = spe.encode(message); return enc; }
	 */

	
	/**
	  * 
	  * @Method Name : encryptlogin
	  * @param
	  * @throws Exception
	  * @작성일 : 2022. 12. 9.
	  * @작성자 : bumjoon.choi
	  * @변경이력 : 
	  * @Method 설명 : 로그인 페스워드 암호화  by 스프링 시큐리티 by SpringBoot
	  * @param message
	  * @return
	  * @throws Exception
	  */
	public static String encryptlogin(String message) throws Exception {
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		String enc = "";
		try {
			enc = encoder.encode(message);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return enc;
	}
}
