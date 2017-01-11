$(document).ready(function(){
    
    
    $(".navi >li").click(function(){
       
        var list = $(this).index();
        var wid = $(".visual").width();
        
        $(".navi >li").removeClass("on");
        $(this).addClass("on");
        
        $(".panel").animate({"margin-left":-wid * list},500);
        
    });

    
    
    
    
    
    
    
    
    
    //footer ul "on"클래스 처리
    
    $(".footUL2 >li").click(function(){
       
        var list = $(this).index();

        
        $(".footUL2 >li").removeClass("foot_on");
        $(this).addClass("foot_on");
        
        
    });

//    $(".prev").click(function(){
//        
//    });
//    
//    $(".next").click(function(){
//        
//    });
//    
    
});