const identity = "T4"
const token = "700db75c-822a-43c9-9008-949e66038386"

const header = {
  'identity': identity,
  'token': token,
}


async function getMessages(customerId) {
  try {
    const response = await fetch(`http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/${customerId}`, {
      method: 'GET',
      headers: header,
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

function inbox() {
  let username = document.getElementById("username").value;
  getMessages(username).then((res) =>
  {
    if (res.userName == null){
    alert("Error Password or Username")
  }else{window.location = "Home.html";;}
    console.log(res)
  });

}
