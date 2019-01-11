/**
 * Created by dell on 2017/7/17.
 */
window.onload = function () {
    var con = document.getElementById('conq'),
        sec = document.getElementById('sec').getElementsByTagName('img'),
        thr = document.getElementById('thr').getElementsByTagName('li'),
        index = 0 ,
        timer = null;
    timer = setInterval(autoPlay,3000);
    con.onmouseover = function () {
        clearInterval(timer);
    }
    con.onmouseout = function () {
        timer =  setInterval(autoPlay,3000);
    }
    for (var i =0;i<thr.length;i++){
        thr[i].onmouseover = function () {
            clearInterval(timer);
            index = this.innerHTML - 1;
            changeSec(index);
        }
    }
    function autoPlay() {
        if(++index >= sec.length) index = 0;
        changeSec (index);
    }
    function changeSec(cur) {
        for (var i=0;i<sec.length;++i){
            sec[i].style.display = "none";
            thr[i].className = "";
        }
        sec[cur].style.display = "block";
        thr[cur].className = "on";
    }

    var speed=10; //数字越大速度越慢
    var tab=document.getElementById("demo");
    var tab1=document.getElementById("demo1");
    var tab2=document.getElementById("demo2");
    tab2.innerHTML=tab1.innerHTML;
    function Marquee(){
        if(tab2.offsetWidth-tab.scrollLeft<=0)
            tab.scrollLeft-=tab1.offsetWidth
        else{
            tab.scrollLeft++;
        }
    }
    var MyMar=setInterval(Marquee,speed);
    tab.onmouseover=function() {clearInterval(MyMar)};
    tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
}