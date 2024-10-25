// Binary to decimal
// Have the user input a string value, in binary
// Use a for loop to iterate through each value in the string until it reaches the last letter
// Everytime there is a one in the string,

function binaryToDec(binary){
    let decimal = 0; //output initialize
    for(let i = 0; i<binary.length; i++){
        if(binary[binary.length - i - 1]==="1"){
            decimal = decimal + Math.pow(2,i);
        }
    }
    return decimal;
}

console.log(binaryToDec("1100111"));

// Decimal to binary

// function decToBinary(decimal){
//     let binary = [];
//     for (let i = 0; i++; decimal >= 1){ //i is the number of times a decimal can be divided by 2
//         //code will run as long as decimal does not reach 0
//         if ((decimal%2)===1){ //if the remainder of a decimal being divided by 2 is equal to 1, append that to the space before the previously appended value (this can be i)
//             binary.push
//             //make the whole number portion of the decimal divided by 2 as the decimal
//             decimal = Math.floor(decimal/2);
//         }
//         else{ 
//              // if the remainder of the decimal being divided by 2 is 0, append the zero before the previous appended value (goes first)
            
//             //make the whole number portion of the decimal divided by 2 as the decimal
//             decimal = Math.floor(decimal/2);
//         }
//     }
//     return binary;
// }

//class function

function decimalToBinary(dec){
    let binary = "";
    if(dec === 0){
        return 0;
    }
    while(dec>=1){
        let remainder = dec%2;
        binary = remainder +binary;
        dec = Math.floor(dec/2);
    }
    return binary;
}

console.log(decimalToBinary(9));