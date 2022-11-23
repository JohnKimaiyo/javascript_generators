function* money(){
    let start = 20;
    while(true){
        yield start++
    }
}

let m = money();
console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log(m.next());