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

public class RegisterServlet extends HttpServlet {

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
		if(null!=cusdao.register(cus)){
			if(cusdao.addCustomer(cus)>0){
				cus= cusdao.selectCustomer(cus.getTel());
				req.setAttribute("cus", cus);
				req.getRequestDispatcher("change_details.jsp").forward(req, resp);
			}else{
				out.print("<script> alert('用户名添加失败') </script>");
				resp.sendRedirect("main.jsp");
			}
			
		}else{
			out.print("<script> alert('用户名已存在') </script>");
			resp.sendRedirect("main.jsp");
		}
		out.close();
	}

	
}
