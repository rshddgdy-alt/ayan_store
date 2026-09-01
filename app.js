async function login(){

const server = document.getElementById("server").value;
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

const btn = document.querySelector("button");
btn.innerHTML = "جاري الاتصال...";

try {

const api =
`/.netlify/functions/proxy?server=${encodeURIComponent(server)}&user=${encodeURIComponent(username)}&pass=${encodeURIComponent(password)}`;

const response = await fetch(api);

const data = await response.json();


if(data && !data.error){

alert("تم تسجيل الدخول بنجاح ✅");

localStorage.setItem(
"ayan_user",
JSON.stringify(data)
);

}else{

alert("بيانات الدخول غير صحيحة ❌");

}


}catch(error){

alert("فشل الاتصال بالسيرفر ❌");

}


btn.innerHTML = "تسجيل الدخول";

}
