function addition(...n) {
    let sum = n[0];
    for (let i = 0; i < n.length; i++) {
        if (typeof n[i] != 'number') {
            return ['Error'];
        } else {
            sum += n[i];
        }
    }
    return [sum];
}

function subtraction(...n) {
    let sub = n[0];
    for (let i = 0; i < n.length; i++) {
        if (typeof n[i] != 'number') {
            return ['Error'];
        } else {
            sub -= n[i];
        }
    }
    return [sub];
}

function multiplication(...n) {
    let mul = n[0];
    for (let i = 0; i < n.length; i++) {
        if (typeof n[i] != 'number') {
            return ['Error'];
        } else {
            mul *= n[i];
        }
    }
    return [mul];
}

function division(...n) {
    let div = n[0];
    for (let i = 0; i < n.length; i++) {
        if (n[i] === 0 && typeof n[i] === 'number') {
            return ['Error'];
        } else {
            div /= n[i];
        }
    }
    return [div];
}

function ceil(n) {
    if (typeof n != 'number') {
        return ['Error'];
    }
    if (n === Math.floor(n)) {
        return n;
    }
    return [Math.floor(n) + 1];
}

function floor(n) {
    if (typeof n !== 'number') {
        return ['Error'];
    }
    return [Math.floor(n)];
}

function factorial(n) {
    if (typeof n !== 'number' || n < 0) {
        return 'Error: Invalid input';
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function sumOfNNumbers(...n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        if (typeof n[i] !== 'number') {
            return ['Error'];
        }
        sum += n[i];
    }
    return [sum];
}

const cal = (operation, ...n) => {
    switch (operation) {
        case 'addition':
            return addition(...n);
        case 'subtraction':
            return subtraction(...n);
        case 'multiplication':
            return multiplication(...n);
        case 'division':
            return division(...n);
        case 'ceil':
            return ceil(...n);
        case 'floor':
            return floor(...n);
        case 'factorial':
            return factorial(n[0]);
        case 'sumOfNNumbers':
            return sumOfNNumbers(...n);
        default:
            return ['Invalid operation'];
    }
};

const x = cal('addition', 10, 5);
console.log("addition is", x);
const xyz = cal('subtraction', 10, 5);
console.log("subtraction is", xyz);
const xy = cal('division', 10, 5);
console.log("Division is", xy);
const xz = cal('multiplication', 10, 5);
console.log("multiplication is", xz);
const y = cal('ceil', 1.2);
console.log('ceil output is', y);
const z = cal('floor', 1.2);
console.log('floor output is', z);
const a = cal('factorial', 5);
console.log('factorial is', a);
const b = cal('sumOfNNumbers',2,3,6);
console.log('Sum of n numbers is ', b);



const factory =(operation,...n)=>{
    switch(operation){
        case'addition':
        return addition
        case 'subtraction':
        return subtraction
        case 'multiplication':
        return multiplication
        case 'division':
        return division
        case 'ceil':
        return ceil
        case 'floor':
        return floor
        case 'factorial':
        return factorial;
        case 'sumOfNNumbers':
        return sumOfNNumbers
        default:
        return 'Error'
    }
}
const w = console.log(factory('addition', 10, 5));
const w1 = console.log(factory('subtraction', 10, 5));
const w2 = console.log(factory('multiplication', 10, 5));
const w3 = console.log(factory('division', 10, 5));
const w4 = console.log(factory('ceil', 10));
const w5 = console.log(factory('floor', 10));
const w6 = console.log(factory('factorial', 10));
const w7 = console.log(factory('s', 10, 5));

