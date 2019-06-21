// DINH NGHIA HAM VA SU DUNG HAM TRONG JS
// 1: DINH NGHIA
function sumNumber(a,b=5) // b la tham so hinh thuc, b dc gan gia tri mac dinh cho tham so hinh thuc
{
	return a+b; // return : tra ve gia tri cho ten ham
	// khi gap tu khoa return thi se thoat khoi ham va khong thuc thi cac cau lenh ben duoi
}

function helloWorld()
{
	console.log('Hello World');
}

//2: SU DUNG HAM
let sum = sumNumber(4,9); // 4 o day la tham thuc, gia tri mac dinh cua tham so hinh thuc ton tai khi khong tham so thuc
console.log(sum);
helloWorld();

// Viet ham tinh giai thua tu 1 - 10
function tinhGiaiThua()
{
	let n = 1;
	for(let i=1;i<11;i++)
	{
		n = n*i;
	}
	return n;
}
console.log(tinhGiaiThua());

// Viet ham tinh tong cac so chan tu 1 - 500
function tongSoChan(){
	let n = 0;
	for(let i=1 ; i <= 500 ;i++)
	{
		if(i%2==0)
		{
			n = n+i;
		}
	}
	return n;
}
console.log(tongSoChan());

//-----------------------------------------------------------------------

let myFunction = function(){
	console.log('Hi you');
}
console.log(typeof myFunction);
console.log(myFunction());
myFunction();

// Dinh nghia ham kiem tra xem 1 so co phai so nguyen to khong?

let kiemTraSoNguyenTo = function(n){
	// if(n==0){
	// 	return console.log(n+' khong phai so nguyen to');
	// }
	// if(n ==2 || n ==3)
	// {
	// 	return console.log(n+' la so nguyen to');
	// }
	// for(let i=2; i < n/2 ; i++ )
	// {
	// 	if(n%2==0 && n%i==0)
	// 	{
	// 		return console.log(n+' khong phai so nguyen to');
	// 	}
	// 	else
	// 		return console.log(n+' la so nguyen to');
	// }
	let checkFlag = true;
	if(n <= 0){
		return false;
	}
	if(n == 1 || n == 2){
		return true;
	}
	for(let i = 2; i<= Math.sqrt(n);i++)
	{
		if(n%i==0){
			checkFlag = false;
		}
	}
	return checkFlag;
}
console.log(kiemTraSoNguyenTo(3));
// let checkSNT = kiemTraSoNguyenTo(3);
// if(checkSNT){
// 	console.log(numberSNT + ' la so nguyen to');
// }
// else{
// 	console.log(numberSNT = ' ko la so nguyen to')
// }
// let numberSNT = kiemTraSoNguyenTo(3);
// console.log(numberSNT);

// tu 1 - 500 co bao nhieu so nguyen to
let countNumberSNT = function(n,m)
{
	let count=0;
	for(let i=n; i < m;i++ )
	{
		if(kiemTraSoNguyenTo(i))
		{
			count++;
		}
	}
	return count;
}
console.log(countNumberSNT(1,500));

//---------------------------------------------------------------------
//arrow function (ham mui ten = ham chia)
let hello = (name) =>{
	console.log('Hi '+name);
}
hello('LPHP1811E');

// Viet ham arrow function giai phuong trinh bac 2
let ptbac2 = (a,b,c) => {
	let delta = (b*b) - (4*a*c);
	if(delta < 0){
		console.log('Phuong trinh vo nghiem');
	}
	if(delta ==0){
		let x = (-b)/(2*a);
		return "Nghiem la x= "+x;
	}
	if(delta >0){
		let x1 = (- b + Math.sqrt(delta)) / (2*a);
		let x2 = (- b - Math.sqrt(delta)) / (2*a);
		return "Nghiem x1 = "+x1+" va nghiem x2 = "+x2;
	}
}
// let nghiem = ptbac2(1,2,3);
// if(!nghiem){
// 	console.log('Vo nghiem');
// }
// else{
// 	console.log('Nghiem la '+nghiem);
// }
let nghiem = ptbac2(3,5,2);
console.log(nghiem);

//viet ham arrow function kiem tra nam nhuan duong lich

let kiemTraNamNhuanDL = (year) => {
	if(year%400==0 || (year%4==0 && year%100!=0))
	{
		return true;
	}else{
		return false;
	}
}
let check = kiemTraNamNhuanDL(2016);
console.log(check);

//-------------------------------------------------------------------------

//Number JS
// let number1 = prompt('Nhap he so a');
// let number2 = prompt('Nhap he so b');
// let total = number1 + number2;
// console.log(typeof number1, typeof number2);
// console.log(total);

//Ep number1 number2 ve kieu so (number)
// number1 = Number.parseInt(number1);
// number2 = Number.parseInt(number2);
// let total2 = number1 + number2;
// console.log(typeof number1, typeof number2);
// console.log(total2);
// //Kiem tra xem co phai la so hay khong?
// if(Number.isInteger(total2)){
// 	console.log('Yes');
// }else{
// 	console.log('No');
// }

//---------------------------------------------------------------------
// ARRAY JS
// Mang don
// Cu phap
let arrFruit = new Array('xoai','oi','le',1,2,3,4);
let arrNumber = [1,2,3,4,5,6,7,8,9];
// Mang da chieu
let arrMyNum = [[1,2,3], ['a','b','c'], ['xoai','le'], 123, 45512];

//dem so phan tu trong mang
let countArr1 = arrFruit.length;
console.log(countArr1);
let countArr2 = arrMyNum.length;
console.log(countArr2);

//Truy cap vao cac phan tu nam trong mang JS
//Cu phap
//nameArr[chi so cua phan tu nam trong mang]
//chi so cua phan tu nam trong mang luon bat dau tu 0
let arr1 = arrFruit[2];
console.log(arr1);
let arr2 = arrMyNum[2][0];
console.log(arr2);

//Viet ham tinh phuong trinh bac nhat 2 an
// Phuong phap Cramer
function tinhHptBacNhat2An_1(a1,b1,c1,a2,b2,c2){
	let D,Dx,Dy,x,y;
	D = a1*b2 - a2*b1;
	Dx = c1*b2 - c2*b1;
	Dy = a1*c2 - a2*c1;
	x = Dx/D;
	y = Dy/D;
	return 'x= '+x+' va y= '+y;
}
let result_1 = tinhHptBacNhat2An_1(4,3,-6,2,1,-4);
console.log(result_1);

let tinhHptBacNhat2An_2 = function(a1,b1,c1,a2,b2,c2){
	let D,Dx,Dy,x,y;
	D = a1*b2 - a2*b1;
	Dx = c1*b2 - c2*b1;
	Dy = a1*c2 - a2*c1;
	x = Dx/D;
	y = Dy/D;
	return 'x= '+x+' va y= '+y;
}
let result_2 = tinhHptBacNhat2An_2(4,3,-6,2,1,-4);
console.log(result_2)

// Phan biet them su khac nhau giua tu khoa let va var trong js dua vao ham

function compareLetAndVar()
{
	// var x=20;
	let x = 20;
	if(true){
		// var x = 10; //Pham vi hoat dong cua var gan so voi ten ham gan nhat
		let x = 10; //Pham vi hoat dong cua let gan so voi cap ngoac nhon {} gan nhat
		console.log(x);
	}
	console.log(x);
}
compareLetAndVar();