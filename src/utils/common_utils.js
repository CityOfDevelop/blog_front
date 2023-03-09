// 왼쪽을 문자로 채움
export function lpad(str, padLen, padStr) {
  if (padStr.length > padLen) {
    console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
    return str;
  }
  str += ""; // 문자로
  padStr += ""; // 문자로
  while (str.length < padLen) str = padStr + str;
  str = str.length >= padLen ? str.substring(0, padLen) : str;
  return str;
}

// 오른쪽을 문자로 채움
export function rpad(str, padLen, padStr) {
  if (padStr.length > padLen) {
    console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
    return str + "";
  }
  str += ""; // 문자로
  padStr += ""; // 문자로
  while (str.length < padLen) str += padStr;
  str = str.length >= padLen ? str.substring(0, padLen) : str;
  return str;
}
