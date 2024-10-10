//write your code here
const reverseString = (str) => {
    let empty = ''
    for(let i = str.length -1; i >= 0; i--) {
       empty += str[i];
    }
    return empty;
}

console.log(reverseString('hello'));

const reverseZigZagString = (str) => {
    let empty = ''
    for(let i = str.length -1; i >= 0; i--) {
       if(i % 2 === 0){
        empty += str[i].toUpperCase();
        } else {
            empty += str[i];
        }
    }
    return empty;
}

console.log(reverseZigZagString('hello'));