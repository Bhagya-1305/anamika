// let obj={
//     id:11,
//     name:"aaa",
//     address:()=>{
//         let city="gulbarga";
//         let pincode=560010;
//     }
// }
// console.log(obj.address());

let obj1={
        id:111,
        name:"aac",
        address:function(){
            return this.id;
        }
    }
console.log(obj1.address());