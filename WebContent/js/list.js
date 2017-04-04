$(document).ready(function(){
	getInfo();
	//下一页
	$("#nextPage").click(function(){
		var pageNow=$("#pageNow").html();//这个时候使用htnl()获取到的数据是string类型的
		var pageCount=$("#pageCount").html();
		if(pageNow==pageCount){
			alert("已经是最后一页了！");
		}else{
			pageNow=parseInt(pageNow);
			$.ajax({
				type:"post",//传递的方式post get
				data:{pageNow:(pageNow+1)},//传递的参数
				url:"userServlet?action=1",//访问的路径
				success:function(res){//回调函数 json
					var msg=eval("("+res+")");
					$("#total").html(msg.total);
					$("#pageCount").html(msg.pageCount);
					$("#pageNow").html(msg.pageNow);
					$("#jumpPage").empty();
					//跳转页
					for(var i=1;i<=msg.pageCount;i++){
						var str="<option value='"+i+"'>"+i+"</option>";
						$("#jumpPage").append(str);
					}
					//拆分数据
					$("#main").empty();
					var arrs=eval("("+msg.jsonArr+")");
					for(var i=0;i<arrs.length;i++){
						var arr=arrs[i];
						var row="<tr align='center'>"+
						"<td><input type='checkbox' id='row"+arr.id+"' value='"+arr.id+"'></td>"+
						"<td>"+arr.id+"</td>"+
						"<td>"+arr.userName+"</td>"+
						"<td>"+arr.password+"</td>"+
						"<td>"+arr.trueName+"</td>"+
						"<td>"+arr.email+"</td>"+
						"<td>"+arr.phone+"</td>"+
						"<td>"+arr.roleName+"</td>"+
						"</tr>";
						$("#main").append(row);
						
					}
				}
			});
		}
	});
	
	//上一页
	$("#upPage").click(function(){
		var pageNow=$("#pageNow").html();//这个时候使用htnl()获取到的数据是string类型的
		if(pageNow==1){
			alert("已经是第一页了！");
		}else{
			pageNow=parseInt(pageNow);
			$.ajax({
				type:"post",//传递的方式post get
				data:{pageNow:(pageNow-1)},//传递的参数
				url:"userServlet?action=1",//访问的路径
				success:function(res){//回调函数 json
					var msg=eval("("+res+")");
					$("#total").html(msg.total);
					$("#pageCount").html(msg.pageCount);
					$("#pageNow").html(msg.pageNow);
					$("#jumpPage").empty();
					//跳转页
					for(var i=1;i<=msg.pageCount;i++){
						var str="<option value='"+i+"'>"+i+"</option>";
						$("#jumpPage").append(str);
					}
					//拆分数据
					$("#main").empty();
					var arrs=eval("("+msg.jsonArr+")");
					for(var i=0;i<arrs.length;i++){
						var arr=arrs[i];
						var row="<tr align='center'>"+
						"<td><input type='checkbox' id='row"+arr.id+"' value='"+arr.id+"'></td>"+
						"<td>"+arr.id+"</td>"+
						"<td>"+arr.userName+"</td>"+
						"<td>"+arr.password+"</td>"+
						"<td>"+arr.trueName+"</td>"+
						"<td>"+arr.email+"</td>"+
						"<td>"+arr.phone+"</td>"+
						"<td>"+arr.roleName+"</td>"+
						"</tr>";
						$("#main").append(row);
						
					}
				}
			});
		}
	});
	
	//尾页
	$("#lastPage").click(function(){
		var pageNow=$("#pageNow").html();//这个时候使用htnl()获取到的数据是string类型的
		var pageCount=$("#pageCount").html();
		if(pageNow==pageCount){
			alert("已经在尾页了！");
		}else{
			$.ajax({
				type:"post",//传递的方式post get
				data:{pageNow:pageCount},//传递的参数
				url:"userServlet?action=1",//访问的路径
				success:function(res){//回调函数 json
					var msg=eval("("+res+")");
					$("#total").html(msg.total);
					$("#pageCount").html(msg.pageCount);
					$("#pageNow").html(msg.pageNow);
					$("#jumpPage").empty();
					//跳转页
					for(var i=1;i<=msg.pageCount;i++){
						var str="<option value='"+i+"'>"+i+"</option>";
						$("#jumpPage").append(str);
					}
					//拆分数据
					$("#main").empty();
					var arrs=eval("("+msg.jsonArr+")");
					for(var i=0;i<arrs.length;i++){
						var arr=arrs[i];
						var row="<tr align='center'>"+
						"<td><input type='checkbox' id='row"+arr.id+"' value='"+arr.id+"'></td>"+
						"<td>"+arr.id+"</td>"+
						"<td>"+arr.userName+"</td>"+
						"<td>"+arr.password+"</td>"+
						"<td>"+arr.trueName+"</td>"+
						"<td>"+arr.email+"</td>"+
						"<td>"+arr.phone+"</td>"+
						"<td>"+arr.roleName+"</td>"+
						"</tr>";
						$("#main").append(row);
						
					}
				}
			});
		}
	});
	//首页
	$("#fristPage").click(function(){
		var pageNow=$("#pageNow").html();//这个时候使用htnl()获取到的数据是string类型的
		if(pageNow==1){
			alert("已经在首页了！");
		}else{
			$.ajax({
				type:"post",//传递的方式post get
				data:{pageNow:1},//传递的参数
				url:"userServlet?action=1",//访问的路径
				success:function(res){//回调函数 json
					var msg=eval("("+res+")");
					$("#total").html(msg.total);
					$("#pageCount").html(msg.pageCount);
					$("#pageNow").html(msg.pageNow);
					$("#jumpPage").empty();
					//跳转页
					for(var i=1;i<=msg.pageCount;i++){
						var str="<option value='"+i+"'>"+i+"</option>";
						$("#jumpPage").append(str);
					}
					//拆分数据
					$("#main").empty();
					var arrs=eval("("+msg.jsonArr+")");
					for(var i=0;i<arrs.length;i++){
						var arr=arrs[i];
						var row="<tr align='center'>"+
						"<td><input type='checkbox' id='row"+arr.id+"' value='"+arr.id+"'></td>"+
						"<td>"+arr.id+"</td>"+
						"<td>"+arr.userName+"</td>"+
						"<td>"+arr.password+"</td>"+
						"<td>"+arr.trueName+"</td>"+
						"<td>"+arr.email+"</td>"+
						"<td>"+arr.phone+"</td>"+
						"<td>"+arr.roleName+"</td>"+
						"</tr>";
						$("#main").append(row);
						
					}
				}
			});
		}
	});
});

