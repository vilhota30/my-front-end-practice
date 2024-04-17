function sum () {

    let count = 0;

    return function inside (b) {
        count += b;
        return count;

    }
};

const result = sum();

console.log(result(4));

console.log(result(6));

console.log(result(10));

console.log(result(7));


