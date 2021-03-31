'use strict';

let userName = prompt('whats your name?');

while (!userName) {
    userName = prompt('please write something');
}


alert('hello ' + userName + 'welcome to the website');

function question1() {
  


let socialSituation=prompt('are you married??');
socialSituation = socialSituation.toUpperCase();

 if(socialSituation==="YES"){
 
 // console.log('socialSituation');
  alert('thats great to hear')

  } else if(socialSituation==="NO"){
  
    //console.log('socialSituation');
    alert ('hope you meet your partner life soon')
  }
}

question1();

function question2() {
  


let hairStyle=prompt('do love the short hair');
hairStyle = hairStyle.toLowerCase();

  if(hairStyle==="yes")
  {
     // console.log('hairStyle');
  alert("yes,it really stylish")

  }
  else if(hairStyle==="no")


{
   // console.log('hairStyle');
    alert('long hair is nice also')
}

}

question2();

function question3() {
  


let colorHair=prompt('do you prefer blond hair');
colorHair=colorHair.toLowerCase();
if(colorHair==="yes"){

    //console.log('yes,it really stylish');
    alert("yes,it really stylish")
}

else if(colorHair==="no"){


   // console.log('black hair is nice also');
    alert('black hair is nice also')
}
}

question3();

function question4() {
  


let Style=prompt('do you prefer formal style');
Style=Style.toLowerCase();

if( Style==="yes"){
   
  //  console.log('yes,it really elegant');
    alert("yes,it really elegant")
}

else if( Style==="no")

{
    //console.log('casual style is nice also');
    alert('casual style  is nice also')
}
}

question4();

function question5() {
  


let music=prompt('do you like rap song');
music=music.toLowerCase();
if( music==="yes"){
    //console.log('yes,it really cool');
    alert("yes,it really cool")
}

else if( music==="no"){

    //console.log('jazz songis nice also');
alert('jazz song is nice also')

}
}

question5();


function question6() {
  


let guessNumber =null;
 
for (let i = 0; i <4; i++) {
     guessNumber=prompt('guess how many times i traveled to u.s.a?');
     guessNumber = parseInt(guessNumber);

     if(guessNumber<2 ){
       guessNumber = alert('it is too low')}
       else if (guessNumber>2) {
         guessNumber = alert ('it is too high')
       } else if (guessNumber === 2) {
         alert('Correct I traveled 2 times')
         break;
       } else {
         alert('please answer with a number')
       }
       if (i===3) {
         alert('The correct answer is 2');
       }
      }
  
}

question6();

function question7() {
  


let brandsOfMakeup=null
let attempts=6
let rightAnswer = ['L’Oreal','Maybelline','NYX','Avon'];



firstLoop: while (attempts) {
brandsOfMakeup=prompt('Guess my favourite brand of makeup');
attempts-=1

for(let i =0;i<rightAnswer.length;i++){
  
  if(brandsOfMakeup===rightAnswer[i]){
alert('Yes, you are right and here are all the correct answers '+ rightAnswer);

break firstLoop;
  }

}
  alert('Sorry, you are wrong');
}
if (!attempts) {
  alert('Thank you for trying, the right answers are '+rightAnswer);
}
}
question7();
