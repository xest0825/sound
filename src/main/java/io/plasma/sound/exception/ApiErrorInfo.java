/**
 * 
 */

package io.plasma.sound.exception;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
* @Project : robot_admin
* @FileName : ApiErrorInfo.java
* @Date : 2022. 12. 7.
* @author : bumjoon.choi
* @description :
*
* Revision History
* Author             Date       Description
* ------------------ ---------- -----------------------
* bumjoon.choi		 2022. 12. 7.
*
*/

@Getter
@Setter
@ToString
public class ApiErrorInfo {
	private String message;
}
