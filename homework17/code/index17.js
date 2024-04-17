function outside (a) {
    return function inside (b) {
        return a * b;
    }
}

const result = outside(5)(2);

console.log(result);

//  console.log(outside(3)(4));
//  console.log(outside(5)(5));
//  console.log(outside(6)(6));
