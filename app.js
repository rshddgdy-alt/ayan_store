exports.handler = async (event) => {

const params = event.queryStringParameters || {};

const server = params.server;
const user = params.user;
const pass = params.pass;

if(!server || !user || !pass){
return {
statusCode:400,
body:JSON.stringify({error:"Missing data"})
};
}

try{

const url =
`${server}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}&action=get_live_streams`;

const response = await fetch(url);

const text = await response.text();

return {
statusCode:200,
headers:{
"Access-Control-Allow-Origin":"*",
"Content-Type":"application/json"
},
body:text
};

}catch(e){

return {
statusCode:500,
headers:{
"Access-Control-Allow-Origin":"*"
},
body:JSON.stringify({
error:e.message
})
};

}

};
