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