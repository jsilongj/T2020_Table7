const identity = "T4"
const token = "700db75c-822a-43c9-9008-949e66038386"

const header = {
  'identity': identity,
  'token': token,
}

// const johnId = "1"
// const johnAccount = "10"

async function getMessages(customerId) {
  try {
    const response = await fetch(`http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/message/${customerId}`, {
      method: 'GET',
      headers: header,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
