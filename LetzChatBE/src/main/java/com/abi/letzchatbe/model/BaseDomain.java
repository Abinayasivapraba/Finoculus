package com.abi.letzchatbe.model;

import javax.persistence.Transient;

public class BaseDomain {
	private String errorcode;
	private String errormessage;
	@Transient
	public String getErrorcode() {
		return errorcode;
	}
	public void setErrorcode(String errorcode) {
		this.errorcode = errorcode;
	}
	@Transient
	public String getErrormessage() {
		return errormessage;
	}
	public void setErrormessage(String errormessage) {
		this.errormessage = errormessage;
	}

}
