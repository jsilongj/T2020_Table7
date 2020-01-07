const identity = 'T4'
const token = "700db75c-822a-43c9-9008-949e66038386"

const header = {
  'identity': identity,
  'token': token,
}

// const johnId = "1"
// const johnAccount = "10"

// Returns a list of deposit accounts
async function getDepositAccounts(customerId) {
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

async function getDepositAccountBalance(accountId, month, year) {
  try {
    const response = await fetch(
      `http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/${accountId}/balance?month=${month}&year=${year}`, {
        method: 'GET',
        headers: header,
      }
    )
    return await response.json();
  } catch (error) {
    console.log(err);
  }
}

async function getTransactionsDetails(accountId, from, to) {
  try {
    const response = await fetch(
      `http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/${accountId}?from=${from}&to=${to}`, {
      method: 'GET',
      headers: header,
    }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

