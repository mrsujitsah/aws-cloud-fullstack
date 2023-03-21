const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

export default function cors(url) {
  return `${proxyUrl}${url}`;
}