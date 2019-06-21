// ghi chu 1 dong
/*ghi chu nhieu dong
*/
document.write('Hello world'); // hien thi chuoi ra ngoai trinh duyet
/*alert('Hello world'); // bat ra hop thong bao ra ngoai trinh duyet
console.log('Hello world'); //hien thi du lieu o tool debug cua trinh duyet
// prompt('Moi nhap ho ten'); 
var username = prompt('Moi nhap ho ten'); //bat ra 1 hop thong bao de nhap du lieu va hien thi du lieu trong console
console.log(username);*/

// JS khong quy dinh kieu du lieu cho bien ma bien chi nhan kieu du lieu khi dc gan gia tri
// kieu du lieu trong js
var a = 12;
console.log(typeof a); // xac dinh kieu du lieu cho bien
var b;
console.log(typeof b);
var c = true;
console.log(typeof c);
var d = 'abc';
console.log(typeof d);

// cach khoi tao bien trong js
// keyword + name
// keyword + var / let / const
// bien (name): khong duoc bat dau bang chu so va khong duoc trung voi tu khoa trong ngon ngu lap trinh
// bien (name): phan biet chu hoa, chu thuong
// var 1acb; // sai: vi bat dau bang so
// var while // sai: vi trung tu khoa trong lap trinh
var name;
var Name;
// 2 bien nay khac nhau hoan toan vi phan biet chu hoa, chu thuong
// tieu chuan - nguyen tac dinh nghia ten bien
// chu cai dau tien cua bien viet thuong, cac chu cai tiep theo cua tu viet hoa
var myName
// su dung tu khoa let de khai bao bien
let myAge = 20;
// su dung tu khoa const de khai bao bien
const myClass = 'LPHP1811E';
// myClass = 'JAVA1811E'; // sai vi khong duoc thay doi gia tri cua const
console.log(myClass);
// var va let deu cho thay doi gia tri
var myNameClass = 'LPHP1811E';
myNameClass = 'JAVA1811E';
console.log(myNameClass);
let myNameClass2 = 'LPHP1811E';
myNameClass2 = 'JAVA1811E';
console.log(myNameClass2);
// var cho phep ghi de du lieu
// var myMoney = 100;
// var myMoney = 200;
// console.log(myMoney);
// let khong cho phep ghi de du lieu
// let myMoney2 = 100;
// let myMoney2 = 200;
// console.log(myMoney2);

//vi 2 bien khong cung kieu du lieu nen phep cong khong duoc thuc thi ma uu tien phep NOI CHUOI
var num1 = 10;
var num2 = '10';
var sum = num1 + num2;
console.log(sum);

//vi num2 la number string (chuoi so - trong chuoi chi chua so thi van tinh toan so hoc binh thuong)
var hieu = num1 - num2;
console.log(hieu);

// false == '' == 0 ve gia tri
// true == 1 ve gia tri
var test = false;
if(test === '')
{
	console.log('A');
}else{
	console.log('B');
}

if(sum < 100){
	console.log('Y', typeof sum);
}else{
	console.log('N', typeof sum);
}

if(sum == 100){
	console.log('100');
}else if(sum == 200){
	console.log('200');
}else if(sum == 300){
	console.log('300');
}

switch (sum){
	case 100:
	console.log();
	break;
	case 200:
	console.log();
	break;
	case 300:
	console.log();
	break;
	default:
	console.log();
	break;
}

// vong lap
// $j = 0;
// for(let i =0; i < 10; i++){
// 	console.log(i);
// 	j += i; j = j +
// }
// for(let i = 0; i < 10; i++){
// 	console.log(i);
// }
let m = 10;
let n = 9;
let k = (m--) - (--n) + (--m) - (n--);
console.log(k);

// while( k > 1 && k <40){
// 	console.log('ABC');
// 	k++;
// }
do{
	console.log('ABC');
	k++;
}while(k > 1 && k < 40);

let x = 10;
let y = 20;
y = (x - y > y % x) ? (y - x) : (x-y < x ? y : x);
console.log(y);
 /*
	if(x - y > y % x){
	y = y - x;
	} else {
	y = x - y;
	}
	if(x - y < x){
	y = y;
	}else{
	y = x;
	}
 */