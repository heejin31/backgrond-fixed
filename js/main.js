$('.trigger').click(function(){
    $(this).toggleClass('on');    
    $('nav').slideToggle(400);
});

$(window).resize(function(){    //모바일상태에서 nav눌렀다가 브라우저 크기 조절했을때도 nav의 사라짐이 작동하게 하기
    let winW = $(window).width(); //브라우저의 가로길이를 변수에
    console.log('브라우저의 가로길이는?',winW);
    if(winW >=768 && $('nav').is(':hidden')){
        console.log('nav가 안보여요');
        $('nav').removeAttr('style');
    }
});