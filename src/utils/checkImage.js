function checkImage(url) {
  let result;
  let http = new XMLHttpRequest();

  http.open("HEAD", url, false);
  http.send();
  if (http.status != 404) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
  return result;

  //   return http.status != 404;
}
export default checkImage;
