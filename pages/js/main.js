$(function () {
//	导航栏
	$(".ntab li").mouseenter(function () {
	   $(this).addClass("nav-on").siblings().removeClass("nav-on");
       $(".nlist .navbox").eq($(this).index()).show().siblings().hide();
    });
    $(".navbox").mouseleave(function () {
	    $(".ntab li").removeClass("nav-on");
        $(".navbox").hide();   
    });
//  $(".nav").mouseleave(function(){
//  	$(".ntab li").removeClass("nav-on");
//  	$(".navbox").hide();
//  });
    $(".ntab li").last().mouseenter(function () {
    	$(".nlist .navbox").hide();
    });
    
//	产品
    $(".ptab li").click(function () {
        $(this).addClass("ptab-on").siblings().removeClass("ptab-on");
        $(".plist .pbox").eq($(this).index()).addClass("pbox-on").siblings().removeClass("pbox-on");
    });
//  案例
    $(".ctab li").click(function () {
        $(this).addClass("ctab-on").siblings().removeClass("ctab-on");
        $(".clist .clistbox").eq($(this).index()).show().siblings().hide();
    });
//  CDM
    $(".cs-tab li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".cs-box .cs-list").eq($(this).index()).show().siblings().hide();
    });
    
//  DBackup
    $(".dbtab li").click(function () {
        $(this).addClass("is").siblings().removeClass("is");
        $(".cs-box .cs-list").eq($(this).index()).show().siblings().hide();
    });
});

//客户案例
(function(){
  $(".g-mark").mouseenter(function(){
    $(this).addClass("r-mark");
  });
  $(".g-mark").mouseleave(function(){
    $(this).removeClass("r-mark");
  });
})();
(function(){
	$(".goradio").click(function(){
		$(".shadow").show();
	});
	$(".closeicon span").click(function(){
		$(".shadow").hide();
	})
})();

