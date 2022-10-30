function createCounter() {
    let counter = 0;
    let tst = 11;
    const myFunc = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunc;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(null + '' + undefined)