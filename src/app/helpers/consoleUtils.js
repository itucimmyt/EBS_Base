/*this library provides methods that might help developers
better vizualize in console status of api calls, object construction,
errors, etc.*/

//prints a line with color
export function colorPrint(background, foreground, message) {
  console.log(
    '%c' + message,
    'background: ' + background + "; " + "color: " + foreground
  );
}

//meant to print a url with params, url must be a key=>value object
export function urlPrint(url, params) {
  console.log(
    '%c' + "URL CALL:",
    'background: ' + "black" + "; " + "color: " + "yellow"
  );
  console.log(url.split("?", 1)[0]);
  tablePrint(params);
}

//meant to display url call status
export function statusPrint(url, status) {
  console.log(
    '%c' + "URL FETCH: ",
    'background: ' + "black" + "; " + "color: " + "yellow"
  );

  console.log(
    url
  );

  let statusColor = "white";
  switch (status) {
    case 200:
      statusColor = "green"
      break;
    default:
      break;
  }

  console.log(
    '%c' + "STATUS: " + status,
    'background: ' + statusColor + "; " + "color: " + "white"
  );

}

//meant to display a table with data
export function tablePrint(data) {
  // detect ie
  let isIE = /*@cc_on!@*/false || !!document.documentMode;
  if(isIE === true){
    console.log(data);
  }
  else{
    console.table(data);
  }
}
