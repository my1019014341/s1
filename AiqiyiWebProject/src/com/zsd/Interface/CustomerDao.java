package com.zsd.Interface;

import java.util.List;
import java.util.Map;

import com.zsd.customer.Customer;

public interface CustomerDao {
	
	Customer register(Customer cus);
	
	Customer login(Customer cus);
	
	public int addCustomer(Customer cus) ;
	
	public int chang(Customer cus);
	
	public Customer selectCustomer( String tel);

}
