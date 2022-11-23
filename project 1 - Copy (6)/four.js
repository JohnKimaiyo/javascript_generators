function* forever() {
    let index = 40;
    while (true) {
        yield index++
    }
}

let f = forever();
console.log(f.next());
console.lof(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());