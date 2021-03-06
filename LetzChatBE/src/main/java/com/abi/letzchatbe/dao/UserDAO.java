package com.abi.letzchatbe.dao;

import java.util.List;

import com.abi.letzchatbe.model.User;

public interface UserDAO {
	
	public User getUserById(String userid);
	
	public List<User> list();
	
	public boolean save(User user);
	
	public boolean update(User user);
	
	public List<User> listUserById(String userid);
	
	public User ValidCredentials(String userid,String password);
}
