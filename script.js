let zero=document.getElementById('zero');
let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let five=document.getElementById('five');
let six=document.getElementById('six');
let seven=document.getElementById('seven');
let eight=document.getElementById('eight');
let nine=document.getElementById('nine');
let addition=document.getElementById('addition');
let scren=document.getElementById('scrn')
let subtraction=document.getElementById('sub');
let division=document.getElementById('div');
let multiplcation=document.getElementById('mul');
let decimal=document.getElementById('decimal');
let clear=document.getElementById('clear');
let modulus=document.getElementById('modulus');
let backspace=document.getElementById('backspace');
let equal=document.getElementById('equal');
let keyboard=document.getElementById('keyboard');
//numbers
zero.addEventListener("click",function(){
 scren.value +="0";
});
one.addEventListener("click",function(){
 scren.value +="1";
});
two.addEventListener("click",function(){
 scren.value +="2";
});
three.addEventListener("click",function(){
 scren.value +="3";
});
four.addEventListener("click",function(){

 scren.value +="4";
});
five.addEventListener("click",function(){
 scren.value +="5";
});
six.addEventListener("click",function(){
 scren.value +="6";
});
seven.addEventListener("click",function(){
 scren.value +="7";
});
eight.addEventListener("click",function(){
 scren.value +="8";
});
nine.addEventListener("click",function(){
 scren.value +="9";
});
//operators
addition.addEventListener("click",function(){
 scren.value +="+";
});
subtraction.addEventListener("click",function(){
 scren.value +="-";
});
multiplcation.addEventListener("click",function(){
 scren.value +="*";
});
decimal.addEventListener("click",function(){
 scren.value +=".";
});
modulus.addEventListener("click",function(){
 scren.value +="%";
});
backspace.addEventListener("click",function(){
  scren.value=scren.value.slice(0,-1);
});
equal.addEventListener("click",function (){
   try{
 scren.value =new Function('return '+scren.value)();
   }
   catch(error){
    scren.value="error";
   }
});
division.addEventListener("click",function(){
 scren.value +="/";
});
clear.addEventListener("click",function (){
 scren.value ="";
});
keyboard.addEventListener("click",function(){
 scren.value ="";
});
//keyboard support
document.addEventListener("keydown",(event)=>{
  const key=event.key;
  if((key >='0' && key <='9') || key ==='.'||['+','-','/','*'].includes(key)){
   event.preventDefault();
    scren.value +=key;
  }
  if(key ==='%'){
     event.preventDefault();
      scren.value +='%';
  }
  if(key ==='='|| key ==='Enter'){
     event.preventDefault();
     try{
 scren.value =new Function('return '+scren.value)();
  }
   catch(error){
    scren.value="error";  }
  }
  if(key ==='c'||key ==='Escape'){
    scren.value ="";
  }
});
