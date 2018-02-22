function success(responseText){
  console.log(responseText)
}
function fail(responseText){
  console.log(request)
}

myButton.addEventListener('click', (e)=>{
  $.ajax({
      url: '/xxx',
      method: 'get',
  }).then(success,fail)
})
