var pens = 0;
var nicks = 0;
var dimes = 0;
var quart = 0;
var sPens = 0;
var sNicks = 0;
var sDimes = 0;
var sQuarts = 0;
var money = 0;


function initialize() {
    totalPen = document.getElementById("totalPen");
    totalNickel = document.getElementById("totalNickel");
    totalDime = document.getElementById("totalDime");
    totalQuarter = document.getElementById("totalQuarter");

    sumPen = document.getElementById("sumPen");
    sumNickel = document.getElementById("sumNickel");
    sumDime = document.getElementById("sumDime");
    sumQuarter = document.getElementById("sumQuarter");

    sumMoney = document.getElementById("sumMoney");
}

function addPenny() {
    if(pens >= 0){
        pens += 1;
        sPens += 0.01;
        sPens = Math.round(100*sPens)/100;
        money += 0.01;
        money = Math.round(100*money)/100;
    }
    display();
}
function subPenny() {
    if(pens > 0){
        pens -= 1;
        sPens -= 0.01;
        sPens = Math.round(100*sPens)/100;
        money -= 0.01;
        money = Math.round(100*money)/100;
    }
    display();
}
function addNickel() {
    if(nicks >= 0){
        nicks += 1;
        sNicks += 0.05;
        sNicks = Math.round(100*sNicks)/100;
        money += 0.05;
        money = Math.round(100*money)/100;
    }
    display();
}
function subNickel() {
    if(nicks > 0){
        nicks -= 1;
        sNicks -= 0.05;
        sNicks = Math.round(100*sNicks)/100;
        money -= 0.05;
        money = Math.round(100*money)/100;
    }
    display();
}
function addDime() {
    if(dimes >= 0){
        dimes += 1;
        sDimes += 0.10;
        sDimes = Math.round(100*sDimes)/100;
        money += 0.10;
        money = Math.round(100*money)/100;
    }
    display();
}
function subDime() {
    if(dimes > 0){
        dimes -= 1;
        sDimes -= 0.10;
        sDimes = Math.round(100*sDimes)/100;
        money -= 0.10;
        money = Math.round(100*money)/100;
    }
    display();
}
function addQuarter() {
    if(quart >= 0){
        quart += 1;
        sQuarts += 0.25;
        sQuarts = Math.round(100*sQuarts)/100;
        money += 0.25;
        money = Math.round(100*money)/100;
    }
    display();
}
function subQuarter() {
    if(quart > 0){
        quart += 1;
        sQuarts -= 0.25;
        sQuarts = Math.round(100*sQuarts)/100;
        money -= 0.25;
        money = Math.round(100*money)/100;
    }
    display();
}

function display() {
    totalPen.innerHTML = "Total Number of Pennies: " + pens;
    totalNickel.innerHTML = "Total Number of Nickels: " + nicks;
    totalDime.innerHTML = "Total Number of Dimes: " + dimes;
    totalQuarter.innerHTML = "Total Number of Quarters: " + quart;
    sumPen.innerHTML = "Total Sum of Pennies: " + sPens;
    sumNickel.innerHTML = "Total Sum of Nickels: " + sNicks;
    sumDime.innerHTML = "Total Sum of Dimes: " + sDimes;
    sumQuarter.innerHTML = "Total Sum of Quarters: " + sQuarts;

    sumMoney.innerHTML = "Total Sum of all coins: " + (sPens + sNicks + sDimes + sQuarts);
}