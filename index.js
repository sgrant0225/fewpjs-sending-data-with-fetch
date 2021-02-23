// Add your code here
// function submitData(name, email) {
//     fetch("https://localhost:3000/users", {
//         method: "POST",
//         headers:{ 
//             "Content-Type":"applicatio/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name,
//             email
//         })
//     })
//     .then(function(response) {
//         return response.json()
//       })
//       .then(function(object) {
//         console.log(object)
//       })
// }

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
          console.log(object)
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }
