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
        $(this).css("height", 0);
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


var sshows = document.querySelectorAll('.sshow');
for (var i = 0; i < sshows.length; i++) {
    sshows[i].onmouseover = function () {
        var index = this.getAttribute("data-index");
        console.log(index);
        var tabs = document.querySelectorAll(".channel-change-modo-one");
        $($(tabs)[index]).siblings().removeClass("show");
        $(tabs)[index].classList.add("show");
        for (var k = 0; k < sshows.length; k++) {
            var cc = "channel-change-nav-" + (k + 1);
            sshows[k].className = cc + ' sshow';
            document.querySelectorAll('.sshow>span')[k].style.display = 'none';
        }
        this.children[0].style.display = 'block';
        this.classList.add("bg" + index);
    }
}




// <!-- 右侧浮层 -->
var oBtn = document.querySelectorAll('.Sell-cars-zcfc-zdw>li');
console.log(oBtn);
var oImg = document.querySelectorAll('.Sell-cars-zcfc-zdw>li>div');
console.log(oImg);
// 2.给a标签添加鼠标移入事件
for (let i = 0; i < oBtn.length; i++) {
    oBtn[i].onmouseover = function () {
        oImg[i].style.display = 'block';
    }

    // 4.鼠标移出 给a标签添加鼠标移出事件
    oBtn[i].onmouseout = function () {

        oImg[i].style.display = 'none';
    }
}
oImg[0].onmouseover = function () {
    oImg[0].style.display = 'block';
}

// 4.鼠标移出 给a标签添加鼠标移出事件
oImg[0].onmouseout = function () {

    oImg[0].style.display = 'none';
}
// 意见反馈
document.querySelector('.Sell-cars-zcfc-yj').onclick = function () {
    // console.log(Sell-cars-zxcj-tck);
    document.querySelector('.Sell-cars-zcfc-yj-zdj').style.display = 'block';
    document.querySelector('#bg').style.display = 'block';
    document.body.style = '  overflow: hidden;';
}
document.querySelector('.Sell-cars-zcfc-yj-zdj-end').onclick = function () {
    document.querySelector('.Sell-cars-zcfc-yj-zdj').style.display = 'none';
    document.querySelector('#bg').style.display = 'none';
    document.body.style = '';
}


// 3.1 获取所有的a标签
var aLink = document.querySelectorAll('.Sell-cars-zcfc-yj-dj-ul>li');
console.log(aLink);
var aSection = document.querySelectorAll(".Sell-cars-zcfc-yj-dj-ul>li>span>i");
// 3.2 遍历所有a标签
for (var i = 0; i < aLink.length; i++) {
    // 3.7 给每个a标签设置一个自定义属性 index  值是索引
    aLink[i].setAttribute('index', i);
    // 3.3 给a标签添加点击事件
    aLink[i].onclick = function () {
        for (var j = 0; j < aLink.length; j++) {
            // 3.4 再次遍历 为了让所有a标签不被选中
            aLink[j].removeAttribute('class');
            // 3.5 再次遍历  为了让所有section隐藏
            aSection[j].style.display = "none";
        }
        // 3.6 让点击的a标签选中
        this.className = 'Sell-cars-zcfc-yj-dj-ul>li>span>i';
        // 3.8 通过获得a标签上的自定义属性的值 让对应的section显示
        aSection[this.getAttribute('index')].style.display = 'block';
    }
}



// 置顶
// 显示
$(function () {
    var pcontent_right_height = ($(".channel-change").offset().top);

    $(window).scroll(function () {
        if ($(window).scrollTop() > pcontent_right_height) {

            $(".Sell-cars-zcfc-zhiding ").show();

        }
        else {
            $(".Sell-cars-zcfc-zhiding ").hide();
        }

    })

})

// 置顶
$('.Sell-cars-zcfc-zhiding ').on('click', function () {
    var timer = setInterval(function () {
        if ($(document).scrollTop() == 0) {
            clearInterval(timer);
        } else {
            $(document).scrollTop($(document).scrollTop() - 30);
        }
    }, 5)
})





// 热卖车型
var selling_ols = document.querySelectorAll(".Selling_cars-nav-nape li");
var odiv = document.querySelectorAll(".dsnone");
for (var i = 0; i < selling_ols.length; i++) {
    selling_ols[i].setAttribute('index', i);
    selling_ols[i].onmouseover = function () {
        for (var j = 0; j < selling_ols.length; j++) {
            selling_ols[j].removeAttribute('class')
            odiv[j].classList.remove('active')
        }
        this.classList.add('col')
        var cc = this.getAttribute('index');

        odiv[cc].classList.add('active')
        console.log(odiv);
    }
}



//买车流程
function maice() {
    // 获取元素
    var oImg = document.querySelectorAll('.buy_sell-background li');
    var oPbtn = document.querySelectorAll('.oUl>li>p');
    // alert(oPbtn);
    var oTitle = document.querySelector('.buy-title');
    var oSubtit = document.querySelector('.buy-subtit');
    var aa = 0;

    $(oPbtn).click(function () {
        var tit1 = this.getAttribute('oTit');
        var tit2 = this.getAttribute('osubTit');
        var oNum = this.getAttribute('data-num');
        // console.log(oNum);
        oTitle.innerText = tit1;
        oSubtit.innerText = tit2;
        $(oImg).removeClass('element-style');
        $(oPbtn).removeClass('text-green');
        this.classList.add('text-green');
        oImg[oNum].className = 'element-style';
        $(oImg[aa]).animate({ "left": "-1000" }, 800, function () {
            $(oImg).css('left', '0');
        });
        aa = oNum;
    })
} maice();


var aa = document.querySelector('.a');
var bb = document.querySelector('.b');
var one = document.querySelector('.buy-one');
var two = document.querySelector('.buy-two');
var back = document.querySelector('.buy_sell-background')
aa.onmouseover = function () {
    two.classList.remove('active')
    one.classList.add('active')
    bb.classList.remove('cc');
    aa.classList.add('cc');
    back.classList.remove('imgtwo')
    back.classList.add("imgone")

}
bb.onmouseover = function () {
    one.classList.remove('active');
    two.classList.add('active');
    aa.classList.remove('cc');
    bb.classList.add('cc');
    back.classList.remove('imgone')
    back.classList.add("imgtwo")
}