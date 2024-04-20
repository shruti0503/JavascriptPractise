// object clioning : ovjevct point to separate address of cloned value
let obj={
    age:12,
    wt:90,
    ht:80
}

let dest=src;

src.age=90;

console.log("serc:", src);
// meathods of clonong
// spread operator
// assigning method Object.assign({}, src)
let dest1=Object.assign({}, src)
// 3.iteration method

let dest2;
for(let key in src){
    let newKey=key;
    let newValue=src[key];
    dest[newKey]=newValue;

}

// garbage collector-> free the memory not in use
// in c++, heap memory is not deallocated automa , sowe use free,
// in js , 