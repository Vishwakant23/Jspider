
let minTag=document.getElementById('min');
let secTag=document.getElementById('sec');
let msecTag=document.getElementById('m-sec');
let startBtn=document.getElementById('start-btn');
let stopBtn=document.getElementById('stop-btn');
let resetBtn=document.getElementById('reset-btn');

let min=0;
let sec=0;
let mSec=0;
let timerRunning=true;


function timer()
{
    mSec=mSec+10;
    if(mSec==1000)
    {
        sec=sec+1;
        mSec=0;
        if(sec===60)
        {
            min=min+1;
            sec=0;
        }
    }
    msecTag.innerText=concatZero(mSec);
    secTag.innerText=concatZero(sec);
    minTag.innerText=concatZero(min);    
}


let interval=null;
startBtn.addEventListener('click',function()
{
    if(timerRunning)
    {
        interval=setInterval(timer,10);
        timerRunning=false;
    }
});

stopBtn.addEventListener('click',function()
{
    if(!timerRunning)
    {
        clearInterval(interval);
        timerRunning=true;
    }
});

resetBtn.addEventListener('click',function()
{
    min=0;
    sec=0;
    mSec=0;
    timerRunning=true;
    clearInterval(interval);
    secTag.innerText="00";
    msecTag.innerText="00";
    minTag.innerText="00";
})


//Concat Zero

function concatZero(time)
{
    if(time<=9)
    {
        return "0"+time;
    }
    else
    {
        return time;
    }
}