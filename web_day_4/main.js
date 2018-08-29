//komentārs
//definēsim mainīgo, javascipt kods strāda arī bez ;
var someNumber = 123; //nav japrecize tipu
var someDecimal=  3.14; //float. atstarpes ir "pieklajibas" lieta
var someWord = 'Hello world';  //var rakstīt arī ""  `` 
var someTue = true ; //boolean(bool)
var someNothing = null; //define mainigo bez vertibas null(nil - c#)

var someArray = ['vaz','zaz','bmw',1,3.14,true];//var pēc pēdēja likt komatu, var nē
var i = 1
//console.log(someArray[i]); //skaita no 0
var jonhy={
    name: 'Jonny',
    surname: 'Doe',
    'full name': 'doe', //citadi ar atstarpēm nedrīkst
    age: '21',
}//definējam objektu.objektam ir key-value paris

//console.log(jonhy["full name"]);

/*var i = 1;
console.log(i);
i = 5; //nevajag var jo browser var izmest error
console.log(i);
i = 'foo';
console.log(i);*/



// var j = 'foo';
// console.log(j);
// j = 'bar';
// console.log(j);
// j = 'baz';
// console.log(j);
// j = 1;
// console.log(j);
// j = 2;
// console.log(j);
// j = 3;
// console.log(j);

//var ar2 = ['foo','bar','baz',]

//+ - * /  %(mod)
var number1 = 2;
var number2 = 4;
var number3 = number2 - number1;
console.log(number3);
 number1 = number1 + 1;
 number1 += 1;
 number1 ++;
 number1 --;

 console.log(-1 / 0);
 console.log('foo '+'bar');
 console.log(1 + '1');
 console.log(1+parseInt('1'));

 var someInt = 123;
 console.log(someInt+'');
// ==  !=  >  < >= <= ===  !== strict comparison
 if (true){
     console.log('was true');
 } else { 
     console.log('was not true');
 }


//  var name = 'Janis';

//  if (name == 'Anna') {
//     console.log('Cau, Anna')

//  } else if (name =='Janis'){
//                 console.log('whats up, janis')
//             }else {
//                 console.log('tevi nepazistu')
//             }

var a = 1;
var b = 2;
var c = 3;
//&& AND, || OR

 
var name = 'Janis';

if (name == 'Janis' 
|| name == 'Karlis' 
|| name == 'Zane') {
    console.log('Cau, zinamais cilveks')
}
else {
    console.log('Nepazinu tevi')
}

//switch statement

switch(name){
    case 'Janis':
    case 'Karlis':
    case 'Zane':
    console.log('Cau, zinamais cilveks');
    break;
default:
console.log('nepazistu');
}


//while cikli
// var i = 0;
// while (i < 10){

// if (i<5){
// console.log(i);

// }
// i++;
// }
//ctrl+c - apturet programmu komandu promta


//izskaita lidz 20 un izvada katru para ciparu
j = 0
while (j<20){
    console.log(j);
    j+=2;
}

j = 20
while (j>0){
    console.log(j);
j--;
}

var i = 0;
while (i < 20){
    i++;
    if (i == 5){
        break; //continue - turpina ciklu no sakuma
    }
    console.log(i);
}
var i = 20;
do { 
console.log(i);
i++;

} while (i<20)

for (var i =0; i<20; i++){
    console.log(i);
}

for (var j = 20; j >=0; j--){
    console.log(j);
}

var cars = ['vaz','gaz','zaz','uaz','maz','bmw'];
// for (var index = 0; index < cars.length; index++) {
//   var car = cara[index]; //katru reizi iterejot izpilda nosacijumu
//     console.log(car);
    
// }
///izvadit vienu elemnentu
//izvadit visus iznemot to vienu

var j = 3;
console.log(cars[j]);
for (var index = 0; index < cars.length; index++) {
    if (index != j){
     console.log(cars[index]); //katru reizi iterejot izpilda nosacijumu
    }
}

//masiva indeks cars.indexOf('uaz')

///funkcijas    
//tiras funkcijas(pure) un funkcijas ar blakus efektu(side effect)

function addTwoNumber(number1,number2) {
    //function body
return number1+number2;
}


console.log(addTwoNumber('uz','mm'));//funkciju var izsaukt ar'i pirms vina defineta
//panem 3 parametrus

function exampleFun(name,age){
    if (name=='Karlis' && age == 50){
        return console.log('Cau, Karli! tev ir 50 gadu');
    }

}

exampleFun('Karlis',50);
exampleFun('Janis',50);
function exampleFun(name,age){
    
        return console.log('Cau, '+name);
    
}
exampleFun('Janis',50);


for (var i = 0; i <= 30; i++){
    if ((i % 2 == 0) && (i % 3 ==0)) {
        console.log('FIZZ BAZZ');
    } else if (i % 3 == 0){
                console.log('BAZZ');
                }
        else if (i % 2 == 0){
                console.log('FIZZ');
                }
                else {console.log(i);
                }
}


for (var i = 0; i<=30; i++){
    var output = '';
    if (i % 2 ==0) { output = 'FIZZ';}
    if (i % 3 ==0) { output += ' BUZZ';}
    if (output == '') {output = i ;}
    console.log(output);
}

//iebuvetas funkcijas nav daudz