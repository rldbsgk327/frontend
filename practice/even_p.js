let a = [];

for(let i=0; i<100; ++i){
    a[i] = Math.floor(Math.random()*100+1);
}

for(let j=0; j<100; ++j){
    while(a[j]%2 == 0) {
     a.slice(j, 1);
    }
}
console.log(a);
//잘 안됨
