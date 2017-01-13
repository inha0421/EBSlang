$(document).ready(function(){
    
    //slide 구현

    var len = $(".navi li").length;
    
    $(".navi >li").click(function(){
       
        var list = $(this).index();
        var wid = $(".visual").width();
        
        $(".navi >li").removeClass("on");
        $(this).addClass("on");
        
        $(".panel").animate({"margin-left":-wid * list},500);
        
    });



    $(".prev").click(function(){

        $(".panel").animate({"margin-left":"-200%"},500,function(){

            $(".panel li").eq(0).appendTo(".panel");
            $(".panel").css({"margin-left":"-100%"});

        });

    });
    
    $(".next").click(function(){

        $(".panel").animate({"margin-left":"0%"},500,function(){

            $(".panel li").eq(len-1).prependTo(".panel");
            $(".panel").css({"margin-left":"-100%"});

        });

    });
    
    
    
    
    
    
    
    
    //footer ul "on"클래스 처리
    
    $(".footUL2 >li").click(function(){
       
        var list = $(this).index();

        
        $(".footUL2 >li").removeClass("foot_on");
        $(this).addClass("foot_on");
        
        
    });

});
