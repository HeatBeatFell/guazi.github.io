/* 下拉菜单点击显示隐藏 */
var span = document.querySelector('.nav-top-right span');
var span2 = document.querySelector('.nav-top-right-xl-div span');
var oDiv = document.querySelector('.nav-top-right-xl-div');
span.onclick = function () {
    oDiv.style.display = 'block';
}
span2.onclick = function () {
    oDiv.style.display = 'none';
}


/* 关于app鼠标移入移出部分 */
document.querySelector('.nav-top-right-xl-div-city').onmouseover = function () {
    this.style.overflow = 'auto';
}
document.querySelector('.nav-top-right-xl-div-city').onmouseout = function () {
    this.style.overflow = 'hidden';
}


/* 搜索框焦点事件 */
document.querySelector('#search').onfocus = function () {
    document.querySelector('.nav-top-right-search ul').style.display = 'block';
}
document.querySelector('#search').onblur = function () {
    document.querySelector('.nav-top-right-search ul').style.display = 'none';
}


/* 点击图片弹出红包 */
document.querySelector('.middle-img').onclick = function () {
    document.querySelector('.middle').style.display = 'block';
    document.querySelector('.middle-div').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
}
document.querySelector('.pop-up-box').children[1].onclick = function () {
    document.querySelector('.middle').style.display = 'none';
    document.querySelector('.middle-div').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
}

/* 中部点击弹出框 */
var test = document.querySelector(".middle-navigation-right-bottom-p");
var div = document.querySelector(".middle-navigation-right-tck");
test.onclick = function (e) {
    e = e || event;
    e.cancelBubble = true;
    div.style.display = "block";
}
document.onclick = function () {
    div.style.display = "none";
}


document.querySelector('.fixation-li-div2').onmouseover = function () {
    this.style.display = 'none';
}


/* 固定定位部分 */
var aLi = document.querySelector('.fixation').children;
for (var i = 0; i < aLi.length; i++) {
    aLi[i].onmouseover = function () {
        for (var j = 0; j < aLi.length; j++) {
            aLi[j].classList.remove('active');
        }

        this.classList.add('active');
    }
    aLi[i].onmouseout = function () {
        this.classList.remove('active');
    }
}



var oBtn = document.querySelector('.fixation-a');
//获取可视区域的高度
var clientHeight = document.documentElement.clientHeight;
//滚动条事件
window.onscroll = function () {
    //获取滚动条滚动出去的高度
    var gd = document.documentElement.scrollTop || document.body.scrollTop;
    //判断滚动出去的高度是否大于等于可视区域的高度
    if (gd >= clientHeight) {
        //大于的话就显示按钮图片
        oBtn.style.display = 'block';
    } else {
        //否则就隐藏
        oBtn.style.display = 'none';
    }
}
oBtn.onmouseover = function () {
    this.classList.add('active');
}
oBtn.onmouseout = function () {
    this.classList.remove('active');
}
//给按钮添加点击事件
oBtn.onclick = function () {
    //获取滚动条滚动出去的高度
    var gd = document.documentElement.scrollTop || document.body.scrollTop;
    //让滚动条滚动出去的高度等于0；
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}




/* 类似于轮播图部分 */
var aI = document.querySelector('.bask-single-i');
var aI2 = document.querySelector('.bask-single-i2');
var xk = document.querySelector('.bask-single-slideshow');
var xkWidth = xk.offsetWidth;
var oUl = document.querySelector('#ul');
var num = 0;
aI.onclick = function () {
    if (num < oUl.children.length) {
        num++;
        animate(oUl, -num * 410);
    }
}
aI2.onclick = function () {
    if (num > 0) {
        num--;
        animate(oUl, -num * 410);
    }
}










function animate(elem, target) {
    // 1.清除定时器
    clearInterval(elem.timer);
    // 2.获取元素的当前位置
    var current = elem.offsetLeft;
    // 3.声明定时器
    elem.timer = setInterval(function () {
      // 4.声明步进值
      var step = (target - current) / 10;
      // 5.判断一下  当前位置是否小于目标值
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      // 6.累加
      current += step;
      elem.style.left = current + 'px';
      // 7.判断 目标值-当前值 的绝对值  > 步进值的绝对值吗
      if (current == target) {
        clearInterval(elem.timer);
      }
    }, 20)
  }