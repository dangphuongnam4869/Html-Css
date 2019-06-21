// Tiep tuc cac kien thuc ve mang trong JS
let arrFruit = ['tao', 'man', 'oi'];
let arrNum = [1,2,3,4,5,6,7,8,9];
let countNum = arrNum.length;
console.log(countNum);
console.log(arrNum[7]);
// Truy cap vao tat ca cac phan tu trong mang (lan luot)
for(let i = 0; i < countNum; i++){ //Nen dung for khi muon thay doi phan tu trong mang
	console.log(arrNum[i]);
}
// callback function
arrFruit.forEach(function(item, index, array){   //Nen dung forEach khi chi muon hien thi
	console.log("key: " + index + " - Value: "+item);
	console.log(array);
});

for (let j of arrNum){
	console.log(j, arrNum[j]);
}
// Lam viec voi cac phuong thuc (cac ham) co san trong mag (duoc js cung cap san)

let number = [100,200,1,300,500,1];
// Them 1 gia tri cua phan tu vao trong mang
number.push(900);
console.log(number);
// Xoa phan tu cuoi cung cua mang - tra ve dung phan tu do
let lastEle = number.pop();
console.log(lastEle, number);
// Them 1 phan tu vao dau mang (vi tri dau tien)
number.unshift(lastEle);
console.log(number);
// Xoa phan tu dau tien trong mang
let firstEle = number.shift();
console.log(firstEle, number);

// Tim kiem phan tu nam trong mang
let pos = number.indexOf(1);
console.log(pos);
// Dem phan tu dau tien cua mang cho den khi gap gia tri can tim, va tra vi tri co gia tri do nam trong mang
// Neu ma tra ve -1: khong ton tai phan tu do nam trong mang
let pos2 = number.lastIndexOf(1);
console.log(pos2);
// Dem phan tu cuoi cung cua mang cho den khi gap gia tri can tim

// Dao nguoc cac phan tu trong mang
number.reverse();
console.log(number);

let newNumber = [1,2,3,4,5,6,100,200,300,10,20,40];
// Cat 1 mang con tu mang cha ban dau - mang con bao gom cac phan tu [100,200,300]
// Tra ve 1 mang moi ma cac phan tu duoc lay ra tu mang cha ban dau
let childArr = newNumber.slice(7, 10);
console.log(childArr, newNumber);

// Thay the cacc gia tri vao mang cha ban dau
newNumber.splice(7,3,1000,2000,3000);
console.log(newNumber);

// Cho biet con so 7 co nam trong mang ko ? neu co cat 1 mang con tu vi tri con so 7 do xuat hien cho den khi het mang. Neu khong them no vao dau mang
// ===> Viet ham xu ly
console.log("Bai Tap");
let newArr = [1,2,3,4,7,8,13,44,55];
function seven(newArr, number){
	let leng = newArr.length;
	let check =	newArr.indexOf(number);
	if(check!==-1){
		let childArr = newArr.slice(check, leng);
		return childArr;
	}
	else{
		newArr.unshift(number);
		return newArr;
	}
}
let result = seven(newArr, 7);
console.log(result);

//--------------------------------------------------
let subject = ['php', 'js', 'css', 'html', 'mysql'];
// Chuyen mang ve chuoi, cac phan tu trong chuoi cach nhau boi 1 dau
let newString = subject.join('-');
console.log(newString);
let newString2 = subject.toString();
console.log(newString2);

// Kiem tra xem co phai la mang ko ?
if(Array.isArray(subject))
{
	console.log('Yes');
}else{
	console.log('No');
}

// Sap xep mang dung ham co san
let newNumber2 = [3,2,1,5,12,555,100,233,7];
// Sap xep mang nay theo chieu tang dan hoac giam dan - dung ham co san cua JS
newNumber2.sort(function(a,b){
	// return a - b;
	return b - a;
});
console.log(newNumber2);

// Tu viet ham sap mang the giam dan hay tang dan = dung cac thuat toan co ban
let arr = [2,5,1,6,8,9];
console.log(arr);
function sapXepMang(arr){
	let count = arr.length;
	for(let i=0; i< count; i++){
		for(let j=i+1; j<=count; j++)
		{
			if(arr[i]>arr[j])
			{
				let temp= arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
let kq = sapXepMang(arr);
console.log(kq);
let arr2 = [2,3,1,5,7,6,0];
function sapXepMang2(arr2){
	let count = arr2.length;
	arr2.forEach(function(e, i, arr){
		arr2.forEach(function(e2, i2, arr2)
		{
			if(arr[i] > arr2[i2]){
				let temp = arr[i];
				arr[i] = arr2[i2];
				arr2[i2] = temp;
			}
		});
	});
	return arr2;
}
let kq2 = sapXepMang2(arr2);
console.log(kq2);

// Cho 1 mang tu 1 - 10
// In ra 1 mang moi chi chua cac so nguyen to
// Viet ham
let arrMyNum = [1,2,3,4,5,6,7,8,9,10];
// In ra mang moi tu mang ban dau toan so nguyen to
// Viet ham
function kiemTra(n){
	if(n <= 0){
		return false;
	}
	if(n == 1 || n == 2){
		return true;
	}
	for(let i = 2; i< Math.sqrt(n);i++)
	{
		if(n%i==0){
			checkFlag = false;
		}
		else{
			return true;
		}
	}
}
function soNguyenTo(arr){
	let count = arrMyNum.length;
	let newArrMyNum = [];
	for(let i=0; i < count; i++)
	{
		if(kiemTra(i)){
			newArrMyNum.push(arrMyNum[i]);
		}
	}
	return newArrMyNum;
}
let resultOfSoNguyenTo = soNguyenTo(arrMyNum);
console.log(resultOfSoNguyenTo);

// Cho 1 mang 1-15
// Tim tat ca boi so chung cua (2,3)
let arrMyNum2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function timBoiSoChung(arr){
	let kq = [];
	arr.forEach(function(ele, i, array){
		if(ele % 2 == 0 && ele % 3 == 0){
			kq.push(ele);
		}
	});
	return kq;
}
let resultOfTimBoiSoChung = timBoiSoChung(arrMyNum2);
console.log(resultOfTimBoiSoChung);

// In ra tat cac cap so co tong chia het cho 5
// Tra ve mang da chieu
let arrMyNum3 = [1,2,3,4,5];
// var arrTong =[0];
function timSoChiaHet5(arr){
	let newArrMyNum3 = [];
	let count = arrMyNum3.length;
	for(let i=0; i<count; i++){
		for(let j=i; j<count; j++){
			let tong = arrMyNum3[i] + arrMyNum3[j];
			if(tong%5==0)
			{
				newArrMyNum3.push([arrMyNum3[i],arrMyNum3[j]]);
			}
		}
	}
	return newArrMyNum3;
}
let resultOfTimSoChiaHet5 = timSoChiaHet5(arrMyNum3);
console.log(resultOfTimSoChiaHet5);