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


var topPart = document.querySelector('.vehicle-classification-right-top');
// 2.获取navBar 导航
var navBar = document.querySelector('.vehicle-classification-left');

// 4.给window添加onscroll事件
window.onscroll = function () {
  if (getScroll().top > topPart.offsetHeight) {
    navBar.classList.add('vehicle-classification-left-fixed');
  } else {
    navBar.classList.remove('vehicle-classification-left-fixed');
  }

}



function getScroll() {
    // var obj = ;
    // obj.left = 
    // obj.top = 
    // 匿名对象
    return {
      left: window.document.body.scrollLeft || window.document.documentElement.scrollLeft || window.pageXOffset || 0,
      top: window.document.body.scrollTop || window.document.documentElement.scrollTop || window.pageYOffset || 0
    };
  }