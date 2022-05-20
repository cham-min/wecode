let numArr = [];
let result = [];

for(let i=0; i<51; i++) {
    numArr.push(i);
}

const getEven = (num) => {
    for(let i=0; i<numArr.length; i++){
        numArr[i] % 2 === 0 ? result.push(numArr[i]) : ''
    }
    return result;
}

console.log(getEven(numArr));