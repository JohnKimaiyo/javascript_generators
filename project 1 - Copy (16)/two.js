function* money() {
    let index = 20;
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