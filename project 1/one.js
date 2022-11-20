function* forever(){
    let index = 10;
    while(true){
        yield index++
    }
}

let f = forever();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());