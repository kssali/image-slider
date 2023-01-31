var activeimg=1;
var nextimg=1;

setInterval (function(){
    nextimg=nextimg+1;
    if(nextimg < 11){
        document.getElementById('img'+activeimg).classList.replace('visible','hidden');
        document.getElementById('img'+nextimg).classList.replace('hidden','visible')
        activeimg=nextimg;
    }else{
        document.getElementById('img'+activeimg).classList.replace('visible','hidden');
        document.getElementById('img'+nextimg).classList.replace('hidden','visible')
        activeimg=11;
        nextimg=0

    }

},2000)