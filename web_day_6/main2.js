//isEven
//pure functions
function isEven(a){
    return (a %  2 === 0);
}

console.log(isEven(5));

function isEven2(a){
    return a % 2 == 0?'is even':'is odd'; //saisinats ifelse statement
}
console.log(isEven2(6));

function FizzBazz(a){
    var c = '';
    var b = '';
    a%2 == 0? c='Fizz':c='';
    a%3 == 0? b='Buzz':b='';
    return c+b==''? a :c+b;
}
console.log(FizzBazz(7));

//otrais variants (jaizvelas parskatamako)
function FizzBazz2(a){
    var c = '';
    a%2 == 0? c='Fizz':c='';
    a%3 == 0? c+='Buzz':c=c;
    return c==''? a :c;
}
console.log(FizzBazz2(3));

var isEven2 = function(number){
    return number %2 ==0?' is even':' is odd';
}

console.log('number'+isEven2(2))

var cat = {
name: 'Muris',
hunger: 10,
//funkcija ieks objekta sauc par metodi
feed: function(){
        this.hunger--;
            }

}
console.log(cat);
cat.feed();
console.log(cat);


//Objekti
//Math - iebuvets objekts
console.log(Math.PI);
//funkcijas ir maz.parsvara izmanto objektus\

console.log(Math.pow(2,3));
//ir statiskie objekti un ir instatial objekti
var now =new Date();
//universal time zone ;
//datumu un laiku glaba ka vienu skaitli - timestamp
console.log();
//javascript\a visi mainigii ari ir objekti

var foo='bar';
console.log(foo.length);

//split funkcija sadala masiva
//masiviem pielietojot metodi tiek izmainits ari pats masivs

//array[]='push' //pieliek beigas
//array.splice(1,1); //1-kuru elementu nemt, 2- cik daudz
//jauztaisa funkcija kas ka par-vardu


//Majas darbs (objects methods)

//1.Jauztaisa funkcija kas ka parametru sanem vienu vardu un atgriez so vardu spogulraksta

function mirror(a){
a.split('').reverse().join(''); //split in characters
return

}
console.log(mirror('thebestword'));

// function mirror2(a){
//     a.split(""); //split in characters
    
//     a.join("");

//     }
//     console.log(mirror2('thebestword'));

//2.funkcija, kas parbauda palindroms
function palindrom(a){
    if (a==a.split("").reverse().join('')){return true}
    else return false

}

console.log(palindrom('kak'));












