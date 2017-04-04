package com.xu.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.xu.pojo.User;

public class CheckLoginInterceptor implements HandlerInterceptor{
	//视图渲染完毕，通过视图解析器选择视图后产生响应
	@Override
	public void afterCompletion(HttpServletRequest arg0,
			HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		// TODO Auto-generated method stub
		
	}
	//请求到达Controller,处理结束，视图没有渲染
	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
			Object arg2, ModelAndView arg3) throws Exception {
		// TODO Auto-generated method stub
		
	}
	//请求派发到Controller前执行的方法
	@Override
	public boolean preHandle(HttpServletRequest arg0, HttpServletResponse arg1,
			Object arg2) throws Exception {
		// TODO Auto-generated method stub
		HttpSession session=arg0.getSession();
		User user=(User) session.getAttribute("user");
		if(user==null){
			arg1.sendRedirect("login.jsp");
			return false;
		}
		return true;
	}

}
