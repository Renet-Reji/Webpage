function f(){
    var a = document.getElementById('efg').value;
    document.getElementById('pqr').innerHTML=a;
}
function email()
{
    var email= document.getElementById("mail").value;
    var sub="Request For Connecting";
    var body= "Hey, I would like to connect with you";
    window.location.href= "mailto:"+encodeURIComponent(email)+"?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body)+"&cc=renetmammen05@gmail.com";
}