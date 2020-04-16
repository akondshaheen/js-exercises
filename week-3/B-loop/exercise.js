function exponential(number) {
    return number * number;
}

function isEven(number) {
    return number % 2 === 0;
}

for (let count = 5; count < 20; count += 1) {


    if (isEven(count)) {
        console.log("The exponential of " + count + " is " + exponential(count));
    }
}

/*
The exponential of 6 is 36
The exponential of 8 is 64
The exponential of 10 is 100
The exponential of 12 is 144
The exponential of 14 is 196
The exponential of 16 is 256
The exponential of 18 is 324
*/