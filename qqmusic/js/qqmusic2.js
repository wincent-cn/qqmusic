window.onload=function()
{
var left=document.getElementById("left");
var right=document.getElementById("right");
var mainimg=document.getElementById("mainimg");
var li=document.getElementsByClassName("buttonli");
var sum=mainimg.style.left;
var index=0;
var pointcolor=function(index)
    {
        mainimg.style.left=sum+"px";
        for(var i=0;i<li.length;i++)
        {
            li[i].style.background="";
            if(i==index)
            {
                li[i].style.background="grey";

            }
            setpoint(i);//为每个point绑定响应函数
        }
    }
    var setpoint=function (index)
    {           
        li[index].onclick=function ()
        {
         sum=-1200*index;
         pointcolor(index);
        }
    }
    pointcolor(index);
    right.onclick=function ()//下一张响应函数
    {
        sum-=1200; 

        index++;
        if (sum<-2400)//最后一张的下一站为第一张
        {
            sum=0;
            index=0;
        }
        pointcolor(index);//每次切换后都要更新一下底部point颜色
    }
    left.onclick=function ()//上一张响应函数
    {
        sum+=1200;
        index--;
        if (sum>0)//第一张的前一张为最后一张
        {
            sum=-2400;
            index=2;
        }
        pointcolor(index);//每次切换后都要更新一下底部point颜色
    }
}