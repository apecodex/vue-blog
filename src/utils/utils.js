export function sleep(ms) {
  return new Promise(resolve => 
      setTimeout(resolve, ms)
  )
}


export function color() { //颜色随机
	var colors="#";
	for(var i=0;i<6;i++){
		colors+=Math.floor(Math.random()*16).toString(16)
				}
		return colors
}

// emoji编码
export function utf16toEntities(str) {
  const patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
  str = str.replace(patt, (char) => {
    let H;
    let L;
    let code;
    let s;

    if (char.length === 2) {
      H = char.charCodeAt(0); // 取出高位
      L = char.charCodeAt(1); // 取出低位
      code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法
      s = `&#${code};`;
    } else {
      s = char;
    }

    return s;
  });

  return str;
}

// emoji解码
export function entitiestoUtf16(strObj) {
  const patt = /&#\d+;/g;
  const arr = strObj.match(patt) || [];

  let H;
  let L;
  let code;

  for (let i = 0; i < arr.length; i += 1) {
    code = arr[i];
    code = code.replace('&#', '').replace(';', '');
    // 高位
    H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
    // 低位
    L = ((code - 0x10000) % 0x400) + 0xDC00;
    code = `&#${code};`;
    const s = String.fromCharCode(H, L);
    strObj = strObj.replace(code, s);
  }
  return strObj;
}