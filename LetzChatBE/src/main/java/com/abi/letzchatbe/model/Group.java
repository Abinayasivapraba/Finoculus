package com.abi.letzchatbe.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;
@Entity
@Component
@Table(name="USERGROUP")
public class Group extends BaseDomain {
	@Id
	private int groupid;
	public int getGroupid() {
		return groupid;
	}
	public void setGroupid(int groupid) {
		this.groupid = groupid;
	}
	private String creatorid;
	private String groupname;
	
	private Date date;
	
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getCreatorid() {
		return creatorid;
	}
	public void setCreatorid(String creatorid) {
		this.creatorid = creatorid;
	}
	public String getGroupname() {
		return groupname;
	}
	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}

}
