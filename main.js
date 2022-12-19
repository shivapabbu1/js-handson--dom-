//  const msg=document.getElementById('text').innerHTML
// console.log(msg)
 
//    const tag = document.getElementsByTagName('h1').innerHTML
//   console.log(tag)
 
//  const shiva =document.getElementsByClassName('box').innerHTML
//  console.log(shiva)
//    document.getElementById('demo').innerHTML="hello world"
   function change(){
    let box = document.getElementById('flex-box');
    if(box.style.flexDirection == "row"){
        box.style.flexDirection = "column" ;
      
    }

    else {
        box.style.flexDirection ="row";
    }
};
  




//    var isRow = true;
// var myContainer = document.getElementById("flex-container");
// if(isRow) {
//   myContainer.style.flexDirection = "row";
// }else {
//   myContainer.style.flexDirection = "column";
// }
// document.getElementById('id1').style.color = 'red';

//   function onbtnclick(){
//     document.getElementById('page').innerHTML=" <b>welocome elvation academy</b>"
//   }
// function currentTime() {
//     let date = new Date(); 
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "AM";
  
//     if(hh === 0){
//         hh = 12;
//     }
//     if(hh > 12){
//         hh = hh - 12;
//         session = "PM";
//      }
  
//      hh = (hh < 10) ? "0" + hh : hh;
//      mm = (mm < 10) ? "0" + mm : mm;
//      ss = (ss < 10) ? "0" + ss : ss;
      
//      let time = hh + ":" + mm + ":" + ss + " " + session;
  
//     document.getElementById("time").innerText = time; 
//     let t = setTimeout(function(){ currentTime() }, 1000);
//   }
  
//   currentTime();
// function getOption() {
//     selectElement = document.querySelector('#select1');
//     output = selectElement.value;
//     document.querySelector('.output').textContent = output;
// }