myButton.addEventListener('click',function(){
  let request = new XMLHttpRequest()
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log('请求响应完毕')
      if(request.status >= 200&&request.status<=300){
        console.log('请求成功')
	console.log(request.responseText)
      }else if(request.status >=400){
        console.log('请求失败')
      }
        
    }
  }
  request.open('GET','/xxx')
  request.send()
	
})
