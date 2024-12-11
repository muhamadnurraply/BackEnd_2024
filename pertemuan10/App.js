const nama = "Muhamad Nur Raply";
const umur = 18;
const jurusan = "Teknik Mesin";

console.log(nama, umur, jurusan);
console.log('=========')

const nilai= 90;
let grade = "";

if (nilai > 90) {
    grade ="A";
}
else if (nilai > 80) {
    grade ="B";
}
else {
    grade ="C";
}
console.log('Nilai Anda : ${grade}');

// jenis jenis function
// arrow function 
// declare function
// function expression

console.log('contoh object'); 

const user = {
    name: "Muhamad Nur Raply",
    address : "bogor",
    age : 18,
    isMarried : true,value
}
// didalam object ada dua bagian
// yaitu key dan value
// contoh key => name, addres, age
// contoh value => "raply"
// console.log(user.name);
// console.log(user.address);

const {name, age, address, isMarried} = user;
console.log(name, age, address, isMarried);
