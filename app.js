function login(){
 const server=document.getElementById('server').value;
 const user=document.getElementById('user').value;
 const pass=document.getElementById('pass').value;

 if(!server || !user || !pass){
   document.getElementById('msg').innerHTML="اكمل البيانات";
   return;
 }

 document.getElementById('msg').innerHTML="جاري الاتصال...";

 // هنا يتم ربط Xtream API بعد تحديد طريقة السيرفر
}
