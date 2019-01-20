document.getElementById('submit').style.opacity=0;
document.getElementById('quize_body').style.opacity=0;
var i=0,j=0,value=0,total_question;
var ques,correct;

function next_question(){
document.getElementById('quize_body').style.opacity=1;
document.getElementById('start').style.opacity=0;
document.getElementById('btn1').style.backgroundColor="Black";
switch (i) {
  case i:
  ques=quize[i].question;
document.getElementById('question_no').innerHTML=ques;
total_question=quize.length;

if(i == total_question-1){

document.getElementById('submit').style.opacity=1;

}
    break;
}
var answ=quize[i].answere1;
var answ1=quize[i].answere2;
var answ2=quize[i].answere3;
var answ3=quize[i].answere4;
document.getElementById('btn0').innerHTML=answ;
document.getElementById('btn1').innerHTML=answ1;
document.getElementById('btn2').innerHTML=answ2;
document.getElementById('btn3').innerHTML=answ3;
 correct=quize[i].correctanswere;
i++;
}

function clickk()
{
var x = document.getElementById("btn0").innerText;

if(x == correct){

value++;
}
 next_question();
}
function clickk1()
{
var x = document.getElementById("btn1").innerText;

if(x == correct){

value++;
}
 setTimeout(next_question,1000);
}
function clickk2()
{
var x = document.getElementById("btn2").innerText;
if(x == correct){
value++;
}
 next_question();
}
function clickk3()
{
var x = document.getElementById("btn3").innerText;
if(x == correct){

value++;
}
 next_question();
}
function result(){
document.getElementById("result").innerHTML = "Your Score :"+ value;
}
