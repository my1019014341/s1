package com.zsd.customer;

public class Customer {
	
	private int id;
	private String name;
	private String pwd;
	private String sex;
	private String QQ;
	private String tel;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getQQ() {
		return QQ;
	}
	public void setQQ(String qQ) {
		QQ = qQ;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	
	public Customer() {
		// TODO Auto-generated constructor stub
	}
	public Customer( String name, String pwd, String sex, String qQ,String tel) {
		super();
		
		this.name = name;
		this.pwd = pwd;
		this.sex = sex;
		this.QQ = qQ;
		this.tel = tel;
	}
	

}
