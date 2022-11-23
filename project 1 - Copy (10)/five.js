function* forver(){
    let index = 5;
    while(true){
        yield index ++
    }
}

let f = forever();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());