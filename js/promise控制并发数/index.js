// 并发：并发是多个任务同时交替的执行（因为cpu执行指令的速度非常之快，它可以不必按顺序一段代码一段代码的执行，这样效率反而更加低下），这样看起来就是一起执行的，所以叫并发。
// 并行：可以理解为多个物理cpu或者有分布式系统，是真正的'同时'执行
// 并发控制：意思是多个并发的任务，一旦有任务完成，就立刻开启下一个任务
// 切片控制：将并发任务切片的分配出来，比如10个任务，切成2个片，每片有5个任务，当前一片的任务执行完毕，再开始下一个片的任务，这样明显效率没并发控制那么高了
// 转自：JetTsang

const tasks = new Array(10).fill(0).map((v, i) => {
  return function task() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(i + 1);
        resolve(i + 1)
      }, 3000);
    })
  }
})

// tasks.forEach(cb => {
//   cb()
// })

// 并发控制函数 https://juejin.cn/post/7235574844435431461
// function concurrencyControl(tasks, limit, cb) {
//   const queue = tasks.slice();
//   let count = 0

//   const runTask = () => {
//     while (limit) {
//       limit--
//       if (!queue.length) {
//         break
//       }
//       const task = queue.shift()
//       task().then(result => {
//         count++
//         limit++
//         if (count === tasks.length) {
//           cb(result)
//         } else {
//           runTask()
//         }
//       })
//     }
//   }
//   return runTask
// }

// todo 使用 primose.race

async function concurrencyControl(tasks, limit, cb) {
  let activeList = []
  const allTaskList = []

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]();
    task.then(res => {
      // activeList.splice(i, 1); 顺序都乱了我竟然还用下标
      activeList = activeList.filter(it => it !== task)
    })
    activeList.push(task);
    allTaskList.push(task)

    if (activeList.length >= limit) {
      await Promise.race(activeList).catch(err => err)
    }
  }

  Promise.all(activeList).then(result => {
    cb(result)
  })
}

concurrencyControl(tasks, 3, (taskId) => {
  console.log(`task ${taskId} finish！`)
})