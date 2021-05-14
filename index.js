// for the question no
let no_of_questions=10;
let done=[1,1,1,0,0,0,0,0,0,0];
let current=4;
let html="";
for(let i=0;i<no_of_questions;i++)
{
       if(done[i]==1){
            html=`<div class=' num bg-warning text-white'>${i+1}</div>`;
       } 
       else if(current==i)
       {
        html=`<div class=" num current">${i+1}</div>`;
       }
       else{
            html=`<div class=" num">${i+1}</div>`;
       }
      
       document.getElementById("qdisplay").innerHTML+=html;
      
}
// for the questions and options
let total_questions=10;
let completed_ques=2;
let current_question=3;
document.getElementById("no_q1").innerHTML=current_question;
document.getElementById("total1").innerHTML=total_questions;
document.getElementById("no_q").innerHTML=current_question;
document.getElementById("total").innerHTML=total_questions;
