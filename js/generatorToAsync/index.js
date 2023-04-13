// 先写一个Promise
const waitMeFn = (num) => new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove(num + 1)
    }, 2000)
})

// 使用async await
const fn = async () => {
    const num1 = await waitMeFn(1)
    const num2 = await waitMeFn(num1)
    console.log(num1, num2); 
    console.log('1'); 
}
// fn()

// 使用generator实现一个等待的效果
function* generator() {
    const data1 = yield waitMeFn(1)
    const data2 = yield waitMeFn(data1)
    return data2
}

const gen = generator()

console.log(gen.next()); // { value: Promise { <pending> }, done: false }
// gen.next() 中 有promise对象， 可以在.then中执行下一次的.next()
gen.next().value.then(res1 => {
    gen.next(res1).value.then(res2 => {
        console.log(res2); /// 3
    })
})


const generatorToAsync = (generatorFn) => {
    const gen = generatorFn()
    return new Promise(reslove => {
        function doNext(value, done) {
            if (done) {
                reslove(value)
                return
            }
            Promise.resolve(value).then(res => {
                const {value, done} = gen.next(res)
                doNext(value, done)
            })
        }
        const {value, done} = gen.next()
        doNext(value, done)
    })
}

console.log(generatorToAsync(generator)); // Promise { <pending> }
generatorToAsync(generator).then(res => {
    console.log(res); // 3
})

// generatorToAsync接收一个generator， generator中可以有多个异步操作，每次异步操作之后才会调用下一次yield, 可以将上一次异步的返回值传到下次yield的函数中， 避免回调地狱。