function getInfo(){
	$.ajax({
		type:"post",//传递的方式post get
		data:{pageNow:1},//传递的参数
		url:"userServlet?action=1",//访问的路径
		success:function(res){//回调函数 json
			var msg=eval("("+res+")");
			$("#total").html(msg.total);
			$("#pageCount").html(msg.pageCount);
			$("#pageNow").html(msg.pageNow);
			//跳转页
			for(var i=1;i<=msg.pageCount;i++){
				var str="<option value='"+i+"'>"+i+"</option>";
				$("#jumpPage").append(str);
			}
			//拆分数据
			$("#main").empty();
			var arrs=eval("("+msg.jsonArr+")");
			for(var i=0;i<arrs.length;i++){
				var arr=arrs[i];
				var row="<tr align='center'>"+
				"<td><input type='checkbox' id='row"+arr.id+"' value='"+arr.id+"'></td>"+
				"<td>"+arr.id+"</td>"+
				"<td>"+arr.userName+"</td>"+
				"<td>"+arr.password+"</td>"+
				"<td>"+arr.trueName+"</td>"+
				"<td>"+arr.email+"</td>"+
				"<td>"+arr.phone+"</td>"+
				"<td>"+arr.roleName+"</td>"+
				"</tr>";
				$("#main").append(row);
				
			}
		}
	});
}

function jumpPage(){
	var pageNow=$("#pageNow").html();
	//获取下拉选中 选择到的文本值
	var selectValue=$("#jumpPage option:selected").text();
	$.ajax({
		type:"post",//传递的方式post get
		data:{pageNow:selectValue},//传递的参数
		url:"userServlet?action=1",//访问的路径
		success:function(res){//回调函数 json
			var msg=eval("("+res+")");
			$("#total").html(msg.total);
			$("#pageCount").html(msg.pageCount);
			$("#pageNow").html(msg.pageNow);
			//拆分数据
			$("#main").empty();
			var arrs=eval("("+msg.jsonArr+")");
			for(var i=0;i<arrs.length;i++){
				var arr=arrs[i];
				var row="<tr align='center'>"+
				"<td><input type='checkbox' id='row"+arr.id+"' value='"+arr.id+"'></td>"+
				"<td>"+arr.id+"</td>"+
				"<td>"+arr.userName+"</td>"+
				"<td>"+arr.password+"</td>"+
				"<td>"+arr.trueName+"</td>"+
				"<td>"+arr.email+"</td>"+
				"<td>"+arr.phone+"</td>"+
				"<td>"+arr.roleName+"</td>"+
				"</tr>";
				$("#main").append(row);
				
			}
		}
	});
}