
document.querySelector('.app-download-sousuo-inpu').onclick=function(){
    document.querySelector('.app-download-sousuo-button-xala').style.display='block';

}
var uLi=document.querySelectorAll('.app-download-sousuo-button-xala>li');
for(var i=0;i<uLi.length;i++){
    uLi[i].onclick=function(){
        document.querySelector('.app-download-sousuo-inpu').value=this.innerHTML;
        document.querySelector('.app-download-sousuo-button-xala').style.display='none';
    
    }
}




     // 底部开始
     var dw = document.getElementsByClassName('Sell-cars-dibu-dv');
     var oPen = document.querySelectorAll('.Sell-cars-dibu-dv-open');
     var clae = document.querySelectorAll('.Sell-cars-dibu-dv-clae');
     var oA = document.querySelectorAll('.Sell-cars-dibu-dv>a');
     oPen[0].onclick = function () {
         oPen[0].style.display = 'none';
         clae[0].style.display = 'block';
         dw[0].style.height = '112px';
         // zdw.style.height=' zHeight'+"px";
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


// 登录
document.querySelector('.app-download-sousuo-denglu-a').onclick = function () {
    document.querySelector('.Sell-cars-ding-right-denglu').style.display = 'block';
    document.querySelector('#bg').style.display = 'block';
    document.body.style=' overflow: hidden';
}
document.querySelector('.end').onclick = function () {
    document.querySelector('.Sell-cars-ding-right-denglu').style.display = 'none';
    document.querySelector('#bg').style.display = 'none';
    document.body.style='';
}



