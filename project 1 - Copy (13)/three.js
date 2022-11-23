function* money() {
    let index = 3000;
    while (true) {
        yield index++
    }
}

let m = money();

console.log(m.next());
