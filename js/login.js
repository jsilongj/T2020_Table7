const identity = "T4"
const token = "700db75c-822a-43c9-9008-949e66038386"

const header = {
  'identity': identity,
  'token': token,
}

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

var u
var i

function login() {
  let username = document.getElementById("username").value;
  getUser(username).then((res) =>
  {
    if (res.userName == null){
    alert("Error Password or Username")
  }else{
    i = res.customerId;
    u = res.userName;
    sessionStorage.setItem('id',i);
    sessionStorage.setItem('user',u);
    console.log(sessionStorage.getItem('id'));
    console.log(sessionStorage.getItem('user'));
    window.location = "Home.html";
    // alert(i)

  }
    console.log(res)
  });

}
