'use strict';

let userName = prompt('whats your name?');

while (!userName) {
    userName = prompt('please write something');
}


alert('hello ' + userName + 'welcome to the website');

// let socialSituation=prompt('are you married??');

//  if(socialSituation==="YES")
//  socialSituation===socialSituation.toupperCase();
//  {
//  // console.log('socialSituation');
//   alert('thats great to hear')}

//   if(socialSituation==="NO")
//   socialSituation===socialSituation.touppererCase();
//   {
//     //console.log('socialSituation');
//     alert ('hope you meet your partner life soon')
//   }

// let hairStyle=prompt('do love the short hair');

//   if(hairStyle==="yes")
//   hairStyle===hairStyle.tolowerCase();
//   {
//      // console.log('hairStyle');
//   alert("yes,it really stylish")

//   }


// if(hairStyle==="no")
// hairStyle===hairStyle.tolowerCase();
// {
//    // console.log('hairStyle');
//     alert('long hair is nice also')
// }

// let colorHair=prompt('do you prefer blond hair');
// if(colorHair==="yes")
// colorHair===colorHair.tolowerCase();{

//     //console.log('yes,it really stylish');
//     alert("yes,it really stylish")
// }

// if(colorHair==="no")
// colorHair===colorHair.tolowerCase();{

//    // console.log('black hair is nice also');
//     alert('black hair is nice also')
// }



let Style=prompt('do you prefer formal style');
if( Style==="yes")
Style===Style.tolowerCase();{
   
  //  console.log('yes,it really elegant');
    alert("yes,it really elegant")
}

// if( Style==="no")
// Style===Style.tolowerCase();
// {
//     //console.log('casual style is nice also');
//     alert('casual style  is nice also')
// }


// let music=prompt('do you like rap song');
// if( music==="yes")
// music===music.tolowerCase();{
//     //console.log('yes,it really cool');
//     alert("yes,it really cool")
// }

// if( music==="no")
// music===music.tolowerCase();{
//     //console.log('jazz songis nice also');
// alert('jazz song is nice also')

// }M.A.C	Check Price


 
for (let i = 0; i <3; i++) {
  let number=prompt('guess how many times i traveled to u.s.a?');
  if(number<2 ){alert('it is too low')}
    console.log(number);
  if(number<2){alert('it is too low')
  }
   else if(number>2){
    alert("it is too hight")
   }
   alert("the right answer is 2");
}



// for (let i = 0; i <3; i++) {
//   let number=prompt('guess how many times i traveled to u.s.a?');
//   if(number<2 ){alert('it is too low')}
//     console.log(number);
//   if(number<2){alert('it is too low')
//   }
//    else if(number>2){
//     alert("it is too hight")
//    }
//    alert("the right answer is 2");
// }


let brandsOFmakeup = ['L’Oreal','Maybelline','NYX','Avon'];

for (let i = 0; i < 5; i++) 
{ 
  let guessBrand =prompt('guess my favorite brand of makeup?')
  for(let j =0;j<brandsOFmakeup.length;j++){
    if(guessBrand==brandsOFmakeup[i])
    {
      alert("yes you are right")
      i=10;
      alert('oh,no')

    } 
   
  }
    console.log(brandsOFmakeup [i]);
   
}



