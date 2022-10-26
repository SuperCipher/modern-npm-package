import axios from 'axios';


function getIP() {
  return axios.get('https://www.cloudflare.com/cdn-cgi/trace')
    .then(function (response) {
      const data = response.data;
      const ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
      const ip = data.match(ipRegex)[0];
      return ip
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

export async function bcaWeb3Connect() {
  const uuid = '';
  const ip = await getIP()
console.log('IP', ip)
  return '';
}

export default {
  bcaWeb3Connect,
};
