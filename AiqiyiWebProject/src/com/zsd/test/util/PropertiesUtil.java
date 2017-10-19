package com.zsd.test.util;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;


public class PropertiesUtil {
	private static Properties pro;
	
	static {
		if( null == pro ){
			try {
				pro = new Properties();
				InputStream inStream =PropertiesUtil.class.getResourceAsStream("/database.properties");
				pro.load(inStream);
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
//	public  PropertiesUtil(Properties pro) {
//		this.pro = pro;
//	}
	
	public static void load(String url) throws IOException{
		InputStream inStream = new FileInputStream(url);
		pro.load(inStream);
	}
	
	public PropertiesUtil(String url) throws IOException{
		load(url);
	}
	
	public static String getPropertiesKey(String key){
		return pro.getProperty(key);
		
	}
	public static String getPropertiesKey(String key,String defaultVal){
		return pro.getProperty(key,defaultVal);
		
	}
	
	public static void setProperties(String key,String val) throws FileNotFoundException, IOException{
		pro.setProperty(key, val);
		pro.store(new FileOutputStream("/database.properties"), null);
	}
}
