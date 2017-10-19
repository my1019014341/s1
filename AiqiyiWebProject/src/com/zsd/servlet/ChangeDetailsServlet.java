package com.zsd.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.zsd.Interface.CustomerDao;
import com.zsd.customer.Customer;
import com.zsd.impl.CustomerMqlImpl;

public class ChangeDetailsServlet extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setContentType("text/html;charset=UTF-8");
		req.setCharacterEncoding("UTF-8");
		PrintWriter out = resp.getWriter();
		CustomerDao cusdao = new CustomerMqlImpl();
//		Customer cus = new Customer();
		Customer cus = new Customer(req.getParameter("name"), req.getParameter("pwd"), req.getParameter("sex"), req.getParameter("QQ"), req.getParameter("tel"));
//		cus.setTel(req.getParameter("tel"));
		int result = cusdao.chang(cus);
		if(result>0){
			req.getRequestDispatcher("mainAfter.jsp").forward(req, resp);
		}else{
			out.print("<script> alert('ĞÅÏ¢Ìí¼ÓÊ§°Ü') </script>");
			resp.sendRedirect("change_details.jsp");
		}
		out.close();
	}

	
}
