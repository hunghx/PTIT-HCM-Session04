// nhúng phần tử đã đc export từ các module khác vào
import { numbers } from "./data.js";
import { numbers as data } from "./number.js";
// ES6 - B2
/*
    1. default param - tham số mặc định
    2. includes - kiểm tra tồn tại
    3. startsWith - kiểm tra chuỗi bắt đầu bằng
    4. endsWith - chuỗi kết thúc bằng
    5. class - OOP
    6. modules - import/ export
    7. Promise - Lời hứa
*/
//  1. default param - tham số mặc định

const sum = (a = 100, b = 0)=>{
    console.log("a = ",a);
    console.log("b = ",b);
    console.log(a+b)
};

sum(); 

//  2. includes - kiểm tra tồn tại
let arr = [1,2,4,6,7,8,9,13];
let checkExistNumberSeven = arr.includes(7);
console.log(checkExistNumberSeven);
let today = new Date(); // object - chú ý : từ khóa new dùng để cấp phát động
let now = new Date();   // object
let student = {         // object
    id:1,
    name :"khánh"
}

let arrayObj = [today,student];
console.log(arrayObj.includes(now));

// startsWith - kiểm tra chuỗi bắt đầu bằng
let string = "rikkei academy";
console.log(string.startsWith('r'));
//  endsWith - chuỗi kết thúc bằng
console.log(string.endsWith('my'));

// Class - OOP
// oop (object oriented programming) - phương pháp/ mô hình lập trình xoay quanh các đối tượng
// Class và Object

// các thành phần của 1 đối tượng : thuộc tính và hành vi
// trước ES6 - POP 
// function Student(id,name){
//     this.id =id;
//     this.name =name;
// }

// let s1 = new Student(1,"hung"); // this trỏ tới s1
// let s2 = new Student(2,"nam"); // this trỏ tới s2

// sử dụng từ khóa class
class Human{
    constructor(sex){
        this.sex = sex;
    }
    move(){
        console.log("... moving");
    }
}
class Student extends Human{
    constructor(id, name, age,sex){
        super(sex); // gọi đến constructor của lớp cha và phải gọi đầu tiên của hàm khởi tạo
        this.id = id; // vừa  khai báo thuộc tính vừa gán
        this.name = name;
        this.age = age;
    }
    move(){
        console.log("chạy xe máy...");
    }
    printInfo(){
        console.log("id : " + this.id + "| Name : " + this.name+" | age : "+this.age);
    }
}

// khởi tạo
let s1 = new Student(1,"Khánh",20);
let s2 = new Student(2,"hung",20);
console.log(s1);
s1.printInfo();
s1.move()

// ưu tiên khởi tạo đối tượng 
let obj = {
    id:1,
    name: "kkkk"
}

// 4 đặc điểm của oop : 
// + extends(kế thừa)
// + Đóng gói (0 có)
// + đa hình (ghi đè phương thức)  (cùng 1 tên hàm nhưng cách triển khai khác nhau)
// + trừu tượng


// khái niệm modules : 
// Bài toán : nhúng nhiều file js vào 1 trang thì có thể xung đột code vì phạm vi khai báo của nó là global
// Module hóa các file js sẽ giúp các biến được khai báo có phạm vi chỉ trong file js đấy

console.log(numbers);
console.log(data);


// Promise : Lời hứa : xử lí các thao tác bất đồng bộ trong js 
// Ví du : lấy dữ liệu từ máy chủ về tiêu tốn 1 khoảng thời gian
// Nếu Promise thành công : trạng thái resolve()
// Nếu Promise thất bại : trạng thái reject()

// khởi tao lời hứa
let myPromise = new Promise((resolve,reject)=>{
            // thành công
            let data = [1,2,3,4,5,6,7,8,9];
            // resolve(data);
            // thất bại
            let message = "đăng ký thất bại";
            reject(message)
})
// class ErrorDiv0{
//     constructor(message,code){
//         this.code = code,
//         this.message = message
//     }
// }

// gọi promise
myPromise.then(
    (data)=>{ // resolve
        console.log(data);
    },
    (message)=>{ // reject
        console.log(message);
        // throw new ErrorDiv0("ko thể chia cho 0",400) // ném lỗi
    }
)
.catch((err)=>{ // bắt lỗi
    console.log(err);
})


// call api 
fetch('https://jsonplaceholder.typicode.com/photos') // là 1 promise
.then((res)=>res.json()) // chuyển đổi sang json
.then(data => {
    let div = document.getElementById('photo')
    let html = data.reduce((temp,img)=>temp + `<img src="${img.url}" alt="" width="100" height="100">
    <br>` ,"")
    div.innerHTML= html;
}) // in ra dữ liệu nhận đc
.catch(err=>console.log(err)) // bắt lỗi sinh ra nếu có