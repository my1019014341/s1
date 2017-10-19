package com.zsd.impl;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.zsd.Interface.CustomerDao;
import com.zsd.customer.Customer;
import com.zsd.dao.BaseDao;

public class CustomerMqlImpl extends BaseDao implements CustomerDao {

	public int addCustomer(Customer cus) {
		String sql = "insert into customer(tel) values(?)";
		Object[] param = {cus.getTel()};
		int result = this.excuteUpdate(sql, param);
		return result;
	}
	
	public int chang(Customer cus) {
		String sql = "update customer set name=?,pwd=?,sex=?,QQ=? where tel=? ";
		Object[] param = {cus.getName(),cus.getPwd(),cus.getSex(),cus.getQQ(),cus.getTel()};
		int result = this.excuteUpdate(sql, param);
		
		return result;
	}
	
	public Customer selectCustomer(String tel) {
		String sql = "select * from customer where tel = ?";
		Object[] param = {tel};
		List<Map<String, Object>> list = this.executeQueryList(sql, param);
		Map<String, Object> map = list.get(0);
		Customer cus = new Customer((String)map.get("name"), (String)map.get("pwd"),(String) map.get("sex"),(String) map.get("QQ"),(String) map.get("tel"));
		return cus;
		
	}
	
	public Customer register(Customer cus) {
		
		String sql = "select * from customer where tel=?";
		Object[] param = {cus.getTel()};
		
		List<Map<String, Object>> list = super.executeQueryList(sql, param);
		try {
			if(list.size()==0){
				return cus;
				
			}else{
				return null;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Customer login(Customer cus) {
		String sql = "select * from customer where tel=?";
		Object[] param = {cus.getTel()};
		
		List<Map<String, Object>> list = super.executeQueryList(sql, param);
		try {
			if(list.size()>0){
				for(int i=0;i<list.size();i++){
					if(cus.getTel().equals(list.get(i).get("tel"))){
//						System.out.println("存在该用户");
						if(cus.getPwd().equals(list.get(i).get("pwd"))){
//							System.out.println("登陆成功");
							return cus;
						}else{
//							System.out.println("密码错误");
							return null;
						}
						
					}
				}
				
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}



	

}
