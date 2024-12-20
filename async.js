async function fn1() {
  console.log(1)
  await fn2()
  console.log(2) //
}
async function fn2() {
  console.log('fn2')
  await function() {
    console.log('fn2 callback');
  }()
}
fn1()
console.log(3)