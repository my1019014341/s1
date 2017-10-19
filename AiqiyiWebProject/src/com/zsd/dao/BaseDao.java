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
		 * 加载链接地址配置数据
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
	 * 获得连接
	 * 
	 * @return
	 */
	public Connection getConnection() {
		try {
			if (null == conn || conn.isClosed()) {//conn.isClosed 滞空或关闭 !!!
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
	 * 关闭所有连接
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
	 * 反射方式查询所有
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
			ResultSetMetaData rsmd = res.getMetaData();//获得结果元数据(列信息)
			int columns = rsmd.getColumnCount();//获得列数
			//解析结果集
			while(res.next()){
				T t = clazz.newInstance();//穿件实例对象
				//遍历列通过反射设置值
				for(int i=1;i<=columns;i++){
					String columnName = rsmd.getColumnName(i);
					Field field = clazz.getDeclaredField(columnName);
					field.setAccessible(true);
					field.set(t, res.getObject(i));//设置属性值
				}
				list.add(t);//将对象添加到集合中
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
	 * 将结果集ResultSet封装为List
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
