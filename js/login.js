const identity = "T4"
const token = "700db75c-822a-43c9-9008-949e66038386"

const header = {
  'identity': identity,
  'token': token,
}

const johnId = "1"
const johnAccount = "10"

async function getUser(username){
  try {
    const response = await fetch(`http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/${username}`, {
      method: 'GET',
      headers: header,
    });
    return await response.json();
  }
  catch(err){
    console.log(err);
  }
}

function login() {
  let username = document.getElementById("username").value;
  getUser(username).then((res) =>
  {
    if (res.userName == null){
    alert("Error Password or Username")
  }else{window.location = "Home.html";;}
    console.log(res)
  });


}

// async function validate()
// {
//
//
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//
//   if ( username == "marytan" && password == "abc"){
//     alert ("Login successfully");
//     // window.location = "success.html"; // Redirecting to other page.
//     return false;
// }
// else{
//   {
//     alert("Error Password or Username")/*displays error message*/
//    }
//   return response.json();
// }
//
//
// function contains(arr, key, val) {
//     arr = getUser()
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i][key] === val) return true;
//     }
//     return false;
// }
