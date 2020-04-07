let a = [];

for( let i=0; i<100; ++i){
 let b = Math.floor(Math.random()*100+1);   
 a.push(b);
 
}
for( let j=0; j<a.length; ++j){
  if(a[j]%2 === 0){
      a.splice(j, 1, 0);
  }
}

for( let k=0; k<a.length; ++k) {
 var index = a.indexOf(0);
 if (index > -1) {
    a.splice(index, 1)   
  }
}

console.log(a);
