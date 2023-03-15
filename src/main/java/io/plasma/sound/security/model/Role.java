package io.plasma.sound.security.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

@Getter
@Setter
@ToString
public class Role implements GrantedAuthority {
	
	private String name;
	private List<Privilege> privileges;

	@Override
	public String getAuthority() {
		return this.name;
	}
}
