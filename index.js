
function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number' || ticketSale < 0) {
        return "Invalid Number";
    }
    const ticketPrice = 120;
    const gardSalaryPerDay = 500;
    const totalStaff = 8;
    const staffCostPerLunch = 50;
    const totalCost = gardSalaryPerDay + (totalStaff * staffCostPerLunch);
    const remainingBalance = (ticketSale * ticketPrice) - totalCost;
    return remainingBalance;
}


function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }
    const input = name.toLowerCase();
    const lastWord = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastLetter = input.charAt(name.length - 1);
    if (lastWord.includes(lastLetter)) {
        return 'Good Name';
    }
    return 'Bad Name';
}


function deleteInvalids(numbers) {
    if (Array.isArray(numbers) !== true) {
        return "Invalid Array"
    }
    let finalNum = [];
    for (number of numbers) {
        if (isNaN(number) === false && typeof number === 'number') {
            finalNum.push(number);
        }
    }
    return finalNum;
}


function password(object) {
    if(!object.name || !object.birthYear || !object.siteName){
        return "invalid"
    }
    else if (object.birthYear.toString().length !== 4) {
        return 'invalid'
    }
    const name = object.name;
    const birthYear = object.birthYear;
    const site = object.siteName.charAt(0).toUpperCase() + object.siteName.slice(1);
    const result = site + '#' + birthYear + '@' + name;
    return result;
}


function monthlySavings(array,livingCost) {
   if(Array.isArray(array) !== true || typeof livingCost !=='number'){
    return "invalid input"
   }
   let totalIncome = 0;
   for(const arr of array){
    if(arr < 3000){
        totalIncome = totalIncome + arr;
    }
    else {
        const tax = arr * 0.20;
        const income = arr - tax;
        totalIncome = totalIncome + income;
    }
   }
   const savings = totalIncome - livingCost;
   if(savings >= 0){
    return savings;
   }
   else {
    return "earn more"
   } 
}