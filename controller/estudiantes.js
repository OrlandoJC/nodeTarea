
function postStudent(body){
  let isOk = false
  let ok = validate(body)
  if(ok){
    isOk = true
  }
  return isOk
  }
  
  
  function validate(body){
    let ok = false
    if(body && typeof body === 'object' && Object.keys(body).length> 0 ){
      if(Object.hasOwnProperty.bind(body)('name') && body.name !== '' && body.name.length > 3
      && Object.hasOwnProperty.bind(body)('dni') && body.dni !== '' && body.dni.length > 3
      && Object.hasOwnProperty.bind(body)('grade') && body.grade> 0 
      ||( Object.hasOwnProperty.bind(body)('age')  &&  Object.hasOwnProperty.bind(body)('year') ) ){
        ok = true
      } 
    }
    return ok
  }
  
  
  module.exports ={
    postStudent
  }