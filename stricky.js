
$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY>15){
        $('.header').addClass("sticky");
    }
    else{
        $('.header').removeClass("sticky");
    }
})
})

