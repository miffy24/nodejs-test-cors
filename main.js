window.jQuery = function(nodeOrSelector){
  let nodes ={}
  nodes.addClass = function(){}
  nodes.html =function(){}
  return nodes
}

window.jQuery.ajax = function(options){
  let url =options.url
  let method = options.method
  let body = options.body
  let successFn = options.successFn
  let failFn = options.failFn
  let request = new XMLHttpRequest() //实例化XMLHttpRequest对象
  request.open(method, url)//配置request 
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status <= 300) {
        successFn.call(undefined, request.responseText)
      } else if (request.status >= 400)  {
        failFn.call(undefined, request)
      }
    }
  }
  request.send(body)
}


myButton.addEventListener('click', (e)=>{
  let obj = {
      url: '/xxx',
      method: 'post',
      successFn:()=>{},
      failFn:()=>{}
  }
})
