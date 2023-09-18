const sumAll = function(numMin,numMax){
    if (numMin < 0 || numMax <0){
        return "ERROR";
    }
    if (!Number.isInteger(numMin) || !Number.isInteger(numMax)){
        return "ERROR";
    }
    if (numMin > numMax){
         [numMin , numMax] = [numMax, numMin];
    }


    let finalSum =0;

for(let i = numMin; i <= numMax; i++) {
    finalSum += i;
}
return finalSum;
}


// Do not edit below this line
module.exports = sumAll;
