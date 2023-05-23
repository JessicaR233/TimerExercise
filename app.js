function countdown(num) {
    let timer = setInterval (function()   {
      if(num >= 2)   {  
        num--;  
      console.log(num);
      }
      else  {
        clearInterval(timer);
        console.log('DONE!');
      }
        
    },1000);  
    
}
    


function randomGame() {
  let num = 0;
  let counter = 0;
  let timer = setInterval(function(){
    num = Math.random();
    counter++;
    if(num > .75) {
    clearInterval(timer);
    console.log(counter);
    }
  },1000)
}



/