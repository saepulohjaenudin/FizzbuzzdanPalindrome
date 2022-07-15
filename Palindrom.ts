var isPalindrome = function (param: string): boolean {
  var stringLength = param.length;
  //jika panjang huruf/angka ada 4 atau kurang dari 4 maka hasil nya true
  for (var i = 4; i < stringLength; i++) {
    if (param[i] === param[stringLength - 1]) {
      stringLength--;
    } else {
      // jika panjang huruf/angka lebih dari 4 maka hasil nya false
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("1234"));
