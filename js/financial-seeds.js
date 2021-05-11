

// 置顶
$('.btn2').on('click', function () {
    var timer = setInterval(function () {
        if ($(document).scrollTop() == 0) {
            clearInterval(timer);
        } else {
            $(document).scrollTop($(document).scrollTop() - 30);
        }
    }, 5)
})
// 定制方案
var tex = document.querySelector('.fullInput');
console.log(tex);
document.querySelector('.loanBtn').onclick = function () {
    if (tex.value.length == 0) {
        document.querySelector('.loanBtn').onblur = function () {
        }
        tex.style.border = '1px solid red';
        document.querySelector('#selfErrorTip').style.display = 'block';
    } else {
        tex.style.border = '1px solid #dddddd';
        document.querySelector('#selfErrorTip').style.display = 'none';
    }
}
tex.onclick=function(){
    if(    tex.style.border =='1px solid red'){
        tex.style.border = '1px solid #dddddd';
        document.querySelector('#selfErrorTip').style.display = 'none';
    }
}

// 微信
document.querySelector('.square').onmouseover = function () {
    document.querySelector('.square>p').style.display = 'block';
    document.querySelector('.wx-code>.codebox').style.display = 'block';
}

// 4.鼠标移出 给a标签添加鼠标移出事件
document.querySelector('.square').onmouseout = function () {
    document.querySelector('.wx-code>.codebox').style.display = 'none';
    document.querySelector('.square>p').style.display = 'none';
}
// 二维码
document.querySelector('.wx-code>.codebox').onmouseover = function () {
    document.querySelector('.square>p').style.display = 'block';
    document.querySelector('.wx-code>.codebox').style.display = 'block';
}

// 4.鼠标移出 给a标签添加鼠标移出事件
document.querySelector('.wx-code>.codebox').onmouseout = function () {
    document.querySelector('.square>p').style.display = 'none';
    document.querySelector('.wx-code>.codebox').style.display = 'none';
}