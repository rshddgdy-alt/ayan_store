exports.handler = async (event) => {

const params = event.queryStringParameters || {};

const server = params.server;
const user = params.user;
const pass = params.pass;

if (!server || !user || !pass) {
return {
statusCode:400,
body:JSON.stringify({error:"Missing data"})
};
}

try {

const url =
`${server}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}&action=get_live_streams`;

const response = await fetch(url);

const data = await response.json();

return {
 statusCode:200,
 headers:{
  "Access-Control-Allow-Origin":"*",
  "Content-Type":"application/json"
 },
 body:JSON.stringify(
  Array.isArray(data) ? data.slice(0,200) : data
)
}

} catch(error){

return {
statusCode:500,
body:JSON.stringify({
error:"Server connection failed"
})
};

}

};
