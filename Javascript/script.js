let username;

document.getElementById("mysubmit").onclick = function(){
  username = document.getElementById("mytext").value;
  document.getElementById("welcome").textContent = `Hello ${username}`
}





