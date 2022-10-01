const palindromes = function (string) {
	let punctuationaless = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	let finalString = punctuationaless.replace(/\s/g,"");
	let array = finalString.split('');
	let length = array.length;
	for (let i = 1; i < length/2 + 1 ; i++) {
		if (array[i-1] !== array[length-i]) {
			console.log("nope");
			return (false);
		};
	}
	return (true);
};


//function palindromes (string) {
//	let punctuationaless = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
//	let finalString = punctuationaless.replace(/\s/g,"");
//	console.log(finalString);
//	let array = finalString.split('');
//	let length = array.length;
//	console.log(array);
//	console.log(length);
//	for (let i = 1; i < length/2; i++) {
//		console.log(array[i-1]);
//		console.log(array[length-i]);
//		if (array[i-1] !== array[length-i]) {
//			console.log("nope");
//			return ('false');
//		};
//	}
//	return ('true');
//}

  
// Do not edit below this line
module.exports = palindromes;
