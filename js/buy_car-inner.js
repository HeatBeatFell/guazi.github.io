$(function () {
    $(".topnav-cicty").mouseover(function () {
        $(".city-box-parent").css("display", "block");
    }).mouseout(function () {
        $(".city-box-parent").css("display", "none");
    })


    $(".city-box-parent").mouseover(function () {
        $(this).css("display", "block")
    }).mouseout(function () {
        $(this).css("display", "none");
    })



    var bigbox = document.querySelector('.center-details-left-smallimage');
    var left = document.querySelector('.prev-smallimg');
    var right = document.querySelector('.next-smallimg');
    var oul = document.querySelector('ul.rel');
    var oulchren = document.querySelectorAll('ul.rel>li');
    var ospan = document.querySelector('.f20');
    var num = 0;
    $(left).click(lunbol);
    function lunbol() {
        if (-num * 500 > -3000) {
            num++;
            $(oul).animate({ 'left': -num * 500 })
        } else {
            $(oul).animate({ 'left': -3115 })
        }

    }


    $(right).click(lunbor);
    function lunbor() {
        if (-num * 500 >= -3115 && -num * 500 < 0) {
            num--;
            $(oul).animate({ 'left': -num * 500 })
        } else {
            $(oul).animate({ 'left': 0 })
        }

    }



    for (var i = 0; i < oulchren.length; i++) {
        oulchren[i].setAttribute('index', i)
        oulchren[i].onclick = function () {
            var index = this.getAttribute('index');
            ospan.innerHTML = Number(index) + 1;
            $('ul.rel span').removeClass("active");
            $(this.children[0]).addClass("active");
        }
    }


})










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














// 顶部
// 顶部导航浮层
$(function () {
    var pcontent_right_height = ($(".center-inspect").offset().top);

    $(window).scroll(function () {
        if ($(window).scrollTop() > pcontent_right_height) {

            $(".top-nav").show();
        }
        else {
            $(".top-nav").hide();
        }

    })

})
// 顶部导航浮层end






// id 点击按钮
var oLi = document.querySelectorAll('.nav-l li');
for (var i = 0; i < oLi.length; i++) {
    oLi[i].onclick = function () {
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].style.color = '#fff';
            oLi[j].style.backgroundColor = '#ffffff';
        }
        this.style.color = '#ffffff';
        this.style.backgroundColor = '#2abd53';
    }
}











// <!-- 预约看车 -->
document.querySelector('.js-apt').onclick = function () {
    document.querySelector('.show').style.display = 'block';
    document.querySelector('#bg').style.display = 'block';
    document.body.style=' overflow: hidden';
}
document.querySelector('.pop-close').onclick = function () {
    document.querySelector('.show').style.display = 'none';
    document.querySelector('#bg').style.display = 'none';
    document.body.style='';
}
// <!-- 我要砍价 -->
document.querySelector('.js-bargain').onclick = function () {
    document.querySelector('.js-pop-bargain').style.display = 'block';
    document.querySelector('#bg').style.display = 'block';
    document.body.style=' overflow: hidden';
}
document.querySelector('.pop-close1').onclick = function () {
    document.querySelector('.js-pop-bargain').style.display = 'none';
    document.querySelector('#bg').style.display = 'none';
    document.body.style='';
}
// 免费咨询
document.querySelector('.js-freePhone').onclick = function () {
    document.querySelector('.pop-box3').style.display = 'block';
    document.querySelector('#bg').style.display = 'block';
    document.body.style=' overflow: hidden';
}
document.querySelector('.pop-close3').onclick = function () {
    document.querySelector('.pop-box3').style.display = 'none';
    document.querySelector('#bg').style.display = 'none';
    document.body.style='';
}

