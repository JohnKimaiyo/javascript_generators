function* forever() {
    let index = 10;
    while (true) {
        yield index++
    }
}

let k = forever();
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());