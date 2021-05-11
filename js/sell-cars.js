



// 登录
    document.querySelector('.Sell-cars-ding-right-dengluanniu').onclick = function () {
        document.querySelector('.Sell-cars-ding-right-denglu').style.display = 'block';
        document.querySelector('#bg').style.display = 'block';
        document.body.style=' overflow: hidden';
    }
    document.querySelector('.end').onclick = function () {
        document.querySelector('.Sell-cars-ding-right-denglu').style.display = 'none';
        document.querySelector('#bg').style.display = 'none';
        document.body.style='';
    }
// 最新成交 轮播图
var box = document.querySelector('.Sell-cars-zxcj-zdw');
var boxWidth = box.offsetWidth;
var oUl = document.querySelector('.Sell-cars-zxcj-ul');
var aLi = document.querySelectorAll('.Sell-cars-zxcj-ul>li');
var num = 0;  
  // 6.声明定时器
  var timer = setInterval(function () {
    // 9.判断一下 计数变量是不是 等于最后一个li的索引
    if (num == aLi.length - 1) {
      // 9.1 让num为0
      num = 0;
      // 9.2 让ul的left为0 让ul重新移动
      oUl.style.left = num + 'px';
    }

    // 7.让计数变量自增
    num++;
    // 8.移动ul
    animate(oUl, -num * boxWidth);
  }, 1500)




function animate(elem, target) {
    var current = elem.offsetLeft;
    clearInterval(elem.time);
    elem.time = setInterval(function () {
        var step = 10;
        step = current < target ? step : -step;
        current += step;
        if (Math.abs(target - current) > Math.abs(step)) {
            elem.style.left = current + 'px';
        } else {
            elem.style.left = target + 'px';
            clearInterval(elem.time);
        }
    }, 100)
}

// 最新成交  查看成交车源
document.querySelector('.Sell-cars-zxcj-a').onclick = function () {
    // console.log(Sell-cars-zxcj-tck);
    document.querySelector('.Sell-cars-zxcj-tck').style.display = 'block';
    document.querySelector('#bg').style.display = 'block';
    document.body.style='  overflow: hidden;';
}
document.querySelector('.Sell-cars-zxcj-tck-end').onclick = function () {
    document.querySelector('.Sell-cars-zxcj-tck').style.display = 'none';
    document.querySelector('#bg').style.display = 'none';
    document.body.style='';
}


// 底部开始
    var dw=document.getElementsByClassName('Sell-cars-dibu-dv');
var oPen=document.querySelectorAll('.Sell-cars-dibu-dv-open');
var clae=document.querySelectorAll('.Sell-cars-dibu-dv-clae');
var oA=document.querySelectorAll('.Sell-cars-dibu-dv>a');
    oPen[0].onclick=function(){
        oPen[0].style.display='none';
        clae[0].style.display='block';
        dw[0].style.height='112px';
        // zdw.style.height=' zHeight'+"px";
    }
    clae[0].onclick=function(){
        clae[0].style.display='none';
        oPen[0].style.display='block';
        dw[0].style.height='';
    }

    oPen[1].onclick=function(){
        oPen[1].style.display='none';
        clae[1].style.display='block';
        dw[1].style.height='112px';
    }
    clae[1].onclick=function(){
        clae[1].style.display='none';
        oPen[1].style.display='block';
        dw[1].style.height='';
    }



    oPen[2].onclick=function(){
        oPen[2].style.display='none';
        clae[2].style.display='block';
        dw[2].style.height='112px';
    }
    clae[2].onclick=function(){
        clae[2].style.display='none';
        oPen[2].style.display='block';
        dw[2].style.height='';
    }
// 顶部导航浮层
$(function(){
    var pcontent_right_height =( $(".Sell-cars-gzbmfw").offset().top);
    
    $(window).scroll(function(){
    if($(window).scrollTop()>pcontent_right_height){
    
    $(".Sell-cars-dbfc").show();
    }
    else{
    $(".Sell-cars-dbfc").hide();
    }
    
    })
    
    })
// 顶部导航浮层end
// <!-- 右侧浮层 -->
var oBtn = document.querySelectorAll('.Sell-cars-zcfc-zdw>li');
var oImg = document.querySelectorAll('.Sell-cars-zcfc-zdw>li>div');
// 2.给a标签添加鼠标移入事件
for(let i=0;i<oBtn.length;i++){
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
    document.body.style='  overflow: hidden;';
}
document.querySelector('.Sell-cars-zcfc-yj-zdj-end').onclick = function () {
    document.querySelector('.Sell-cars-zcfc-yj-zdj').style.display = 'none';
    document.querySelector('#bg').style.display = 'none';
    document.body.style='';
}


  // 3.1 获取所有的a标签
  var aLink = document.querySelectorAll('.Sell-cars-zcfc-yj-dj-ul>li');
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
$(function(){
    var pcontent_right_height =( $(".Sell-cars-zxcj").offset().top);
    
    $(window).scroll(function(){
    if($(window).scrollTop()>pcontent_right_height){
    
    $(".Sell-cars-zcfc-zhiding ").show();
    
    }
    else{
    $(".Sell-cars-zcfc-zhiding ").hide();
    }
    
    })
    
    })

// 置顶
$('.Sell-cars-zcfc-zhiding ').on('click',function(){
    var timer=setInterval(function(){
        if($(document).scrollTop()==0){
            clearInterval(timer);
        }else{
            $(document).scrollTop($(document).scrollTop()-30);
        }
    },5)
})





// 搜索框
var nr=document.querySelector('.Sell-cars-zi-sousuo-ip');
document.querySelector('.Sell-cars-zi-sousuo-mfmc').onclick=function(){
    if(nr.value.length==0){
        nr.value='请输入手机号码';
        nr.style.color='#ff7e00';
    }
}
nr.onclick=function(){
    if(      nr.value=='请输入手机号码'){
        nr.value='';
        nr.placeholder="";
        nr.style.color='';
    }


}




// 估价
document.querySelector('.Sell-cars-zi-sousuo-ksgj').onclick = function () {
    document.querySelector('.pop-box').style.display = 'block';
    document.querySelector('#bg').style.display = 'block';
    document.body.style=' overflow: hidden';
}
document.querySelector('.pop-close').onclick = function () {
    document.querySelector('.pop-box').style.display = 'none';
    document.querySelector('#bg').style.display = 'none';
    document.body.style='';
}
// 车源地
var aniu=document.querySelectorAll('.conselect');


aniu[0].onclick=function(){
    document.querySelectorAll('.down-box')[1].style.display='none';
    document.querySelectorAll('.down-box')[0].style.display='block';
    
}
aniu[1].onclick=function(){
    document.querySelectorAll('.down-box')[0].style.display='none';
    document.querySelectorAll('.down-box')[1].style.display='block';
    
}

// document.querySelector('.pop-box').onclick=function(){
    
//     document.querySelectorAll('.down-box')[0].style.display='none';
//     document.querySelectorAll('.down-box')[1].style.display='none';
// }
var oLi=document.querySelectorAll('.com-li');
var add=document.querySelectorAll('.inputype');


for(var i=0;i<oLi.length;i++){
    
    oLi[i].onclick=function(){
        for(var j=0;j<add.length;j++){
            add[0].value=this.innerHTML;
        }
       
    }
}