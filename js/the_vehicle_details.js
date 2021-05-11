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


/* 搜索框焦点事件 */
document.querySelector('#search').onfocus = function () {
    document.querySelector('.nav-top-right-search ul').style.display = 'block';
}
document.querySelector('#search').onblur = function () {
    document.querySelector('.nav-top-right-search ul').style.display = 'none';
}

// 获取相框
var view = document.querySelector('#view');
// 获取相框的宽度
var viewWidth = view.offsetWidth;
// 获取ul
var oUl = view.children[0];
var oLi = oUl.children;
// 获取按钮
var left = document.querySelector('#left');
var right = document.querySelector('#right');
var img = document.querySelectorAll('.car-hire-box-left-div-ul img');
var span = document.querySelectorAll('.car-hire-box-left-bottom-ul span');
document.querySelectorAll('.car-hire-box-left-bottom-ul span')[0].className = 'active';
console.log(span)
// document.querySelector('.car-hire-box-left-bottom-ul span')[0].className = 'active';
// 定义步进值
var num = 0;
var numl = 1;
for (var i = 0; i < span.length; i++) {
    //创建index 值是i
    span[i].setAttribute('index', i);
    //给所有的oLi添加点击事件
    span[i].onclick = function () {
        //给点击数字赋值，目的完成点击数字后自动播放和点击左右轮播使用
        num = i;
        //再次遍历删除oLi中的class
        for (var j = 0; j < span.length; j++) {
            span[j].removeAttribute('class');
        }
        //给点击的那个oLi添加class
        this.className = 'active';
        //获取鼠标点击那个的oLi身上的index属性
        var index = this.getAttribute('index');
        num = index;
        //移动ul
        animate(oUl, -index * 120);
    }
}
//给左边按钮添加点击事件
right.onclick = fn;
//定义定时器让其自动轮播
//  var timer = setInterval(fn, 2000);
// 封装函数
function fn() {
    //判断num是不是小于oLi的长度-1
    if (num == oLi.length - 1) {
        // 如果是就让num = 0；
        num = 0;
        //让ul瞬间回到0px的位置
        oUl.style.left = 0 + 'px';
      
    }
    numl++;
    document.querySelector('#span').innerText = numl + '/' + '97';
    //num自增
    num++;
    //移动ul
    animate(oUl, -num * viewWidth);
    //判断索引是不是oLi的-1
    if (num > span.length - 1) {
        //如果是让最后一个元素的class为空
        span[span.length - 1].className = '';
        //让第一个元素的class为active
        span[0].className = 'active';
    } else {
        //遍历oLi清除里面的class
        for (var i = 0; i < span.length; i++) {
            span[i].removeAttribute('class');
        }
        //让索引为num的oLi添加class为active
        span[num].className = 'active';
    }
}
//给右边按钮添加点击事件
left.onclick = function () {
    //判断num是不是第一个
    if (num == 0) {
        //如果是就回到倒数第二个
        num = oLi.length - 1;
        //让ul瞬间回到倒数第二个
        oUl.style.left = -num * viewWidth + 'px';
    }
    numl--;
    document.querySelector('#span').innerText = numl + '/' + '97';
    //num自减
    num--;
    //移动ul
    animate(oUl, -num * viewWidth);
    //判断索引是不是oLi的-1
    if (num > span.length - 1) {
        //如果是让最后一个元素的class为空
        span[span.length - 1].className = '';
        //让第一个元素的class为active
        span[0].className = 'active';
    } else {
        //遍历所有的oLi
        for (var i = 0; i < span.length; i++) {
            //移除oLi身上的class
            span[i].removeAttribute('class');
        }
        //让索引为num的oLi添加class
        span[num].className = 'active';
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


/* 固定定位部分 */
var aLi = document.querySelector('.fixation').children;
for (var i = 0; i < aLi.length; i++) {
    aLi[i].onmouseover = function () {
        for (var j = 0; j < aLi.length; j++) {
            aLi[j].classList.remove('active2');
        }

        this.classList.add('active2');
    }
    aLi[i].onmouseout = function () {
        this.classList.remove('active2');
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
    this.classList.add('active2');
}
oBtn.onmouseout = function () {
    this.classList.remove('active2');
}
//给按钮添加点击事件
oBtn.onclick = function () {
    //获取滚动条滚动出去的高度
    var gd = document.documentElement.scrollTop || document.body.scrollTop;
    //让滚动条滚动出去的高度等于0；
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}



document.querySelector('.car-hire-box-right-div5-p').onmouseover = function () {
    document.querySelector(".car-hire-box-right-div5-p-div").style.display = 'block';
}
document.querySelector('.car-hire-box-right-div5-p').onmouseout = function () {
    document.querySelector(".car-hire-box-right-div5-p-div").style.display = 'none';
}