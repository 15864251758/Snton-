window.onload=function(){


//轮播图
	$(document).ready(function(e) {
	    $('#b03').unslider({
			dots: true,
			delay: 3000,
		});
	});



//日历
	$(function() {
		$.datepicker.regional["zh-CN"] = { closeText: "关闭", prevText: " ", nextText: " ", currentText: "今天", monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"], weekHeader: "周", dateFormat: "yy-mm-dd", firstDay: 1, isRTL: !1, showMonthAfterYear: !0, yearSuffix: "年" }
		$.datepicker.setDefaults($.datepicker.regional["zh-CN"]);

	  $( "#datepicker" ).datepicker();
	});
//集团网站群
var pro=document.getElementById("pro");
var close=document.getElementById("close");
var link=document.getElementById("link");
pro.onclick=function(){
	link.style.display="block";	
}
close.onclick=function(){
	link.style.display="none";
}
//友情链接
var pro2=document.getElementById("pro2");
var close2=document.getElementById("close2");
var link2=document.getElementById("link2");
pro2.onclick=function(){
	link2.style.display="block";	
}
close2.onclick=function(){
	link2.style.display="none";
}
//通讯录
	var pro3=document.getElementById('pro3');
	var link3=document.getElementById('link3');
	var close=document.getElementById('close3');
	pro3.onclick=function(){
		link3.style.display="block";
	close3.onclick=function(){
		link3.style.display="none";
	}

	var jituan=document.getElementById('jituan');
	var gongsi=document.getElementById('gongsi');
	var jituan1=document.getElementById('jituan1');
	var gongsi1=document.getElementById('gongsi1');
	gongsi1.style.display="none";
	gongsi.onclick=function(){
		gongsi1.style.display='block';
		jituan1.style.display='none';
		gongsi.style.background='#93CAE0';
		gongsi.style.color='#fff';
		jituan.style.background='none';
		jituan.style.color='#333';
	}
	jituan.onclick=function(){
		jituan1.style.display='block';
		gongsi1.style.display='none';
		gongsi.style.background='none';
		gongsi.style.color='#333';
		jituan.style.background='#93CAE0';
		jituan.style.color='#fff';
	}
}
}