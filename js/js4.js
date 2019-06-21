// Dinh nghia object trong JS
let myCar = {};
let myCar2 = {name: "BMW", color: "black", weight: 50};
let myCar3 = {
	name: "Luxury",
	price: 1000,
	model: "ABC",
	stop: function(){

	},
	drive: function(where){
		return "Go to "+where;
	},
	work:{
		company: "ABC",
		money: 100,
		country:{
			nameCountry: "VN"
		}
	}
};

// Cach truy cap vao 1 phan tu trong object
// nameObject.nameKey 
console.log(myCar3.price);
let place= "Phu Quoc";
console.log(myCar3.drive(place));
console.log(myCar3.work.country.nameCountry);

let student = {
	name: "NVA",
	msv: 113,
	email: "test@gmail.com",
	add: "Ha Noi"
}
// Duyet qua tat ca cac phan tu nam trong object 
for(let i in student){
	console.log(student[i]);
}

//Su dung function dinh nghia 1 object - function constructor
// tat ca moi thu trong js deu duoc coi la object
function sumNumber(a,b){
	// Dinh nghia thuoc tinh 
	this.hsa = a; //this.hsa - thuoc tinh
	this.hsb = b;
	this.sum = function(){
		return this.hsa + this.hsb;
	}
	return sum();
}

let test = sumNumber(5,6);
console.log(test);

// ------------------------------ Chuoi trong JS --------------------------------
let myStr = "This is JS";
let myStr2 = `Chung ta dang hoc ${myStr}`;
console.log(myStr2);

// Cac phuong thuc - cac ham so san trong js lam viec voi chuoi
// tim kiem - kiem tra ki tu nam trong chuoi ko?
// indexOf
let pos = myStr.indexOf('JS');
console.log(pos);
// Tra ve vi tri cua ki tu nam trong chuoi, neu la -1 khong nam trong chuoi
// bat dau tim kiem ty dau chuoi tro di
// lastIndexOf
let pos2 =myStr.lastIndexOf('JS');

let myStr3 = "Hom nay troi rat la lanh, chi muon nghi hoc";
let newStr = myStr3.slice(26, 48);
console.log(newStr);

let newStr2 = myStr3.substr(26, 4);
console.log(newStr2);

let newStr3 = myStr3.substring(26, 4);
console.log(newStr3);

let fruit = "tao, cam, mit, dua";
let arrFruit = fruit.split(",");
console.log(arrFruit);

// Chuyen ve chu hoa toLocaleUpperCase
console.log(fruit.toLocaleUpperCase());

// Chuyen ve chu thuong loLocaleLowerCase
// 
let ulr = "https://vnexpress.net/bong-da/quang-hai-ap-dao-giai-cau-thu-hay-nhat-vong-bang-asian-cup-3872313.html";
// Viet ham - ap dung cac kien thuc ve mang va chuoi - boc tach id bai viet ty url

function getIdFromUrl(urlData,id){
	// let arr = ulr.split("-");
	let arr2 = ulr.indexOf(id);
	let arr3 = ulr.substr(arr2, id.length);
	return arr3;
}
let kq = getIdFromUrl(ulr, '3872313');
console.log(kq);

// Moi tuong quan giua chuoi va so
let number = '100'; //chuoi
number = eval(number); // ep chuoi ve so
console.log(typeof number);

let number2 = 100;
// ep so ve chuoi
number2.toString();
console.log(typeof number2);

//--------------------------- Date - trong JS ---------------------
// Lay a ngay thang nam hien tai
let date = new Date();
console.log(date);

// Lay ra ngay thang mong muon
let d = new Date(2018,1,5);
console.log(d);

// Lam viec voi cac phuong thuc trong date JS
let myDate = date.getDate();
console.log(myDate);

let myMonth = date.getMonth();
console.log(myMonth);

let myTime = date.getTime();
console.log(myTime);

let toDay = "2019-01-22";
let parseDate = Date.parse(toDay);
console.log(parseDate);

let yesterday = "2019-01-21";
let parseDate2 = Date.parse(yesterday);
console.log(parseDate2);

if(parseDate > parseDate2){
	console.log('Y');
}
else{
	console.log('N');
}

// date.setDate(10);
// console.log(date.getDate());

let birthDay = prompt("Moi nhap ngay sinh cua ban, dinh dang la YYYY-mm-dd");
console.log(birthDay);

// Viet ham kiem tra xem con bao nhieu ngay toi sinh nhat cua ban
// neu dung la sinh nhat - chuc mung 
// chua toi : tinh duoc bao nhieu ngay
// qua roi : thong bao qua roi
function checkBirth(myDay){
	let d = new Date();
	// lay dc ngay va thang sinh nhat cua nguoi dung nhap vao, khong tinh nam
	let arrDate = birthDay.split("-");
	//lay ra nam hien tai
	let year = d.getFullYear();
	//nhap chuoi ngay sinh nhat cua nguoi dung
	let birthDay1 = year + "-" + arrDate[1] + "-" + arrDate[2];
	let month = d.getMonth()+1;
	let today = year + "-" + month + "-" + d.getDay();
	let time1 = Date.parse(birthDay1);
	let time2 = Date.parse(today);
	if(time1 == time2){
		// dung la ngay sinh nhat 
		return true;
	}
	else if(time1 < time2){
		return false;
	}else{
		return (time1 - time2)/86400000;
	}
}
let result = checkBirth(birthDay);
console.log(result);