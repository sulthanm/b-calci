var button = document.getElementsByClassName("button");
var display = document.getElementById('display');
var operator=null;
var number1=0;
var number2=0;
for(var i=0;i<button.length;i++){
	button[i].addEventListener('click',function(){
    var value= this.getAttribute('data-value')
    //console.log(value);
    if(value == '%'){
      number1=parseFloat(display.textContent);
      display.innerHTML="";
      operator='%';
      
    }
    else if(value == '/'){
      number1=parseFloat(display.textContent);
      display.innerHTML="";
      operator='/';
      
    }
    else if(value == 'x'){
      number1=parseFloat(display.textContent);
      display.innerHTML="";
      operator='x';
      
    }
    else if(value == '-'){
      number1=parseFloat(display.textContent);
      display.innerHTML="";
      operator='-';
      
    }
    else if(value == '+'){
      number1=parseFloat(display.textContent);
      display.innerHTML="";
      operator='+';
      
    }
    else if(value == 'AC'){
      display.innerHTML="";
      
    }
    else if(value == '+/-'){
      number1=parseFloat(display.textContent);
      display.innerHTML=number1*-1;
      
    }
    else if(value == 'dot'){
      var number=display.innerText+'.';
      display.innerText=number;
      
    }
    else if(value == '='){
      number2=parseFloat(display.textContent);
      display.innerHTML="";
      if(operator == '%'){
        display.innerText=number1%number2;
        
      }
      else if(operator == '/'){
        display.innerText=number1/number2;
        
      }
      else if(operator == 'x'){
        display.innerText=number1*number2;
        
      }
      else if(operator == '-'){
        display.innerText=number1-number2;
        
      }
      else if(operator == '+'){
        display.innerText=number1+number2;
        
      }
    }
    else{
     display.innerText += value;
    }
  });
}