//funkcija, kas mekle anagrammas

function anagr(word1, word2) {

    return
    //japarbauda empty spaces
    word1.replace(' ', '').split('').sort().join('') == word2.replace(' ', '').split('').sort().join('');

}
console.log(anagr('cat', 'atc'));
////////////////////////////ClickCOIN//////////////////////

var points = 0;
function ClickMe(num) {
    points += num;
    document.getElementById('AvailablePoints').innerText = points;
    TotalC(num);
}
function TotalC(i) {
    var a = parseInt(document.getElementById('TotalCoins').innerText) + i;
    document.getElementById('TotalCoins').innerText = a;
}

var UpgradeCount = 0;
function UpgradeOne() {
    //alert(points);
    if (points >= 10 + 0.1 * UpgradeCount * 10) {
        points = points - (10 + 0.1 * UpgradeCount * 10);
        UpgradeCount++;
        //document.getElementById('AvailablePoints').innerText=points;  
        setInterval(ClickMe(1),1000);
     }
     
}
//setInterval(UpgradeOne(), 1000);
var UpgradeTenCount = 0;
function UpgradeTen() {
    //alert();
    if (points >= 90) {
        points = points - (10 + 0.1 * UpgradeTenCount * 10);
        UpgradeTenCount++;
        // document.getElementById('AvailablePoints').innerText=points;  
        setTimeout(ClickMe(10), 10);
    }

}


