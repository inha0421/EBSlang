//슬라이드에 마우스 오버하면 슬라이딩 멈추면서  prev/next 버튼 생김
//append/prepend로 이어지게 구현됨





$(document).ready(function(){
    
    //slide 구현
    //전역 변수 선언
    var i = $(".navi .on").index();
    var wid = $(".visual").width();
    var len = $(".navi li").length;



    // .navi 버튼에 on 클래스 주기

    $(".navi li").click(function(){

        $(".navi li").removeClass("on");
        $(this).addClass("on");

    });

    //prev 구현

    $(".prev").click(function(){

        if(i == 0){
            i = len-1;
        }
        else{
            i = i-1;
        }

        Sliding();
    });

    //next 구현

    $(".next").click(function(){

        if(i == len-1){
            i = 0;
        }
        else{
            i = i+1;
        }

        Sliding();
    });


    //버튼 클릭시 on클래스 주고 그 페이지로 가기


    $(".navi li").click(function(){

        i = $(this).index();

        Sliding();

    });




    //슬라이드 함수 구현

    function Sliding(){

        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
        $(".panel").animate({"margin-left": -wid * i },1000);

    }



    //Sliding 자동실행 함수를 변수로 선언

    var auto = setInterval(function(){

        if(i == len-1){
            i = 0;
        }
        else{
            i = i+1;
        }

        Sliding();

    },2000);


    //stop버튼 클릭시 정지 구현

    $(".visual").mouseenter(function(){

        clearInterval(auto);

    });




    //play버튼 클릭시 다시 자동재생 구현


    $(".visual").mouseleave(function(){

        auto = setInterval(function(){

            if(i == len-1){
                i = 0;
            }
            else{
                i = i+1;
            }

            Sliding();

        },2000);

    });
    
    
    
    //footer ul "on"클래스 처리
    
    $(".footUL2 >li").click(function(){
       
        var list = $(this).index();

        
        $(".footUL2 >li").removeClass("foot_on");
        $(this).addClass("foot_on");
        
        
    });

});
