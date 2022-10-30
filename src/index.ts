import axios from 'axios';
// import ID5 from '@id5io/id5-api.js/lib/id5-api.js';
import { nanoid } from "nanoid";

const cookieName = "BCA-universal-cookie";

function getIP() {
  return axios.get('https://www.cloudflare.com/cdn-cgi/trace')
    .then(function(response) {
      const data = response.data;
      const ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
      const ip = data.match(ipRegex)[0];
      return ip
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
}

export async function bcaWeb3Connect() {
  const uuid = '';
  // const id5Status = await ID5.init({ partnerId: 1238 })

  const promisePackage = [getIP(), nanoid(32)]
  // const promisePackage = [getIP()]


  Promise.all(promisePackage)
    .then(res => console.log('success', res))
    .catch(err => console.log('error', err))
  return '';
}

export default {
  bcaWeb3Connect,
};
