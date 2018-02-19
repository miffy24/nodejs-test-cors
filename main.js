myButton.addEventListener('click',function(){
  let request = new XMLHttpRequest()
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log('请求响应完毕')
      if(request.status >= 200&&request.status<=300){
        console.log('请求成功')
	console.log(request.responseText)
	let string = request.responseText
	//把符合的json语法的字符串转换成js对应的值
	let object = window.JSON.parse(string)
	console.log(typeof object)
	console.log(object)
	console.log('object,note')
	console.log(object.note)
      }else if(request.status >=400){
        console.log('请求失败')
      }
        
    }
  }
  request.open('GET','/xxx')
  request.send()
	
})
