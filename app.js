async function login(){

const server = document.getElementById("server").value;
const username = document.getElementById("user").value;
const password = document.getElementById("pass").value;

const btn = document.querySelector("button");

btn.innerHTML="جاري الاتصال...";

try{

const api =
`/.netlify/functions/proxy?server=${encodeURIComponent(server)}&user=${encodeURIComponent(username)}&pass=${encodeURIComponent(password)}`;

const response = await fetch(api);

const data = await response.json();


if(data && !data.error){

localStorage.setItem(
"ayan_user",
JSON.stringify({
server:server,
username:username,
password:password
})
);

window.location.href="channels.html";

}else{

alert("بيانات الدخول غير صحيحة ❌");

}


}catch(e){

alert("فشل الاتصال بالسيرفر ❌");

}


btn.innerHTML="تسجيل الدخول";

}
