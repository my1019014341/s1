package com.zsd.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.zsd.Interface.CustomerDao;
import com.zsd.customer.Customer;
import com.zsd.impl.CustomerMqlImpl;

public class LoginServlet extends HttpServlet {

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
		Customer cus = new Customer();
		cus.setTel(req.getParameter("tel"));
		cus.setPwd(req.getParameter("pwd"));
		
		if(null != cusdao.login(cus)){
			Customer newcus= cusdao.selectCustomer(req.getParameter("tel"));
			req.setAttribute("cus", newcus);
			req.getRequestDispatcher("mainAfter.jsp").forward(req, resp);
		}else{
			out.print("<script> alert('–≈œ¢ÃÌº” ß∞‹') </script>");
			resp.sendRedirect("main.jsp");
		}
		out.close();
	}

	
	
}
