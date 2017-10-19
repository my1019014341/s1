package com.zsd.dao;

import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



import com.zsd.test.util.PropertiesUtil;

public class BaseDao {
	
	private static String driver;
	private static String url;
	private static String user;
	private static String pwd;
	
	public BaseDao() {
		/**
		 * �������ӵ�ַ��������
		 */
		this.driver = PropertiesUtil.getPropertiesKey("driver");
		this.url = PropertiesUtil.getPropertiesKey("url");
		this.user = PropertiesUtil.getPropertiesKey("user");
		this.pwd = PropertiesUtil.getPropertiesKey("password");
	}
	
	

	public Connection conn = null;
	public PreparedStatement pstmt = null;
	public ResultSet res = null;
	/**
	 * �������
	 * 
	 * @return
	 */
	public Connection getConnection() {
		try {
			if (null == conn || conn.isClosed()) {//conn.isClosed �Ϳջ�ر� !!!
				try {
					Class.forName(driver);
					conn = DriverManager.getConnection(url, user, pwd);
				} catch (ClassNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;

	}

	/**
	 * �ر���������
	 * 
	 * @param conn
	 * @param stmt
	 * @param res
	 */
	public void closeAll(Connection conn,Statement stmt, ResultSet res) {
		if (null != res) {
			try {
				res.close();
				res = null;
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if (null != stmt) {

			try {
				stmt.close();
				stmt = null;
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if (null != conn) {

			try {
				conn.close();
				conn =null;
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	/**
	 * ���䷽ʽ��ѯ����
	 * @param sql
	 * @param param
	 * @param clazz
	 * @return
	 */
	public <T> List<T> executeQuery(String sql,Object[] param,Class<T> clazz){
		List<T> list = new ArrayList<T>();
		try {
			conn = getConnection();
			pstmt  = setPreparedStatement( conn.prepareStatement(sql), param);
			ResultSet res = pstmt.executeQuery();
			ResultSetMetaData rsmd = res.getMetaData();//��ý��Ԫ����(����Ϣ)
			int columns = rsmd.getColumnCount();//�������
			//���������
			while(res.next()){
				T t = clazz.newInstance();//����ʵ������
				//������ͨ����������ֵ
				for(int i=1;i<=columns;i++){
					String columnName = rsmd.getColumnName(i);
					Field field = clazz.getDeclaredField(columnName);
					field.setAccessible(true);
					field.set(t, res.getObject(i));//��������ֵ
				}
				list.add(t);//��������ӵ�������
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
		
	}
	
	private PreparedStatement setPreparedStatement(PreparedStatement pstmt,Object[] param) throws SQLException{
		
		if(null != param){
			for(int i=0;i<param.length;i++){
				pstmt.setObject(i+1, param[i]);
			}
		}
		return pstmt;
		
	}
	
	
	
	
	public int excuteUpdate(String sql,Object[] param){
		
		conn = getConnection();
		int result = 0;
		try {
			pstmt = setPreparedStatement(conn.prepareStatement(sql), param);
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			closeAll(conn, pstmt, null);
		}
		
		return result;
		
	}
	
public ResultSet exceuteQuery(String preparedSql,Object[] param){
		
		conn = getConnection();
		try {
			pstmt = setPreparedStatement(conn.prepareStatement(preparedSql), param);
			res = pstmt.executeQuery();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return res;
		
		
	}
	
	public List<Map<String,Object>> executeQueryList(String sql,Object[] param){
		List<Map<String,Object>> list = null;
		try {
			conn = getConnection();
			pstmt = setPreparedStatement(conn.prepareStatement(sql), param);
			res  = pstmt.executeQuery();
			list = convertList(res);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
//			closeAll(conn, pstmt, null);
		}
		return list;
		
	}
	/**
	 * �������ResultSet��װΪList
	 * @param res2
	 * @return
	 * @throws SQLException 
	 */
	private List<Map<String, Object>> convertList(ResultSet res) throws SQLException {
		List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
		ResultSetMetaData rsmd = res.getMetaData();
		int columnCount = rsmd.getColumnCount();
		while(res.next()){
			Map<String,Object> map  = new HashMap<String, Object>();
			for(int  i =1;i<=columnCount;i++){
				String columnName = rsmd.getColumnName(i);
				map.put(columnName, res.getObject(columnName));
			}
			list.add(map);
			
		}
//		closeAll(conn, res.getStatement(), res);
		return list;
	}


}
