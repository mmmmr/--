// generator 定义  使用function* 声明一个生成器函数，再由生成器返回Generator函数。
function* generatorA() {
    console.log(1);
    yield 1;
    yield reutrnNumber();
    const number = yield 3;
    yield console.log('a', number)
    console.log('b');
    const number2 = yield 4;
    console.log('c', number2);
}

function reutrnNumber() {
    return 2
}

const gen = generatorA() 
console.log(gen); // Object [Generator] {}
console.log(gen.toString()); // [object Generator]

// Generator.prototype.next() 执行到下一个 yield之前。全部执行完后再次执行会返回对象中 done为true。
// 第一个yield之前的代码一开始不会执行，会在第一次next（）时执行（比yield这行早）
// Generator中定义常量或变量接收 yield 中的值， 返回undefined（没有接收到）
// 但是next可以传值
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
// a, undefined
console.log(gen.next()); // { value: undefined, done: false }
// b
console.log(gen.next()); // { value: 4, done: false }
// c number2
console.log(gen.next('number2')); // { value: undefined, done: true }


// 嵌套使用 在yield后加 * 
function* generatorB() {
    yield 2;
    yield reutrnNumber();
}

function* generatorC() {
    yield 1;
    yield* generatorB()
    yield 4;
}

const generator = generatorC()
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 4, done: false }
console.log(generator.next()); // { value: undefined, done: true }
console.log(generator.next()); // { value: undefined, done: true }

// throw() 向生成器抛异常
function* generatorD() {
    try {
        yield 1;
    } catch (error) {
        console.log(error);
    }
}

const gen2 = generatorD()
console.log(gen2.next()); // { value: 1, done: false }
console.log(gen2.throw('eeeeeeeeeeerrror')); // eeeeeeeeeeerrror { value: undefined, done: true }
console.log(gen2.next()); // { value: undefined, done: true }
// eeeeeeeeeeerrror