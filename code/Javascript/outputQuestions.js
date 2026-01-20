console.log("hehe ", foo);

var foo=90
console.log("joj", foo)

const obj = { a: {d:3}, b: { c: 2 } };
const io={r:89, ui:56}
const oi=io;
oi.r=90;
console.log("opo", io.r)

const copy = { ...obj }; // or Object.assign({}, obj)
copy.b.c = 5;
copy.a=3

console.log(obj.b.c); // 5 ❌ (changed)
console.log(obj.a);
console.log(copy.a);

console.log('\n');
console.log(isNaN('234'));
console.log(isNaN(null));

console.log('\n');
console.log(typeof undefined)
console.log(typeof null)
