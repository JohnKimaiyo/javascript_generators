function* forever(){
    let index = 30;
    while(true){
        yield index++
    }
}

let f = forever();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());