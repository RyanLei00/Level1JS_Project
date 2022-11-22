function initialize() {
    totalPen = document.getElementById("totalPen");
    totalNickle = document.getElementById("totalNickle");
    totalDime = document.getElementById("totalDime");
    totalQuarter = document.getElementById("totalQuarter");

    sumPen = document.getElementById("sumPen");
    sumNickle = document.getElementById("sumNickle");
    sumDime = document.getElementById("sumDime");
    sumQuarter = document.getElementById("sumQuarter");

    sumMoney = document.getElementById("sumMoney");
}

function addPenny() {
    if(totalPen < 0){
        totalPen += 1;
        sumPen += 0.01;
        sumMoney <= 0;
        sumMoney += 0.01;
    }
    display();
}
function subPenny() {
    if(totalPen < 0){
        totalPen -= 1;
        sumPen -= 0.01;
        sumMoney <= 0;
        sumMoney -= 0.01;
    }
    display();
}
function addNickle() {
    if(totalNickle < 0){
        totalNickle += 1;
        sumNickle += 0.05;
        sumMoney <= 0;
        sumMoney += 0.05;
    }
    display();
}
function subNickle() {
    if(totalNickle < 0){
        totalNickle -= 1;
        sumNickle -= 0.05;
        sumMoney <= 0;
        sumMoney -= 0.05;
    }
    display();
}
function addDime() {
    if(totalDime < 0){
        totalDime += 1;
        sumDime += 0.10;
        sumMoney <= 0;
        sumMoney += 0.10;
    }
    display();
}
function subDime() {
    if(totalDime < 0){
        totalDime -= 1;
        sumDime -= 0.10;
        sumMoney <= 0;
        sumMoney -= 0.10;
    }
    display();
}
function addQuarter() {
    if(totalQuarter < 0){
        totalQuarter += 1;
        sumQuarter += 0.25;
        sumMoney <= 0;
        sumMoney += 0.25;
    }
    display();
}
function subQuarter() {
    if(totalQuarter < 0){
        totalQuarter += 1;
        sumQuarter -= 0.25;
        sumMoney <= 0;
        sumMoney -= 0.25;
    }
    display();
}

function display() {
    totalPen.innerHTML = "Total Number of Pennies: " + totalPen;
    totalNickle.innerHTML = "Total Number of Nickles: " + totalNickle;
    sum.innerHTML = "Sum: " + (dice1Value + dice2Value);
}