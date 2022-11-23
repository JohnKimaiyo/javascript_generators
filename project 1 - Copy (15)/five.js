function * money(){
    let index = 50;
    while (true) {
        yield index++
    }
}

let m = money();

console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log(m.next());