//alert('Hello world');
//browser specific lietas. Browseris mums iedod
//vairak iespju 
//confirm('Hello world');
//DOM - Document object model
//documnet objekts ir html koks
//window - visu ko redzam
// console.log(window);
// console.log(document);
// console.log(document.childNodes);
function buttonClick(){
    var element=document.getElementById('Some-paragraph');
  //console.log(element.innerHTML);//ja mes gribesim manipulet ar HTML dokumentu
  //  console.log(element.innerText); //ja mes gribesim manipulet ar tekstu
   if (element.innerText=='foo')
    {element.innerText = 'bar';}
   else{element.innerText = 'foo';
}
  //element.innerText = 'bar';
  //setTimeout(buttonClick,2000);//pec 2000milisekonudes izpildas 
}
//Atlikta kodu izpilde
//setTimeout(buttonClick,2000);//izpildija p
// setInterval(buttonClick,500);
// unction buttonClick(){
//     var element=document.querySelector('#Some-paragraph');
//   //console.log(element.innerHTML);//ja mes gribesim manipulet ar HTML dokumentu
//   //  console.log(element.innerText); //ja mes gribesim manipulet ar tekstu
//    if (element.innerText=='foo')
//     {element.innerText = 'bar';}
//    else{element.innerText = 'foo';
// }
//alert('checkMe');
//console.log(document.querySelector('.other-paragraph').innerText);//atgriez tiaki pirmo
function checkMe(){
    var elements = document.querySelectorAll('.other-paragraph');
    //console.log(elements);
        for (var i=0;i<elements.length;i++){
      var element = elements[i];
      if (element.innerText =='foo'+i){element.innerText='bar'+i}
            else{element.innerText='foo'+i}
       console.log(element);
        //alert('checkMe');
   }
   //elements = element.join(element);
}

function cl(num){
var element = document.getElementById('number');
var currentValue = parseInt(element.innerText);
element.innerText = currentValue + num;

}

 var count = 0;
 function addCount(){
     count++;
     document.getElementById('counter').innerText=count;

 }
