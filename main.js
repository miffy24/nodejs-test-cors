myButton.addEventListener('click', (e)=>{
  $.ajax({
      url: '/xxx',
      method: 'get',
  }).then(
    (responseText)=>{console.log(responseText)},
    (request)=>{console.log('error')}
  
  )
})
