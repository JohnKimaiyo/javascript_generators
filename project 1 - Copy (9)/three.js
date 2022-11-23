function* count() {
    let index = 30;
    while (true) {
        yield index++
    }
}

let m = count();
console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log(m.next());