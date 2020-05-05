let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
  ];

let max = persons.reduce((p1, p2)=> p1.age > p2.age ? p1 : p2);
console.log(max);

//sort와 같은 정렬이 아니므로, 새 변수에 저장해야 함