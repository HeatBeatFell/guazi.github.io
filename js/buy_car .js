// 底部下拉 
var dw = document.getElementsByClassName('Sell-cars-dibu-dv');
var oPen = document.querySelectorAll('.Sell-cars-dibu-dv-open');
var clae = document.querySelectorAll('.Sell-cars-dibu-dv-clae');
var oA = document.querySelectorAll('.Sell-cars-dibu-dv>a');
oPen[0].onclick = function () {
    oPen[0].style.display = 'none';
    clae[0].style.display = 'block';
    dw[0].style.height = '112px';
}
clae[0].onclick = function () {
    clae[0].style.display = 'none';
    oPen[0].style.display = 'block';
    dw[0].style.height = '';
}

oPen[1].onclick = function () {
    oPen[1].style.display = 'none';
    clae[1].style.display = 'block';
    dw[1].style.height = '112px';
}
clae[1].onclick = function () {
    clae[1].style.display = 'none';
    oPen[1].style.display = 'block';
    dw[1].style.height = '';
}

oPen[2].onclick = function () {
    oPen[2].style.display = 'none';
    clae[2].style.display = 'block';
    dw[2].style.height = '112px';
}
clae[2].onclick = function () {
    clae[2].style.display = 'none';
    oPen[2].style.display = 'block';
    dw[2].style.height = '';
}


$(function () {
    $(".topnav-cicty").mouseover(function () {
        $(".city-box-parent").css("display", "block");
    }).mouseout(function () {
        $(".city-box-parent").css("display", "none");
    })

    $(".cicty").mouseover(function () {
        $(".city-box-parent").css("display", "block");
    }).mouseout(function () {
        $(".city-box-parent").css("display", "none");
    })

    $(".city-box-parent").mouseover(function () {
        $(this).css("display", "block")
    }).mouseout(function () {
        $(this).css("display", "none");
    })

    window.onscroll = function () {
        // 活动窗口顶部超出的距离
        var winTop = window.scrollY;
        // 判读隐藏还是显示
        var a72 = winTop > 66 ? 0 : -72;
        $('.topnav').css('top', a72);
        // 获得城市选择
        var cityBox = document.querySelector('.city-box-parent');
        var oPosition = winTop > 66 ? 'fixed' : 'absolute';
        cityBox.style.position = oPosition;
        if (oPosition == "fixed") {
            cityBox.style.top = '50px';
        } else {
            cityBox.style.position = '66px';
        }
    }
})





// 顶部导航

// 顶部导航浮层
$(function(){
    var pcontent_right_height =( $(".tpbf").offset().top);
    
    $(window).scroll(function(){
    if($(window).scrollTop()>pcontent_right_height){
    
    $(".js-topoption").show();
    }
    else{
    $(".js-topoption").hide();
    }
    
    })
    
    })
// 顶部导航浮层end

