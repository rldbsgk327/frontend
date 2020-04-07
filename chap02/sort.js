let a = [];

for( let i=0; i<100; ++i){
 let b = Math.floor(Math.random()*100+1);   
 a.push(b);
 
}
a.sort(compareNumber);
console.log(a.toString());

function compareNumber(n, m) {
    return n - m;
}
